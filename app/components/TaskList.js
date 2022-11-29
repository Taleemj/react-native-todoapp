import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTaskHandler }) => {
  return (
    <View style={styles.taskContainer}>
      <FlatList
        data={tasks}
        renderItem={(itemData) => {
          return (
            <TaskItem
              deleteTaskHandler={deleteTaskHandler}
              itemData={itemData}
              itemId={itemData.item.key}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flex: 6,
  },
});

export default TaskList;
