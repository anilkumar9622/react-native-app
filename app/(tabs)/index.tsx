// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';
// import ListScreen from '../screens/listScreen';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }
//       >
//     </ParallaxScrollView>
    
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import HomeHeader from "@/components/home/HomeHeader";
import SearchBar from "@/components/home/SearchBar";
import BannerCarousel from "@/components/home/BannerCarousel";
import BrandList from "@/components/home/BrandList";
import RestaurantList from "@/components/home/RestaurantList";
import ItemCategroy from "@/components/home/ItemCategory";
import FilterBar from "@/components/home/filterBar";
// import ItemList from "@/components/home/FoodList";
import FoodListHorizontal from "@/components/home/ItemList";
import ItemList from "@/components/home/ItemList";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>     
      
      {/* <SearchBar /> */}
      <View style={styles.header}> 
        <View style={styles.headerRow}>

        <HomeHeader />
        <SearchBar />
        </View>
        </View>
      <BannerCarousel />
      <ItemCategroy />
      <BrandList />
      <ItemList />
      {/* <RestaurantList /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  /* Header */
  header: {
    backgroundColor: "#fff",
    // paddingHorizontal: 16,
    // paddingTop: 56,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deliverText: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "right"
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "600",
  },
  profileBtn: {
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderRadius: 999,
  },

  /* Search */
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 16,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },

  /* Banner */
  bannerScroll: {
    marginTop: 16,
  },
  bannerContainer: {
    paddingLeft: 16,
  },
  bannerImage: {
    width: 288,
    height: 160,
    borderRadius: 12,
    marginRight: 16,
  },

  /* Sections */
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  /* Brands */
  brandContainer: {
    paddingLeft: 0,
  },
  brandItem: {
    alignItems: "center",
    marginRight: 20,
  },
  brandIcon: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 999,
    elevation: 2,
  },
  brandText: {
    fontSize: 12,
    marginTop: 8,
  },

  /* Cards */
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 160,
  },
  cardBody: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
  },
  metaText: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  deliveryText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#16a34a",
  },
});

