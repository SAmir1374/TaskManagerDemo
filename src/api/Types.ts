export type ResponseBody<T> = {
  data: T | null;
  code: number;
  error: boolean;
  message: string;
};
