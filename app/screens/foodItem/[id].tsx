import { View, Text, ScrollView, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { fetchRecipeById, fetchRecipeItems } from "@/api/client";
import Loader from "@/components/loader";
import { FoodItem } from "@/types/item";
import { useCartStore } from "@/hooks/store/useCartStore";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
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
export default function FoodDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

const navigation = useNavigation<any>();
  const [item, setItem] = useState<FoodItem | null>(null);
  const [similarItems, setSimilarItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useCartStore((s) => s.addToCart);
  const [adding, setAdding] = useState(false);
  const handleAddToCart = (item: FoodItem) => {
    if (adding) return;

    setAdding(true);

    setTimeout(() => {
      addToCart(item);

      Toast.show({
        type: "success",
        text1: "Added to cart",
        text2: `Item added successfully`,
        position: "bottom",
      });

      setAdding(false);
      setTimeout(() => router.push("/cart"), 600);
    }, 400);

  };

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      try {
        const data = await fetchRecipeById(id);
        setItem(data);

        // fetch similar items by cuisine
        const listRes = await fetchRecipeItems({ limit: 10, skip: 0 });
        const filtered = listRes.recipes.filter(
          (r:any) => r.cuisine === data.cuisine && r.id !== data.id
        );
        setSimilarItems(filtered);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) return <Loader />;
  if (!item)
    return (
      <View style={styles.center}>
        <Text>Item not found</Text>
      </View>
    );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* HERO IMAGE */}
      <Image source={{ uri: item.image }} style={styles.heroImage} />

      {/* DETAILS */}
      <View style={styles.detailContainer}>
        <View style={styles.rowBetween}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>{item.caloriesPerServing} cal</Text>
        </View>

        {/* RATING */}
        <View style={styles.metaRow}>
          <View style={styles.ratingBox}>
            <MaterialIcons name="star" size={14} color="#fff" />
            <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.metaText}>
            {item.cuisine} • {item.difficulty}
          </Text>
        </View>

        {/* PREP INFO */}
        <Text style={styles.metaText}>
          Prep {item.prepTimeMinutes} min • Cook {item.cookTimeMinutes} min
        </Text>

        {/* INGREDIENTS */}
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {item.ingredients.map((ing, i) => (
          <Text key={i} style={styles.listItem}>• {ing}</Text>
        ))}

        {/* INSTRUCTIONS */}
        <Text style={styles.sectionTitle}>Instructions</Text>
        {item.instructions.map((step, i) => (
          <Text key={i} style={styles.listItem}>
            {i + 1}. {step}
          </Text>
        ))}

        {/* ADD TO CART */}
        {/* <Pressable
          style={styles.addButton}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.addText}>Add to Cart</Text>
        </Pressable> */}
         <Pressable
                    style={[
                      styles.addButton,
                      adding && { opacity: 0.7 },
                    ]}
                    onPress={() => handleAddToCart(item)}
                    disabled={adding}
                  >
                    {adding ? (
                      <ActivityIndicator size="small" color="#fff" />
                    ) : (
                      <Text style={styles.addText}>Add to cart</Text>
                    )}
                  </Pressable>
      </View>
      {similarItems.length > 0 && (
        <View style={styles.similarSection}>
          <Text style={styles.similarTitle}>Similar Items</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {similarItems.map((s) => (
              <View key={`similarItem_${s.id}`} style={styles.similarCard}>
                <Image source={{ uri: s.image }} style={styles.similarImage} />

                <View style={styles.similarContent}>
                  <Text numberOfLines={1} style={styles.similarName}>
                    {s.name}
                  </Text>

                  <View style={styles.similarRow}>
                    <Text style={styles.similarPrice}>
                      {s.caloriesPerServing} cal
                    </Text>

                    <View style={styles.similarRating}>
                      <MaterialIcons name="star" size={12} color="#facc15" />
                      <Text style={styles.similarRatingText}>
                        {s.rating.toFixed(1)}
                      </Text>
                    </View>
                  </View>

                  <Pressable
                    style={[
                      styles.addButtonSmall,
                      adding && { opacity: 0.7 },
                    ]}
                    onPress={() => handleAddToCart(s)}
                    disabled={adding}
                  >
                    {adding ? (
                      <ActivityIndicator size="small" color="#fff" />
                    ) : (
                      <Text style={styles.addTextSmall}>Add</Text>
                    )}
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#f9fafb" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  addButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16
  },
  addText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  heroImage: { width: "100%", height: 260 },

  detailContainer: { padding: 16, backgroundColor: "#fff" },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: 20, fontWeight: "700" },
  price: { fontSize: 14, fontWeight: "700" },

  metaRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  metaText: { fontSize: 12, color: "#6b7280", marginTop: 4 },

  ratingBox: {
    flexDirection: "row",
    backgroundColor: "#16a34a",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  ratingText: { color: "#fff", fontSize: 12 },

  sectionTitle: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "700",
  },

  listItem: { fontSize: 13, marginTop: 4, color: "#374151" },
  similarTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 5
  },
  similarSection: { marginBottom: 30, paddingHorizontal: 16 },
  similarCard: { width: 140, marginRight: 12 },
  similarImage: { width: "100%", height: 100, borderRadius: 10 },
  similarName: { fontSize: 13, fontWeight: "600", marginTop: 6 },
  similarRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  similarPrice: { fontSize: 12 },
  similarRating: { flexDirection: "row", alignItems: "center" },
  similarRatingText: { fontSize: 12, marginLeft: 2 },

  similarContent: {
    padding: 10,
  },

  addButtonSmall: {
    marginTop: 8,
    backgroundColor: "#16a34a",
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },

  addTextSmall: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },

});
