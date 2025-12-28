import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";

const BRANDS = [
  {
    name: "McDonald's",
    image: "https://cdn-icons-png.flaticon.com/512/732/732217.png",
  },
  {
    name: "Domino's",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg",
  },
  {
    name: "KFC",
    image: "https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg",
  },
  {
    name: "Subway",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg",
  },
  {
    name: "Pizza Hut",
    image: "https://1000logos.net/wp-content/uploads/2017/05/Pizza-Hut-Logo.png",
  },
  {
    name: "Burger King",
    image: "https://1000logos.net/wp-content/uploads/2017/03/Burger-King-logo.png",
  },
  {
    name: "Starbucks",
    image: "https://1000logos.net/wp-content/uploads/2017/08/Starbucks-logo.png",
  },
  {
    name: "Haldiram's",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Haldiram%27s_Logo.svg/512px-Haldiram%27s_Logo.svg.png",
  },
];

export default function PopularBrands() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Brands</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {BRANDS.map((brand, index) => (
          <Pressable key={index} style={styles.card}>
            <View style={styles.logoWrapper}>
              <Image
                source={{ uri: brand.image }}
                style={styles.logo}
                contentFit="contain"
              />
            </View>
            <Text style={styles.name} numberOfLines={1}>
              {brand.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 24,
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  scroll: {
    paddingHorizontal: 16,
  },

  card: {
    width: 96,
    alignItems: "center",
    marginRight: 18,
  },

  logoWrapper: {
    width: 76,
    height: 76,
    backgroundColor: "#fff",
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    // Android shadow
    elevation: 1,
  },

  logo: {
    width: 46,
    height: 46,
  },

  name: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
    textAlign: "center",
  },
});
