import { Image, StyleSheet, Platform, Button } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F8F9FA", dark: "#F8F9FA" }}
      headerImage={
        <Image
          source={require("@/assets/images/ubc-med.png")}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          UBC Anesthesia
        </ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Accessible Learning Modules
        </ThemedText>
        <ThemedText style={styles.description}>
          Welcome to the UBC Anesthesia app, your go-to resource for accessible,
          on-the-go learning. Dive into our carefully curated modules to enhance
          your knowledge and skills in anesthesia.
        </ThemedText>
        <Button
          title="Start Studying"
          onPress={() => router.push("/modules")}
          color="#1D3D47"
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  logo: {
    height: "100%",
    width: "100%",
    borderRadius: 75,
  },
});
