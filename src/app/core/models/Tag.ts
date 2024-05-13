import { Blog } from './Blog';

export class Tag {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly Blog: Blog
  ) {}
}
