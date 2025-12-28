import { FoodItem, FoodListRes } from "@/types/item";
import { API_ENDPOINTS } from "../endpoint";
import { apiService } from "./apiServices";

export const fetchItemService = async () => {
  const res = await apiService.get<FoodListRes>(API_ENDPOINTS.recipes);
  console.log(">>>>>",{res})
//   return res.data.items; 
};


