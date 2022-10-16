import { defineStore } from 'pinia';

export const useMenu = defineStore('menu', {
  state: () => {
    return {
      list: []
    };
  },
  actions: {
    reset() {
      this.list = [];
    }
  }
});
