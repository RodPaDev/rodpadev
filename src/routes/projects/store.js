import { writable } from 'svelte/store';

function createProject() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    set,
    update
  };
}

export const projectStore = createProject();
