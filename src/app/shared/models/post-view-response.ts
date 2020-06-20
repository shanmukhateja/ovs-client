import { StatusTypes } from './status-types';

export interface IPostViewResponse {
  status: StatusTypes,
  data: IPostView[]
}

export interface IPostView {
  user_id: number
  user_name: string
  user_score: string
}
