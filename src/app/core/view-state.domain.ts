export interface ViewState<T = object> {
  state: 'loaded' | 'loading' | 'error';
  payload?: T;
}
