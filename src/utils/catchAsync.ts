/* eslint-disable no-void */
export default function wrapAsyncFunction<ARGS extends unknown[]>(fn: (...args: ARGS) => Promise<unknown>): (...args: ARGS) => void {
  return (...args) => {
    void fn(...args);
  };
}
