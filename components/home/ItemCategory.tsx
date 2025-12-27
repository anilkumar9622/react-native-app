import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const CATEGORIES = [
  {
    title: "Dinner",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    title: "Pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    title: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
  },
  {
    title: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    title: "Coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    title: "Dessert",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
  {
    title: "Healthy",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
  {
    title: "Italian",
    image:
      "https://images.unsplash.com/photo-1604908554269-5e4b2c8dfb9d",
  },
  {
    title: "Beverages",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },
];

export default function ItemCategroy() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s on your mind today?</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {CATEGORIES.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              contentFit="cover"
            />
            <Text style={styles.label}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingTop: 10,
     backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  scroll: {
    paddingHorizontal: 16,
  },
  card: {
    alignItems: "center",
    marginRight: 20,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "500",
  },
});
