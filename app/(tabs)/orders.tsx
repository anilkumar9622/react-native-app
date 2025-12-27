import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function OrdersScreen() {
  // Sample orders data
  const orders = [
    {
      id: 1,
      restaurant: "Food Corner",
      items: "Burger, Fries, Coke",
      price: 350,
      status: "Delivered",
      time: "30 min",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", // local image
    },
    {
      id: 2,
      restaurant: "Pizza Hub",
      items: "Margherita Pizza",
      price: 450,
      status: "On the way",
      time: "25 min",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      id: 3,
      restaurant: "Biryani House",
      items: "Chicken Biryani, Raita",
      price: 300,
      status: "Cancelled",
      time: "—",
      image:  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topSection}>
              <Text style={styles.userName}>Your Orders</Text>
              
            </View>
      <View style={styles.cardContainer}>
      {orders.map((order) => (
        <View key={order.id} style={styles.card}>
          {/* Order Image */}
          <Image source={{ uri: order.image }} style={styles.image} />

          {/* Order Details */}
          <View style={styles.details}>
            <View style={styles.header}>
              <Text style={styles.restaurant}>{order.restaurant}</Text>
              <Text style={styles.price}>₹{order.price}</Text>
            </View>

            <Text style={styles.items}>{order.items}</Text>

            <View style={styles.footer}>
              <View style={styles.statusRow}>
                <MaterialIcons
                  name={
                    order.status === "Delivered"
                      ? "check-circle"
                      : order.status === "On the way"
                      ? "local-shipping"
                      : "cancel"
                  }
                  size={16}
                  color={
                    order.status === "Delivered"
                      ? "#16a34a"
                      : order.status === "On the way"
                      ? "#f59e0b"
                      : "#ef4444"
                  }
                />
                <Text style={styles.statusText}>{order.status}</Text>
              </View>
              <Text style={styles.time}>{order.time}</Text>
            </View>
          </View>
        </View>
      ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    // paddingHorizontal: 16,
 
    //  paddingTop: 60
  },
  cardContainer:{
paddingHorizontal: 16,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60
  },
  userName: {
    fontSize: 20,
    fontWeight: "700",
  },
  helpText: {
    fontSize: 14,
    color: "#3b82f6",
  },
  
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 1,
    marginTop: 10
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restaurant: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ef4444",
  },
  items: {
    fontSize: 12,
    color: "#6b7280",
    marginVertical: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    color: "#6b7280",
  },
  time: {
    fontSize: 12,
    color: "#6b7280",
  },
});
