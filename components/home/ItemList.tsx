import { View, Text, ScrollView, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import FilterBar from "./filterBar";

const FOOD_LIST = [
  {
    id: 1,
    name: "Cheese Burst Pizza",
    price: "₹249",
    rating: "4.5",
    time: "25 min",
    distance: "2.1 km",
    offer: "20% OFF",
    freeDelivery: true,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    id: 2,
    name: "Veg Burger Combo",
    price: "₹179",
    rating: "4.3",
    time: "20 min",
    distance: "1.6 km",
    offer: "Buy 1 Get 1",
    freeDelivery: false,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 3,
    name: "Healthy Bowl",
    price: "₹299",
    rating: "4.6",
    time: "30 min",
    distance: "3.4 km",
    offer: "Flat ₹50 OFF",
    freeDelivery: true,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
];

export default function ItemList() {
  return (
    <View style={styles.wrapper}>
      <FilterBar />

      <Text style={styles.title}>Recommend for You</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {FOOD_LIST.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* LEFT IMAGE */}
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                contentFit="cover"
              />

              {item.offer && (
                <View style={styles.offerTag}>
                  <Text style={styles.offerText}>{item.offer}</Text>
                </View>
              )}
            </View>

            {/* RIGHT CONTENT */}
            <View style={styles.content}>
              <Text style={styles.name} numberOfLines={2}>
                {item.name}
              </Text>

              <View style={styles.ratingRow}>
                <View style={styles.ratingBox}>
                  <MaterialIcons name="star" size={14} color="#fff" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>

                <Text style={styles.metaText}>
                  {item.time} • {item.distance}
                </Text>
              </View>

              <Text style={styles.price}>{item.price}</Text>

              {item.freeDelivery && (
                <View style={styles.deliveryRow}>
                  <MaterialIcons
                    name="delivery-dining"
                    size={18}
                    color="#16a34a"
                  />
                  <Text style={styles.deliveryText}>Free Delivery</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#f3f4f6",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 7,
    marginBottom: 14,
    overflow: "hidden",
    elevation: 1,
  },

  imageWrapper: {
    width: 130,
    height: 130,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  offerTag: {
    position: "absolute",
    bottom: 6,
    left: 6,
    backgroundColor: "#ef4444",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },

  offerText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },

  content: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#16a34a",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },

  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 2,
  },

  metaText: {
    fontSize: 12,
    color: "#6b7280",
  },

  price: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 4,
  },

  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  deliveryText: {
    fontSize: 12,
    color: "#16a34a",
    marginLeft: 4,
    fontWeight: "600",
  },
});
