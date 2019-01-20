export class User {
  public code: number;
  public email: string;
  public name: {
    firstName: string,
    secondName?: string,
    firstSurname: string,
    secondSurname: string
  };
  public role: string;
  public password?: string;

  constructor(
    code: number,
    email: string,
    name: {
      firstName: string,
      secondName?: string,
      firstSurname: string,
      secondSurname: string
    },
    role: string,
    password?: string
  ) {
    this.code = code;
    this.email = email;
    this.name = name;
    this.role = role;
    this.password = password;
  }
}
