type LoginDate = {
  email: string;
  password: string;
};

type RegisterDate = {
  email: string;
  password: string;
  passwordRepeat: string;
  username: string;
  firstName: string;
  lastName: string;
};

export type { LoginDate, RegisterDate };
