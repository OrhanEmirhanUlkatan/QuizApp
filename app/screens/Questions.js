import React from "react";
import { View, StyleSheet, Text } from "react-native";
import data from "../assets/data/QuizData";

const Questions = ({ index, question }) => {
  return (
    <View style={{}}>
      {/* Question Counter */}
      <View style={styles.container}>
        <Text style={styles.question}>{index + 1}</Text>
        <Text style={styles.questionCount}>/ {data.length}</Text>
      </View>
      {/* Question */}
      <Text style={styles.quesiton}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  question: { color: "#333", fontSize: 15, opacity: 1, marginRight: 2 },
  questionCount: { color: "#333", fontSize: 13, opacity: 0.6 },
  quesiton: {
    color: "#333",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Questions;
