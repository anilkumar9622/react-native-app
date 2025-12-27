import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FILTERS = [
  { label: "Sort By", icon: "swap-vert" },
  { label: "Cuisines", icon: "restaurant-menu" },
  { label: "Free Delivery", icon: "delivery-dining" },
  { label: "Offers", icon: "local-offer" },
  { label: "Under 30 min", icon: "timer" },
  { label: "Rating 4+", icon: "star" },
];

export default function FilterBar() {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {FILTERS.map((item, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.filter,
              pressed && styles.pressed,
            ]}
            onPress={() => {
              console.log("Filter:", item.label);
            }}
          >
            <MaterialIcons
              name={item.icon as any}
              size={16}
              color="#374151"
            />
            <Text style={styles.text}>{item.label}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
