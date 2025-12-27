import { fetchPosts } from "@/api/client";
import { Item } from "@/types/item";
import { create } from "zustand";

interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
  loadItems: () => Promise<void>;
}

export const useItemsStore = create<ItemsState>((set) => ({
  items: [],
  loading: false,
  error: null,

  loadItems: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchPosts();
      set({ items: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
