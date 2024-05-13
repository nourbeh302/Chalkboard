import { User } from './User';

export class Blog {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly createdAt: Date,
    public readonly createdBy: User
  ) {}
}
