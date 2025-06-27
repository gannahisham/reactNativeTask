import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  name: string;
  body: string;
}

const CommentCard: React.FC<Props> = ({ name, body }) => {
  const avatar = `https://i.pravatar.cc/100?u=${name}`;
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.username}>{`@${name
          .split(" ")[0]
          .toLowerCase()}`}</Text>
      </View>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f4f4f5",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 10,
  },
  username: {
    fontWeight: "600",
    color: "#4b5563",
  },
  body: {
    color: "#1f2937",
    fontSize: 14,
  },
});
