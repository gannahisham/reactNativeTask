import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { fetchPosts } from "../services/api";
import { Post } from "../models/Post";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import PostCard from "../components/PostCard";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;
type PostWithAuthor = Post & { authorName?: string };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("Details", {
              postId: item.id,
              title: item.title,
              body: item.body,
            })
          }
        >
          <PostCard title={item.title} body={item.body} userId={item.user_id} />
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
