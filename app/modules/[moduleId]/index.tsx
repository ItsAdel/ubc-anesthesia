import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { modules } from "@/data";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ModuleScreen() {
  const router = useRouter();
  const { moduleId } = useLocalSearchParams<{ moduleId: string }>();

  const module = modules.find((m) => m.id === moduleId);

  if (!module) {
    return <ThemedText>Module not found</ThemedText>;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{module.title}</ThemedText>
      <FlatList
        data={module.slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.slideContainer}
            onPress={() =>
              router.push({
                pathname: `/modules/${module.id}/slide/${item.id}`,
                params: { totalSlides: module.slides.length },
              })
            }
          >
            <ThemedText
              style={styles.slideItem}
            >{`${item.content[0].content}`}</ThemedText>
            <Icon
              style={styles.slideItemIcon}
              name="chevron-right"
              size={24}
              color="#1D3D47"
            />
          </TouchableOpacity>
        )}
        style={styles.list}
      />

      <View style={styles.returnButtonContainer}>
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => router.push("/modules")}
        >
          <ThemedText style={styles.returnButtonText}>
            Return to Modules
          </ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  slideItem: {
    flex: 1,
    paddingRight: 10,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  slideItemIcon: {
    marginRight: 20,
  },
  slideContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  list: {
    marginTop: 16,
  },
  returnButtonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  returnButton: {
    backgroundColor: "#1D3D47",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  returnButtonText: {
    color: "white",
    fontSize: 16,
  },
  openSlideText: {
    color: "#1D3D47",
    fontSize: 14,
  },
});
