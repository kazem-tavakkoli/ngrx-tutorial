import { CounterState } from '../models/tutorial.model';
import { postsReducer } from '../posts/state/posts.reducer';
import { PostsState } from '../posts/state/posts.state';
import { counterReducer } from '../reducers/tuturial.reducer';

export interface AppState {
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
    counter:counterReducer,
    posts:postsReducer
}