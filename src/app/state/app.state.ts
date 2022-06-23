import { counterReduser } from '../counter/state/counter.reduser';
import { CounterState } from '../counter/state/counter.state';
import { postsReducer } from '../posts/state/posts.reducer';
import { PostsState } from '../posts/state/posts.state';

export interface AppState {
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
    counter:counterReduser,
    posts:postsReducer
}