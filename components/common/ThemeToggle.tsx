import { View, Pressable, StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function ThemeToggle() {
  const { mode, setMode } = useTheme() as {
    mode: "light" | "dark" | "system";
    setMode: (v: "light" | "dark" | "system") => void;
  };

  const Option = ({
    label,
    value,
    icon="label",
  }: {
    label: string;
    value: "light" | "dark" | "system";
    icon: string;
  }) => (
    <Pressable
      style={[
        styles.option,
        mode === value && styles.activeOption,
      ]}
      onPress={() => setMode(value)}
    >
      <MaterialCommunityIcons
        // name={icon}
        size={18}
        color={mode === value ? "#ef4444" : "#6b7280"}
      />
      <ThemedText>{label}</ThemedText>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <ThemedText type="defaultSemiBold">Theme</ThemedText>

      <View style={styles.row}>
        <Option label="Light" value="light" icon="white-balance-sunny" />
        <Option label="Dark" value="dark" icon="moon-waning-crescent" />
        <Option label="System" value="system" icon="cellphone" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    marginTop: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  activeOption: {
    backgroundColor: "rgba(239,68,68,0.12)",
  },
});
