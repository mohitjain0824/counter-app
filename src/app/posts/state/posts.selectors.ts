import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const getPostsFeatureSelector = createFeatureSelector<PostsState>('posts');

export const getPostsSelector = createSelector(
  getPostsFeatureSelector,
  (state) => state.posts
);
