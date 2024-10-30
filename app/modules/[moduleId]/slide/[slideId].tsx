import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Button,
  View,
  ScrollView,
  PanResponder,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter, useLocalSearchParams } from "expo-router";
import { modules } from "@/data";
import ImageZoomViewer from "react-native-image-zoom-viewer";
import { Ionicons } from "@expo/vector-icons"; // Import icon library for the X button

export default function SlideScreen() {
  const router = useRouter();
  const { moduleId, slideId, totalSlides } = useLocalSearchParams<{
    moduleId: string;
    slideId: string;
    totalSlides: string;
  }>();

  const module = modules.find((m) => m.id === moduleId);
  const slide = module?.slides.find((s) => s.id === slideId);

  const slideNumber = parseInt(slideId || "1", 10);
  const totalSlidesNumber = parseInt(totalSlides || "1", 10);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSource) => {
    if (Platform.OS !== "web") {
      setSelectedImage([{ url: Image.resolveAssetSource(imageSource).uri }]);
    } else {
      // Set image for web without using resolveAssetSource
      setSelectedImage([{ url: imageSource.uri }]);
    }
    setIsModalVisible(true);
  };

  const closeImage = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 50,
      onPanResponderEnd: (_, gestureState) => {
        if (gestureState.dx > 50 && slideNumber > 1) {
          router.push(
            `/modules/${moduleId}/slide/${
              slideNumber - 1
            }?totalSlides=${totalSlides}`
          );
        } else if (gestureState.dx < -50 && slideNumber < totalSlidesNumber) {
          router.push(
            `/modules/${moduleId}/slide/${
              slideNumber + 1
            }?totalSlides=${totalSlides}`
          );
        }
      },
    })
  ).current;

  if (!module || !slide) {
    return <ThemedText>Slide not found</ThemedText>;
  }

  return (
    <ThemedView style={styles.container} {...panResponder.panHandlers}>
      <ThemedText type="title" style={styles.title}>
        {module.title}
      </ThemedText>
      <ThemedText type="subtitle" style={styles.subtitle}>
        Slide {slideId}
      </ThemedText>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {slide.content.map((block, index) => {
          switch (block.type) {
            case "header":
              return (
                <ThemedText key={index} style={styles.header}>
                  {block.content}
                </ThemedText>
              );
            case "text":
              return (
                <ThemedText key={index} style={styles.text}>
                  {Array.isArray(block.content)
                    ? block.content.map((segment, segIndex) => (
                        <ThemedText
                          key={segIndex}
                          style={segment.bold ? styles.boldText : undefined}
                        >
                          {segment.content}
                        </ThemedText>
                      ))
                    : block.content}
                </ThemedText>
              );
            case "image":
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => openImage(block.content)}
                >
                  <Image source={block.content} style={styles.image} />
                </TouchableOpacity>
              );
            default:
              return null;
          }
        })}
      </ScrollView>

      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={closeImage}
      >
        {selectedImage && (
          <View style={styles.modalContainer}>
            {/* Close Button */}
            <TouchableWithoutFeedback onPress={closeImage}>
              <View style={styles.closeButton}>
                <Ionicons name="close-circle" size={32} color="white" />
              </View>
            </TouchableWithoutFeedback>
            {/* Image Zoom Viewer */}
            <ImageZoomViewer
              imageUrls={selectedImage}
              enableSwipeDown={true}
              onSwipeDown={closeImage}
              onCancel={closeImage}
            />
          </View>
        )}
      </Modal>

      <View style={styles.navigationContainer}>
        <Button
          title="Previous Slide"
          onPress={() =>
            router.push(
              `/modules/${moduleId}/slide/${
                slideNumber - 1
              }?totalSlides=${totalSlides}`
            )
          }
          disabled={slideNumber <= 1}
        />
        <Button
          title="Next Slide"
          onPress={() =>
            router.push(
              `/modules/${moduleId}/slide/${
                slideNumber + 1
              }?totalSlides=${totalSlides}`
            )
          }
          disabled={slideNumber >= totalSlidesNumber}
        />
      </View>

      <View style={styles.returnButtonContainer}>
        <Button
          title="Return to Module"
          onPress={() => router.push(`/modules/${moduleId}`)}
          color="#1D3D47"
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  scrollView: {
    flex: 1,
    maxHeight: "60%",
  },
  scrollContent: {
    paddingBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  boldText: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    resizeMode: "contain",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  returnButtonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
});
