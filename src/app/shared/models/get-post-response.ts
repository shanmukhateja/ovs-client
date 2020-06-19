import { StatusTypes } from './status-types';
import { Post } from './post';

export interface IGetPosts {
  status: StatusTypes,
  data: Post[],
  rows_count: number
}
