import { defineStore } from "pinia";

export const useAppContextStore = defineStore("useAppContextStore", {
  state: () => ({
    value: "" as string,
  }),
  actions: {
    set(value: string) {
      if (this.isValidUrl(value)) {
        this.value = value;
      }
    },
    clear() {
      this.value = "";
    },
    isValidUrl(url: string): boolean {
      try {
        const parsed = new URL(url);

        // Only allow http or https
        const isSafeProtocol = ["http:", "https:"].includes(parsed.protocol);
        console.log({isSafeProtocol})

        return isSafeProtocol;
      } catch {
        return false;
      }
    },
  },
});
