import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export default function AccountScreen() {
  const menuItems = [
    { name: "Payment Methods", icon: "credit-card" },
    { name: "Addresses", icon: "location-on" },
    { name: "My Favourites", icon: "favorite" },
    { name: "On Time Promise", icon: "access-time" },
    { name: "Language", icon: "language" },
    { name: "Settings", icon: "settings" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topSection}>
        <Text style={styles.userName}>Anil Kumar</Text>
        <Pressable>
          <Text style={styles.helpText}>Help</Text>
        </Pressable>
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <MaterialIcons name="local-offer" size={28} color="#ef4444" />
          <Text style={styles.cardText}>Vouchers</Text>
        </View>
        <View style={styles.card}>
          <MaterialIcons name="shopping-bag" size={28} color="#ef4444" />
          <Text style={styles.cardText}>Orders</Text>
        </View>
      </View>

      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <Pressable key={index} style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <MaterialIcons name={item.icon as any} size={24} color="#ef4444" />
              <Text style={styles.menuText}>{item.name}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#6b7280" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
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

  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
  },

  menuList: {
    marginTop: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  menuText: {
    fontSize: 16,
  },
});
