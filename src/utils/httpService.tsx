export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface FetchOptions {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: any;
}

export async function httpRequest<T>(
  url: string,
  { method = "GET", headers = {}, body }: FetchOptions = {}
): Promise<T> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };

  const response = await fetch(url, {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }

  return response.json();
}
