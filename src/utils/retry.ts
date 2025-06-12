import { sleep } from '@/utils/sleep';
import { AbortError } from '@/errors/abort.error';

type Options<T> = {
  attempts?: number;
  delayMs?: number;
  retryIf: (res: T) => boolean;
  abortController?: AbortController;
}

const DEFAULT_ATTEMPTS = Number(process.env.NEXT_PUBLIC_AUTO_RETRY_ATTEMPTS || '3');
const DEFAULT_DELAY = Number(process.env.NEXT_PUBLIC_AUTO_RETRY_DELAY_MS || '5000');

export async function autoRetry<T>(
  fn: () => Promise<T>,
  { attempts = DEFAULT_ATTEMPTS, delayMs = DEFAULT_DELAY, retryIf, abortController }: Options<T>
) {
  let res;
  let aborted = false;

  const onAbort = () => {
    abortController?.signal.removeEventListener('abort', onAbort);
    aborted = true;
  }

  abortController?.signal.addEventListener('abort', onAbort);

  for (let i = 0; i < attempts + 1; i++) {
    res = await fn();

    if (aborted) throw new AbortError();
    if (!retryIf(res)) break;

    if (delayMs && i < attempts) {
      console.log(`Re-attempting, ${i + 1} / ${attempts}... ${delayMs ? `in ${delayMs}ms` : ''}`)
      await sleep(delayMs);
    }
  }

  return res;
}

export async function autoRetryCatchable<T>(fn: () => Promise<T>, options?: Omit<Options<T>, 'retryIf'>): Promise<T> {
  const cb = async () => {
    try {
      return await fn();
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  const res = await autoRetry(cb, { ...options, retryIf: r => r instanceof Error })

  if (res instanceof Error) throw res;
  return res as T;
}
