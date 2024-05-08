export interface ICreateUser {
  id?: number;
  user_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  role?: string
}

export interface IUpdateUser extends ICreateUser {}

export interface ILoginUser extends ICreateUser {}

export interface IAllUsers {
    user: ICreateUser;
}
