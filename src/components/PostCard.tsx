import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  title: string;
  body: string;
  userId: number;
}

const PostCard: React.FC<Props> = ({ title, body, userId }) => {
  const avatar = `https://i.pravatar.cc/150?u=${title}`; // random user image based on title hash
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.username}>{`@user${userId}`}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body.substring(0, 100)}...</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    color: "#6b7280",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
    color: "#374151",
  },
});
