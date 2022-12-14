import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles.js";
import { AddItem } from "./components/index.js";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleTask = () => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      {
        id: Math.random().toString(),
        value: task,
        background: getRandomBackgroundColor(),
      },
    ]);
    setTask("");
  };
  const getRandomBackgroundColor = () => {
    const colors = ["green", "red", "#212121"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const onHandleSelected = (item) => {
    setSelectedTask(item), setModalVisible(!modalVisible);
  };

  const onHandleCancel = () => {
    // DEVUELVE EL MODAL SIN ELIMINAR EL ELEMENTO SELECCIONADO
    setModalVisible(!modalVisible);
  };
  const onHandleDeleteItem = () => {
    // AL MOMENTO DE TOCAR DELETE SE BORRA EL ELEMENTO DE LA LISTA
    setTaskList((prevTaskList) =>
      prevTaskList.filter((item) => item.id !== selectedTask.id)
    );
    setModalVisible(!modalVisible);
    // SE HACE UN FILTRO DEL VALOR ACTUAL DE LA LISTA PARA QUE RETORNE
    // LOS ELEMENTOS QUE SEAN DIFENTEES AL ELEMENTO SELECCIONADO
  };

  const onHandleChange = (text) => setTask(text);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => onHandleSelected(item)}
    >
      <Text style={styles.listItem}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <AddItem
        task={task}
        onHandleTask={onHandleTask}
        onHandleChange={onHandleChange}
      />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lista de Compras</Text>
      </View>
      <FlatList
        style={styles.listContainer}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailText}>
              Are you sure to delete this item?
            </Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancel" color="#000" onPress={onHandleCancel} />
            <Button title="Delete" color="#000" onPress={onHandleDeleteItem} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
