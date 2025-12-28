import { create } from "zustand";
import { fetchRecipeItems } from "@/api/client";
import { FoodItem } from "@/types/item";

interface Filters {
  sortBy?: string;
  order?: "asc" | "desc";
  rating?: number;
  mealType?: string;
  tags?: string;
  cuisine?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
}

interface ItemsState {
  items: FoodItem[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  filters: Record<string, any>;
  setFilters: (f: Record<string, any>) => void;
  loadItems: (reset?: boolean) => Promise<void>;
}



const LIMIT = 10;

export const useItemsStore = create<ItemsState>((set, get) => ({
  items: [],
  filters: {},
  loading: false,
  loadingMore: false,
  error: null,
  page: 0,
  hasMore: true,

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
      page: 0,
      hasMore: true,
    })),

loadItems: async (reset = false) => {
  const { page, items, filters, loading, loadingMore, hasMore } = get();

  // 🛑 Prevent duplicate / extra calls
  if (!reset && (loading || loadingMore || !hasMore)) return;

  const currentPage = reset ? 0 : page;
  const skip = currentPage * LIMIT;

  set({
    loading: reset,
    loadingMore: !reset,
    error: null,
  });

  try {
    let url = "";

    if (filters.tags) {
      // ✅ tag-based endpoint
      url = `https://dummyjson.com/recipes/tag/${filters.tags}?limit=${LIMIT}&skip=${skip}`;
    } else {
      const { tags, ...rest } = filters;
      const params = new URLSearchParams({
        limit: String(LIMIT),
        skip: String(skip),
        ...rest,
      });
      url = `https://dummyjson.com/recipes?${params.toString()}`;
    }

    console.log("📦 Fetching:", url);

    const res = await fetch(url).then(r => r.json());

    set({
      items: reset ? res.recipes : [...items, ...res.recipes],
      page: currentPage + 1,
      hasMore: skip + LIMIT < res.total,
      loading: false,
      loadingMore: false,
    });
  } catch (err: any) {
    set({
      error: err.message || "Failed to load items",
      loading: false,
      loadingMore: false,
    });
  }
},





}));

