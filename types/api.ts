export type ApiResponse<T> = {ok: true; data: T} | {ok: false; message: string};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
};
