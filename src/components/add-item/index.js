import React from "react";
import { Button, TextInput, View } from "react-native";
import { styles } from "./styles";

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={task}
        placeholder="Enter Task"
        onChangeText={onHandleChange}
      ></TextInput>
      <Button
        disabled={!task} //Si la condicion es Falsa se habilita el boton para enviar
        title="Add"
        color={"#f6f5"}
        onPress={onHandleTask}
      />
    </View>
  );
};

export default AddItem;
