/* eslint-disable no-unused-vars */
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HTTP_PORT: number;
      NODE_ENV: "development" | "test" | "production";
      DB_NAME: string;
      DB_HOST: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_PORT: number;
      SERVER_PORT: number;
    }
  }
}
