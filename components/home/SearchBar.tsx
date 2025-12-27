import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    // <View style={styles.header}> 
            //  <View style={styles.headerRow}> 
     <View style={styles.wrapper}>
      <View style={styles.container}> 
        <MaterialIcons name="search" size={22} color="#6b7280" />
        <TextInput
          placeholder="Search for food, beverages"
          placeholderTextColor="#6b7280"
          style={styles.input}
        />
      </View>
 </View>
    // </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  /* Outer spacing (screen boundary) */
   
  wrapper: {
    paddingHorizontal: 16,
    marginHorizontal: 12,
    width:"100%",
    marginTop: 10
  },

  /* Actual search bar */
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
});
