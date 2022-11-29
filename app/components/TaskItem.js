import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

const TaskItem = ({ itemData, deleteTaskHandler, itemId }) => {
  return (
    <View style={styles.singleTask}>
      <Text>{itemData.item.text}</Text>
      <Pressable
        android_ripple={{ color: "#ffffdd" }}
        onPress={() => deleteTaskHandler(itemId)}
        style={styles.icon}
      >
        <Image
          style={styles.closeIcon}
          source={require("../assets/delete.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  singleTask: {
    width: "100%",
    backgroundColor: "#ccc",
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    zIndex: 20,
  },
});

export default TaskItem;
