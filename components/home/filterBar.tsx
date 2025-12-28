import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useItemsStore } from "@/hooks/store/useItemsStore";

const FILTERS = [
  {
    label: "A–Z",
    key: "sortBy",
    value: "name",
    order: "asc",
    icon: "swap-vert",
  },
  {
    label: "Pizza",
    key: "tags",
    value: "Pizza",
    icon: "local-pizza",
  },
  {
    label: "Italian",
    key: "tags",
    value: "Italian",
    icon: "restaurant-menu",
  },
  {
    label: "Vegetarian",
    key: "tags",
    value: "Vegetarian",
    icon: "grass",
  },
  {
    label: "Stir-fry",
    key: "tags",
    value: "Stir-fry",
    icon: "emoji-food-beverage",
  },
  {
    label: "Asian",
    key: "tags",
    value: "Asian",
    icon: "public",
  },
  {
    label: "Cookies",
    key: "tags",
    value: "Cookies",
    icon: "cookie",
  },
  {
    label: "Dessert",
    key: "tags",
    value: "Dessert",
    icon: "icecream",
  },
  {
    label: "Baking",
    key: "tags",
    value: "Baking",
    icon: "cake",
  },
  {
    label: "Pasta",
    key: "tags",
    value: "Pasta",
    icon: "ramen-dining",
  },
];



export default function FilterBar() {
  const { setFilters, loadItems, filters } = useItemsStore();

  return (
    <View style={styles.wrapper}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {FILTERS.map((item, index) => {
    // Correct active check
    const active =
      item.key === "tags"
        ? filters.tags === item.value
        : filters[item.key] === item.value;

    return (
      <Pressable
        key={index}
        style={[styles.filter, active && styles.activeFilter]}
        onPress={() => {
          const newFilter: Record<string, any> = {};

          if (item.key === "tags") {
            newFilter.tags = active ? undefined : item.value; // set 'tags' key
          } else {
            newFilter[item.key] = active ? undefined : item.value;
          }

          // Include order if present
          if (item.order) newFilter.order = item.order;

          setFilters(newFilter);
          loadItems(true);
        }}
      >
        <MaterialIcons
          name={item.icon as any}
          size={16}
          color={active ? "#fff" : "#374151"}
        />
        <Text style={[styles.text, active && { color: "#fff" }]}>
          {item.label}
        </Text>
      </Pressable>
    );
  })}
</ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  activeFilter: {
    backgroundColor: "#16a34a",
    borderColor: "#16a34a",
  },

  wrapper: {
    // backgroundColor: "#fff",
    paddingBottom: 12,
  },

  container: {
    // paddingHorizontal: 16,
  },

  filter: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 999,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  pressed: {
    opacity: 0.6,
  },

  text: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
  },
});
