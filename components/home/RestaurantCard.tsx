import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

export default function RestaurantCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
        }}
        style={styles.image}
        contentFit="cover"
      />

      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>Food Corner</Text>
          <View style={styles.rating}>
            <MaterialIcons name="star" size={16} color="#facc15" />
            <Text style={styles.ratingText}>4.3</Text>
          </View>
        </View>

        <Text style={styles.meta}>
          North Indian · Chinese · ₹200 for one
        </Text>

        <View style={styles.delivery}>
          <MaterialIcons name="delivery-dining" size={18} color="#16a34a" />
          <Text style={styles.deliveryText}>Free Delivery</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 160,
  },
  body: {
    padding: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
  },
  meta: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
  delivery: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  deliveryText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#16a34a",
  },
});
