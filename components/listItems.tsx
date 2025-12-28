import { TouchableOpacity, Text, View } from "react-native";
import { FoodItem } from "../types/item";

interface Props {
  item: FoodItem[];
  onPress: () => void;
}

export default function ListItem({ item, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="px-4 py-3 border-b border-gray-200"
    >
      <View>
        <Text
          className="text-base font-semibold text-gray-900"
          numberOfLines={1}
        >
          {/* {item.title} */}
        </Text>
        <Text
          className="text-sm text-gray-500 mt-1"
          numberOfLines={1}
        >
          {/* {item.body} */}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
