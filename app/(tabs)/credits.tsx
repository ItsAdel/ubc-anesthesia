import {
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
  Text,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function CreditsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Credits
      </ThemedText>
      <ThemedText type="subtitle" style={styles.madeWithText}>
        Made with <Text style={styles.heart}>❤️</Text> by
      </ThemedText>

      <View style={styles.creditContainer}>
        <ThemedText type="subtitle" style={styles.name}>
          Adel Akbar
        </ThemedText>
        <ThemedText style={styles.role}>Software Engineer</ThemedText>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/adelakbar")
          }
          style={styles.linkButton}
        >
          <ThemedText style={styles.linkText}>LinkedIn Profile</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.creditContainer}>
        <ThemedText type="subtitle" style={styles.name}>
          Kang Moo Yoo
        </ThemedText>
        <ThemedText style={styles.role}>Med Student</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  creditContainer: {
    alignItems: "center",
    marginVertical: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  linkButton: {
    backgroundColor: "#0077b5", // LinkedIn Blue
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  linkText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  madeWithText: {
    fontSize: 14,
    color: "#333",
  },
  heart: {
    color: "#e63946",
    fontSize: 14,
  },
});
