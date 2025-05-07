type FetchData<T> = {
  data: T | null;
  response: Response;
  validationErrors?: Record<keyof T, string>;
};

type Params<D> = {
  url: string;
  method: 'POST' | 'GET';
  headers?: Record<string, string>;
  data?: D;
};

async function fetchData<E, D>({
  url,
  method,
  headers,
  data,
}: Params<D>): Promise<FetchData<E>> {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: method === 'POST' && data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(url, options);

  if (response.status === 400) {
    const data = await response.json();

    if ('validationErrors' in data) {
      return { data: null, response, validationErrors: data.validationErrors };
    }

    return { data: null, response };
  }

  if (!response.ok) {
    return {data: null, response}
  }

  const result = (await response.json()) as E;
  return { data: result, response };
}

export default fetchData;
