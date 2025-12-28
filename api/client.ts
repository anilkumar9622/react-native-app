import { FoodItem } from "../types/item";
import { API_ENDPOINTS, BASE_URL } from "./endpoint";
type FetchItemsParams = {
  limit: number;
  skip: number;
  sortBy?: string;
  order?: "asc" | "desc";
  rating?: number;
  mealType?: string;
  tags?: string;
  cuisine?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
};

export const fetchRecipeItems = async ({
  limit,
  skip,
  sortBy,
  order,
  rating,
  mealType,
  tags,
  cuisine,
  difficulty,
}: FetchItemsParams) => {
  const params = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
  });

  if (sortBy) params.append("sortBy", sortBy);
  if (order) params.append("order", order);
  if (rating) params.append("minRating", String(rating));
  if (mealType) params.append("mealType", mealType);
  if (tags) params.append("tags", tags);
  if (cuisine) params.append("cuisine", cuisine);
  if (difficulty) params.append("difficulty", difficulty);

  const response = await fetch(
    `${BASE_URL}${API_ENDPOINTS.recipes}?${params.toString()}`
  );

  if (!response.ok) throw new Error("Unable to fetch recipes");

  return response.json();
};


export const fetchRecipeById = async (
  id: number | string
): Promise<FoodItem> => {
  const response = await fetch(
    `${BASE_URL}${API_ENDPOINTS.recipes}/${id}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch recipe details");
  }

  return response.json();
};

