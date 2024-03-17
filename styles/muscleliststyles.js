import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "../styles/GlobalStyles";

export const styles = StyleSheet.create({
  encabezado: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.pie,
    width: "100%",
    position: "absolute",
    top: 0,
    flexDirection: "row",
  },
  si: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  home: {
    backgroundColor: Color.fondo,
    flex: 1,
  },
  contenido: {
    marginTop: 70,
    marginBottom: 105,
  },
  button: {
  },
});