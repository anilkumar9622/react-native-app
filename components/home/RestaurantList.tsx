import { View, Text, StyleSheet } from "react-native";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Restaurants Near You</Text>
      {[1, 2, 3, 4].map((_, i) => (
        <RestaurantCard key={i} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
});
