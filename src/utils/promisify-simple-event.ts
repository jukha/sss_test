import { SimpleEventSubscribeOnly } from '@osx11/simple-event';

const promisifySimpleEvent = <T,>(simpleEvent: SimpleEventSubscribeOnly<T>): () => Promise<T> => {
  return () => new Promise((resolve) => {
    const onEvent = (v: T) => {
      resolve(v);
      simpleEvent.removeEventListener(onEvent);
    }

    simpleEvent.addEventListener(onEvent);
  })
}

export default promisifySimpleEvent
