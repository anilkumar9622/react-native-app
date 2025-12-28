import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, FlatList, Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useItemsStore } from "@/hooks/store/useItemsStore";
import { useRouter } from "expo-router";

export default function SearchBar() {
  const { setFilters, loadItems } = useItemsStore();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
 const router = useRouter();
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
        const data = await res.json();
        setResults(data.recipes || []);
      } catch (err) {
        console.error(err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (item: any) => {
    
     router.push({
              pathname: "/screens/foodItem/[id]",
              params: { id: String(item.id) },
            })
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <MaterialIcons name="search" size={22} color="#6b7280" />
        <TextInput
          placeholder="Search for food, beverages"
          placeholderTextColor="#6b7280"
          style={styles.input}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {results.length > 0 && (
        <FlatList
          data={results}
          keyExtractor={(item) => String(item.id)}
          style={styles.dropdown}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <Pressable style={styles.dropdownItem} 
            onPress={() => handleSelect(item)}
            >
              <Text style={styles.dropdownText}>{item.name}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 10,
  },
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
  dropdown: {
    marginTop: 4,
    backgroundColor: "#fff",
    borderRadius: 8,
    maxHeight: 200,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  dropdownText: {
    fontSize: 14,
    color: "#374151",
  },
});
