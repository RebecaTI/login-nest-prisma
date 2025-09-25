import { Utils } from 'src/shared/utils/utils';
import { Entity } from '../shared/entity';

export type UserCreateDto = {
  email: string;
  password: string;
};

export class User extends Entity {
  private constructor(
    id: string,
    private email: string,
    private password: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    super(id, createdAt, updatedAt);
    this.validate();
  }

  public static create({ email, password }: UserCreateDto): User {
    const id = Utils.GenerateUUID();
    const createAt = new Date();
    const updateAt = new Date();
    return new User(id, email, password, createAt, updateAt);
  }

  protected validate(): void {}

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
}
