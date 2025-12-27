import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        
        {/* LOGO */}
         <Pressable>
        <Image
          source={require("../../assets/gratasteLogo.png")}
          style={styles.logo}
        //   contentFit="contain"
        />
        </Pressable>

        {/* LOCATION */}
        <Pressable>
          <View>
            <Text style={styles.deliverText}>Deliver to</Text>
            <View style={styles.locationRow}>
              <MaterialIcons name="location-on" size={16} color="#ef4444" />
              <Text style={styles.locationText}>Sector 62, Noida</Text>
            </View>
          </View>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 8,
    // zIndex: 999,
    // position: "static"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    width: "100%",
  },

  /* LOGO */
  logo: {
    width: 140,
    height: 32,
    marginLeft: -25,
    // marginTop: -10
  },
locationBlock: {
    alignItems: "flex-end",
  },
  deliverText: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "right",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 0,
    fontSize: 12,
    fontWeight: "600",
  },
});
