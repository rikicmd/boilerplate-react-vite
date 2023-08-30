export interface Auth {
  is_login: boolean;
  logout: () => void;
  login: () => void;
}
