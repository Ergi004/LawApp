export interface ICreateUser {
  id?: number;
  user_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  role?: string;
  token?: any;
}

export interface IUpdateUser extends ICreateUser {}

export interface ILoginUser extends ICreateUser {
  user: {
    [x: string]: any;
    id?: number;
    user_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    role?: string;
  };
  token?: any;

}

export interface IAllUsers {
  user: ICreateUser;
}
