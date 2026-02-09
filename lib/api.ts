import axios, { type AxiosError } from "axios";
import type { Customer } from "@/types/customer";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

async function fetchApi<T>(path: string): Promise<T> {
  try {
    const { data } = await api.get<T>(path);
    return data;
  } catch (err) {
    const axiosError = err as AxiosError<unknown>;
    const message =
      axiosError.response?.status != null
        ? `API error: ${axiosError.response.status} ${axiosError.response.statusText ?? ""}`
        : axiosError.message ?? "Request failed";
    throw new Error(message);
  }
}

export async function fetchCustomers(): Promise<Customer[]> {
  return fetchApi<Customer[]>("/users");
}

export async function fetchCustomerById(id: string): Promise<Customer | null> {
  try {
    return await fetchApi<Customer>(`/users/${id}`);
  } catch {
    return null;
  }
}
