export const ROUTES = {
  HOME: "/",
  CUSTOMER_DETAIL: (id: string | number) => `/customers/${id}`,
} as const;

export const DEBOUNCE_MS = 300;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
} as const;
