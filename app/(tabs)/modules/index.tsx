import { StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Module, modules } from "@/data";

export default function ModulesScreen() {
  const router = useRouter();

  const renderModule = ({ item }: { item: Module }) => (
    <TouchableOpacity
      style={styles.moduleContainer}
      onPress={() => router.push(`/modules/${item.id}`)}
    >
      <Image source={item.imageUrl} style={styles.moduleImage} />
      <ThemedText style={styles.moduleTitle}>{item.title}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Modules
      </ThemedText>
      <FlatList
        data={modules}
        keyExtractor={(item) => item.id}
        renderItem={renderModule}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  header: {
    marginBottom: 16,
    textAlign: "center",
  },
  list: {
    flex: 1,
  },
  row: {
    justifyContent: "space-between",
  },
  moduleContainer: {
    width: "48%",
    marginTop: 40,
    marginBottom: 16,
    alignItems: "center",
  },
  moduleImage: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  moduleTitle: {
    textAlign: "center",
    fontSize: 14,
  },
});
