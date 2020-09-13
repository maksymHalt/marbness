import { useMemo } from 'react';
import { init, RematchStore, InitConfig } from '@rematch/core';
import * as models from '@src/models';

export const initStore: (InitConfig) => RematchStore = (initialState) =>
  init({
    models,
    redux: { initialState }
  });

// Code below is just for serving Redux in SSR

let store;

export const initializeStore: (RematchStore) => RematchStore = (preloadedState) => {
  let _store = store || initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: InitConfig): RematchStore {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
