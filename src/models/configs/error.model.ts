export interface Error {
  code?: number;
  message?: string;
  catchError?: (value: Error) => void;
}
