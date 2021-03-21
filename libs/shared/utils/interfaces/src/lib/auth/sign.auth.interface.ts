export interface ISignAuthPayload {
  username: string;
  password: string;
}

export interface ISignAuthResponse {
  accessToken: string;
  expiresIn: number;
  id: number;
}
