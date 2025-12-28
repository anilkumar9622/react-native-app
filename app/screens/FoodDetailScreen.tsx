import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
const FOOD_LIST = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    price: "₹269",
    rating: "4.4",
    image:
      "https://images.unsplash.com/photo-1601924582975-7e1d79e89d79",
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    price: "₹299",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
  },
  {
    id: 3,
    name: "Paneer Tikka Pizza",
    price: "₹279",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1548365328-9f547fb0955b",
  },
];

export default function FoodDetailScreens() {
   const { id } = useLocalSearchParams();

  const food = FOOD_LIST.find((item) => item.id === Number(id));

  if (!food) {
    return (
      <View style={styles.center}>
        <Text>Item not found</Text>
      </View>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* HERO IMAGE */}
      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
          }}
          style={styles.heroImage}
          contentFit="cover"
        />

        <View style={styles.offerBadge}>
          <Text style={styles.offerText}>20% OFF</Text>
        </View>
      </View>

      {/* DETAILS */}
      <View style={styles.detailContainer}>
        <View style={styles.rowBetween}>
          <Text style={styles.title}>Cheese Burst Pizza</Text>
          <Text style={styles.price}>₹249</Text>
        </View>

        {/* RATING + META */}
        <View style={styles.metaRow}>
          <View style={styles.ratingBox}>
            <MaterialIcons name="star" size={14} color="#fff" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
          <Text style={styles.metaText}>25 min • 2.1 km</Text>
        </View>

        {/* DELIVERY */}
        <View style={styles.deliveryRow}>
          <MaterialIcons
            name="delivery-dining"
            size={18}
            color="#16a34a"
          />
          <Text style={styles.deliveryText}>Free Delivery</Text>
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.description}>
          A delicious cheese burst pizza loaded with rich mozzarella cheese
          and a crispy crust. Perfect for lunch or dinner cravings.
        </Text>

        {/* ADD TO CART */}
        <Pressable style={styles.addButton}>
          <Text style={styles.addText}>Add to Cart</Text>
        </Pressable>
      </View>

      {/* SIMILAR ITEMS */}
      <View style={styles.similarSection}>
        <Text style={styles.sectionTitle}>Similar Items</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {FOOD_LIST.map((item) => (
            <View key={item.id} style={styles.similarCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.similarImage}
                contentFit="cover"
              />
              <Text style={styles.similarName} numberOfLines={1}>
                {item.name}
              </Text>
              <View style={styles.similarRow}>
                <Text style={styles.similarPrice}>{item.price}</Text>
                <View style={styles.similarRating}>
                  <MaterialIcons name="star" size={12} color="#facc15" />
                  <Text style={styles.similarRatingText}>
                    {item.rating}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  heroImage: {
    width: "100%",
    height: 260,
  },

  offerBadge: {
    position: "absolute",
    bottom: 12,
    left: 16,
    backgroundColor: "#ef4444",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  offerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  detailContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    flex: 1,
  },

  price: {
    fontSize: 18,
    fontWeight: "800",
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#16a34a",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 10,
  },

  ratingText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 4,
    fontWeight: "700",
  },

  metaText: {
    fontSize: 13,
    color: "#6b7280",
  },

  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  deliveryText: {
    marginLeft: 6,
    color: "#16a34a",
    fontWeight: "600",
    fontSize: 13,
  },

  description: {
    marginTop: 14,
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },

  addButton: {
    backgroundColor: "#ef4444",
    marginTop: 18,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  addText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  similarSection: {
    marginTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  similarCard: {
    backgroundColor: "#fff",
    width: 160,
    borderRadius: 14,
    marginRight: 14,
    overflow: "hidden",
    elevation: 3,
  },

  similarImage: {
    width: "100%",
    height: 110,
  },

  similarName: {
    fontSize: 14,
    fontWeight: "700",
    margin: 8,
  },

  similarRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingBottom: 10,
  },

  similarPrice: {
    fontSize: 13,
    fontWeight: "700",
  },

  similarRating: {
    flexDirection: "row",
    alignItems: "center",
  },

  similarRatingText: {
    fontSize: 12,
    marginLeft: 4,
  },
});
