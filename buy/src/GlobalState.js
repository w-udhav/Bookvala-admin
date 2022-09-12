import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  category: -1
});

export { useGlobalState, setGlobalState };