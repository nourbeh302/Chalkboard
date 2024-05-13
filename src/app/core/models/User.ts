export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly displayName: string | null,
    public readonly photoURL: string | null
  ) {}
}
