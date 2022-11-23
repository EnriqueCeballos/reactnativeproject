import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={task}
        placeholder="Agregar pedido"
        onChangeText={onHandleChange}
      />
      <Button
        disabled={!task}
        title="Add"
        color="#000"
        onPress={onHandleTask}
      />
    </View>
  );
};

export default AddItem;
