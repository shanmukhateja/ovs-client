import { StatusTypes } from './status-types';
import { ITopic } from './topic'
export interface IGetAllTopics {

  status: StatusTypes,
  data: ITopic[]

}
