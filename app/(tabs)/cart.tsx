import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";

import { useCartStore } from "@/hooks/store/useCartStore";

export default function CartScreen() {
  const {
    items,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalCalories,
  } = useCartStore();

  if (!items.length) {
    return (
      <View style={styles.center}>
        <Text>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>
                {item.caloriesPerServing} cal
              </Text>

              <View style={styles.qtyRow}>
                <Pressable onPress={() => decreaseQty(item.id)}>
                  <MaterialIcons name="remove-circle-outline" size={22} />
                </Pressable>

                <Text style={styles.qty}>{item.quantity}</Text>

                <Pressable onPress={() => increaseQty(item.id)}>
                  <MaterialIcons name="add-circle-outline" size={22} />
                </Pressable>

                <Pressable onPress={() => removeFromCart(item.id)}>
                  <MaterialIcons
                    name="delete-outline"
                    size={22}
                    color="#ef4444"
                  />
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.total}>
          Total Calories: {totalCalories}
        </Text>

        <Pressable style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingTop: 60,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: 90,
    height: 90,
  },
  details: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
  },
  meta: {
    fontSize: 12,
    color: "#6b7280",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  qty: {
    fontSize: 14,
    fontWeight: "600",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  total: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  checkoutBtn: {
    backgroundColor: "#ef4444",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "700",
  },
});
