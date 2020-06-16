import { IDefaultUserFields } from './default-user-ui';

export interface Post {
  id: number

  title: string

  description: string

  topic_id: string

  user_id: string | IDefaultUserFields

  post_counter: number

  created_at: Date
}
