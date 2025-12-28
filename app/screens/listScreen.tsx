// import { useEffect } from "react";
// import { View, FlatList } from "react-native";
// import { useRouter } from "expo-router";

// import { useItemsStore } from "@/hooks/store/useItemsStore";
// import Loader from "@/components/loader";
// import ErrorState from "@/components/errorState";
// import EmptyState from "@/components/emptyState";
// import ListItem from "@/components/listItems";

// export default function ListScreen() {
//   const router = useRouter();
//   const { items, loading, error, loadItems } = useItemsStore();

//   useEffect(() => {
//     loadItems();
//   }, []);

//   if (loading) return <Loader />;
//   if (error) return <ErrorState message={error} onRetry={loadItems} />;
//   if (!items.length) return <EmptyState />;

//   return (
//     <View className="flex-1 bg-white">
//       <FlatList
//         data={items}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <ListItem
//             item={item}
//             onPress={() =>
//               router.push({
//                 pathname: "/detail",
//                 params: { id: item.id },
//               })
//             }
//           />
//         )}
//       />
//     </View>
//   );
// }
