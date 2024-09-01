export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetchOptions {
    method?: HttpMethod;
    headers?: HeadersInit;
    body?: any;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_KEY || 'http://localhost:3000';

export async function httpRequest<T>(
    url: string,
    { method = 'GET', headers = {}, body }: FetchOptions = {},
): Promise<T> {
    // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    // const defaultHeaders: HeadersInit = {
    //     'Content-Type': 'application/json',
    //     ...(token ? { Authorization: `Bearer ${token}` } : {}),
    //     ...headers,
    // };

    const response = await fetch(`${API_BASE_URL}${url}`, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    console.log(response);

    return response.json();
}
