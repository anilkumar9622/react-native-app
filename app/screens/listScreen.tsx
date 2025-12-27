import { useEffect } from "react";
import { View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useItemsStore } from "@/hooks/store/useItemsStore";
import Loader from "@/components/loader";
import ErrorState from "@/components/errorState";
import EmptyState from "@/components/emptyState";
import ListItem from "@/components/listItems";

type Props = NativeStackScreenProps<RootStackParamList, "List">;

export default function ListScreen({ navigation }: Props) {
  const { items, loading, error, loadItems } = useItemsStore();

  useEffect(() => {
    loadItems();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} onRetry={loadItems} />;
  if (!items.length) return <EmptyState />;

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() =>
              navigation.navigate("Detail", { item })
            }
          />
        )}
      />
    </View>
  );
}
