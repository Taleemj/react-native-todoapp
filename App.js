import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import TaskInput from "./app/components/TaskInput";
import TaskList from "./app/components/TaskList";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const inputHandler = (enteredText) => {
    setTask(enteredText);
  };
  const addTaskHandler = () => {
    task !== ""
      ? setTasks((currenttasks) => [
          ...currenttasks,
          { text: task, key: Math.random().toString() },
        ])
      : null;

    setTask("");

    task !== "" ? setModalVisibility(false) : null;
  };

  const deleteTaskHandler = (itemid) => {
    setTasks(tasks.filter((item) => item.key !== itemid));
  };

  const openModal = () => {
    setModalVisibility(true);
  };

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.main}>
        <Text style={styles.heading}>My tasks</Text>
        <Button onPress={openModal} title="Add New Task" />
        {modalVisibility && (
          <TaskInput
            setModalVisibility={setModalVisibility}
            modalVisibility={modalVisibility}
            task={task}
            inputHandler={inputHandler}
            addTaskHandler={addTaskHandler}
          />
        )}
        <TaskList tasks={tasks} deleteTaskHandler={deleteTaskHandler} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "auto",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
  },
});
