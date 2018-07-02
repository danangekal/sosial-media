import { PostApi } from '../../../api/posts';

export function readPost(params){
  return {
    type: "READ_POST",
    payload: PostApi.filterPosts(params)
  }
}