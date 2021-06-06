import {post_actions, page_actions} from './actions';
import {StatePostType, ActionsPostType} from './../types_intefaces/types'

export const posts_reducer = (state: StatePostType, action: ActionsPostType) =>{
  switch (action.type) {
    case post_actions.SET_POST_TITLE:
      return {
        posts: [
          ...state.posts, 
          {
            title: action.title,
            postMessage: action.postMessage,
          }
        ]
      };
    default:
      throw new Error();
  }
}

export const page_reducer = (state: any, action: any) => {
  switch (action.type) {
    case page_actions.SET_CURRENT_PAGE:
      return {page: action.page};
    default:
      throw new Error();
  }
}

