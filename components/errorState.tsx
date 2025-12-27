import { View, Text, Pressable } from "react-native";

interface Props {
  message: string;
  onRetry: () => void;
}

export default function ErrorState({ message, onRetry }: Props) {
  return (
    <View className="flex-1 items-center justify-center px-4">
      <Text className="text-red-500 mb-4 text-center">
        {message}
      </Text>
      <Pressable
        onPress={onRetry}
        className="bg-blue-600 px-4 py-2 rounded-lg"
      >
        <Text className="text-white font-semibold">
          Retry
        </Text>
      </Pressable>
    </View>
  );
}
