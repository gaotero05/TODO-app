import { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import { SafeAreaView, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//already present tasks

export default function App() {
 const [tasks, setTasks] = useState([
  { key: '1', description: 'Get Milk', completed: false },
  { key: '2', description: 'Clean Shoes', completed: true },
 ]);

//sets task name

 const [taskName, setTaskName] = useState('');

//background task constructor

 const addTask = () => {
  if (taskName.trim() === '') return;

 const newTask = {
  key: (tasks.length + 1).toString(),
  description: taskName,
  completed: false,
 };

  setTasks([...tasks, newTask]);
 };

//checkbox functionality

 const checkTask = (key) => {
  const updatedTasks = tasks.map((task) =>
   task.key === key ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
 };

//visible task constructor

 const list = ({ item }) => (
  <Text style={ item.completed ? styles.completedText : styles.taskText }>
   {item.description}
   <CheckBox style={ styles.checkBox }
    checked={item.completed}
    onPress={() => checkTask(item.key)}
    checkedIcon={<MaterialIcons name="check-box" size={24} />}
    uncheckedIcon={<MaterialIcons name="check-box-outline-blank" size={24} />}
   />
  </Text>
 );

//interactables

 return (
  <SafeAreaView style={styles.container}>
   <TextInput
    style={styles.textInput}
    placeholder="Enter task"
    value={taskName}
    onChangeText={setTaskName}
   />
   <Button
    title="Add Task"
    onPress={addTask}
   />
   <FlatList
    data={tasks}
    renderItem={list}
    keyExtractor={(item) => item.key}
   />
  </SafeAreaView>
  );
}

//styles

const styles = StyleSheet.create({
 container: { 
  flex: 1, 
  padding: 20,
  backgroundColor: '#ffffff'
 },
 taskText: { 
  fontSize: 20, 
  padding: 10
 },
 completedText: { 
  fontSize: 20, 
  padding: 10,
  textDecorationLine: 'line-through',
  textDecorationStyle: 'solid'
 },
 textInput: {
  fontSize: 30,
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
 },
});