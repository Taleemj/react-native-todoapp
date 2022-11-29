import React from "react";
import { View, StyleSheet, Button, Text, TextInput, Modal } from "react-native";

const TaskInput = ({
  setModalVisibility,
  modalVisibility,
  addTaskHandler,
  inputHandler,
  task,
}) => {
  const closeModal = () => {
    setModalVisibility(false);
  };
  return (
    <Modal visible={modalVisibility} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Keep Your daily tasks organised.</Text>
        <TextInput
          onChangeText={inputHandler}
          style={styles.inputBox}
          placeholder="Enter your tasks"
          value={task}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button onPress={addTaskHandler} title="Add Task" />
          </View>
          <View style={styles.button}>
            <Button onPress={closeModal} title="cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    marginRight: 10,
    padding: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
    marginTop: 20,
    marginHorizontal: 9,
  },
});

export default TaskInput;
