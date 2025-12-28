import { IApiResponse } from "./Common";

export interface FoodItem {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  mealType: string[];
  rating: number;
  reviewCount: number;
  image: string;
  userId: number;
}



export type FoodListReq = {
  cuisine?: string;
  mealType?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  search?: string;
  page?: number;
  limit?: number;
};

export type FoodListRes = IApiResponse<{
  recipes: FoodItem[];
  total: number;
  skip: number;
  limit: number;
}>;



