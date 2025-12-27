import { View, Text } from "react-native";

export default function EmptyState() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-gray-500 text-base">
        No data available
      </Text>
    </View>
  );
}
