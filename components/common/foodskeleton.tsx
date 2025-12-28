import { View, StyleSheet } from "react-native";

export default function FoodSkeleton({ count = 8 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <View key={`skeleton_${index}`} style={styles.card}>
          <View style={styles.image} />

          <View style={styles.content}>
            <View style={styles.lineLarge} />
            <View style={styles.row}>
              <View style={styles.badge} />
              <View style={styles.lineSmall} />
            </View>
            <View style={styles.lineMedium} />
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 7,
    marginBottom: 14,
    overflow: "hidden",
  },

  image: {
    width: 130,
    height: 130,
    backgroundColor: "#e5e7eb",
  },

  content: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },

  lineLarge: {
    height: 16,
    width: "80%",
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
  },

  lineMedium: {
    height: 14,
    width: "40%",
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
  },

  lineSmall: {
    height: 12,
    width: 80,
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  badge: {
    height: 18,
    width: 40,
    backgroundColor: "#d1d5db",
    borderRadius: 4,
    marginRight: 8,
  },
});
