import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  input: {
    borderBottomColor: "#000",
    width: "80%",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  listContainer: {
    marginHorizontal: 20,
  },
  listTittle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#212121",
  },
  listItemContainer: {
    paddingVertical: 20,
    backgroundColor: "#9a648f",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 5,
  },
  listItem: {
    fontSize: 14,
    color: "#ffff",
    paddingHorizontal: 10,
  },
  modalContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 50,
    paddingBottom: 40,
  },
  selectedTask: { fontSize: 20, color: "#212121", fontWeight: "bold" },

  modalDetailContainer: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonContainer: {
    width: "70%",
    flexDirection: "center",
  },
});
