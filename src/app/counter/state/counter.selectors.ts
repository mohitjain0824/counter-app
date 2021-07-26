import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const getCounterFeatureSelector =
  createFeatureSelector<CounterState>('counter');

export const getCounterSelector = createSelector(
  getCounterFeatureSelector,
  (state) => state.counter
);

export const getNameSelector = createSelector(
  getCounterFeatureSelector,
  (state) => state.name
);
