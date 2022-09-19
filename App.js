import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState();
  const [goals, setGoals] = useState([]);
  const press = () => {
    setGoals([...goals, text]);
  };
  const deleteGoal = (i) => {
    const newGoals = goals.filter((val, index) => index !== i);
    setGoals(newGoals);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setText(newText)}
          placeholder="Add your task"
        ></TextInput>
        <Button onPress={press} title="Add your task" />
      </View>
      <Text>View your tasks...</Text>
      <ScrollView style={styles.goals}>
        {goals.map((val, index) => {
          return (
            <View style={styles.goalContainer}>
              <Text style={styles.goal}>{val}</Text>
              <Button onPress={() => deleteGoal(index)} title="Delete" />
            </View>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 24,
  },
  input: {
    width: "50%",
    borderWidth: 1,
    padding: 5,
  },
  goalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  goal: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    width: "75%",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});
