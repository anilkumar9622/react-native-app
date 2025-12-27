import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
// import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Detail"
>;

export default function DetailScreen({ route }: Props) {
  const { item } = route.params;

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold text-gray-900">
        {item.title}
      </Text>
      <Text className="text-base text-gray-700 mt-3">
        {item.body}
      </Text>
    </View>
  );
}
