import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

export default function MoreScreen() {
  const menuItems = [
    { name: "Feedback", icon: "feedback" },
    { name: "FAQ", icon: "help-outline" },
    { name: "About GraTaste", icon: "info" },
    { name: "Delivery Charges", icon: "local-shipping" },
    { name: "Terms & Conditions", icon: "article" },
    { name: "Privacy Policy", icon: "lock-outline" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Menu List */}
       <View style={styles.topSection}>
              <Text style={styles.userName}>More</Text>
              
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

      {/* Contact Buttons */}
      <View style={styles.contactContainer}>
        <Pressable style={styles.contactButton} onPress={() => Linking.openURL("tel:+911234567890")}>
          <MaterialIcons name="call" size={24} color="#fff" />
          <Text style={styles.contactText}>Call Us</Text>
        </Pressable>

        <Pressable style={styles.contactButton} onPress={() => Linking.openURL("sms:+911234567890")}>
          <MaterialIcons name="chat" size={24} color="#fff" />
          <Text style={styles.contactText}>Chat with Us</Text>
        </Pressable>
      </View>

      {/* Social Media */}
      <View style={styles.socialContainer}>
        <Text style={styles.sectionTitle}>Follow Us</Text>
        <View style={styles.socialRow}>
          <Image source={require("../../assets/icons/email.png")} style={styles.socialIcon} />
          <Image source={require("../../assets/icons/instagram.png")} style={styles.socialIcon} />
          <Image source={require("../../assets/icons/twitter.png")} style={styles.socialIcon} />
          <Image source={require("../../assets/icons/linkedin.png")} style={styles.socialIcon} />
        </View>
      </View>

      {/* App Info */}
      <View style={styles.appInfo}>
        <Text style={styles.versionText}>App Version 1.0.0</Text>
        <Text style={styles.copyText}>© GraTaste Pvt. Ltd.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    //  paddingTop: 60

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
    marginLeft: 10
  },
  helpText: {
    fontSize: 14,
    color: "#3b82f6",
  },
  menuList: {
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 16,
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

  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
    paddingHorizontal: 16,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ef4444",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
  },
  contactText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  socialContainer: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    marginLeft: 10
    // textAlign: "center"
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    tintColor: "black"
  },

  appInfo: {
    marginTop: 32,
    alignItems: "center",
    marginBottom: 40,
  },
  versionText: {
    fontSize: 12,
    color: "#6b7280",
  },
  copyText: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
});
