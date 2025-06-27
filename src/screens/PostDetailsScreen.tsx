import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { fetchComments } from "../services/api";
import { Comment } from "../models/Comment";
import CommentCard from "../components/CommentCard";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

interface Props {
  route: DetailsScreenRouteProp;
}

const PostDetailsScreen: React.FC<Props> = ({ route }) => {
  const { postId, title, body } = route.params;
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await fetchComments(postId);
        setComments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Post Content Only */}
      <View style={styles.postCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>

      {/* Comments */}
      <Text style={styles.sectionTitle}>Comments</Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#6b7280"
          style={{ marginTop: 20 }}
        />
      ) : (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            name={comment.name}
            body={comment.body}
          />
        ))
      )}
    </ScrollView>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: "#f3f4f6",
  },
  postCard: {
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    elevation: 3,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },
  body: {
    fontSize: 15,
    color: "#374151",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 16,
    marginBottom: 8,
    color: "#1f2937",
  },
});
