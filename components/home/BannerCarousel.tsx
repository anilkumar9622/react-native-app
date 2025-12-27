import { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";

// local images must use require()
const BANNERS = [
     require("../../assets/images/banner2.png"),
  require("../../assets/images/banner1.png"), // local image
  { uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { uri: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },
  { uri: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
];

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8;
const SPACING = 16;

export default function BannerCarousel() {
  const scrollRef = useRef<ScrollView>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current =
        indexRef.current === BANNERS.length - 1 ? 0 : indexRef.current + 1;

      scrollRef.current?.scrollTo({
        x: indexRef.current * (ITEM_WIDTH + SPACING),
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled={false}
      decelerationRate="fast"
      snapToInterval={ITEM_WIDTH + SPACING}
      contentContainerStyle={styles.container}
    >
      {BANNERS.map((banner, i) => (
        <Image
          key={i}
          // Check if local image (number) or remote ({ uri })
          source={typeof banner === "number" ? banner : banner}
          style={styles.image}
          contentFit="cover"
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: SPACING,
    marginTop: 16,
  },
  image: {
    width: ITEM_WIDTH,
    height: 160,
    borderRadius: 12,
    marginRight: SPACING,
  },
});
