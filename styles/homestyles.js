import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "../styles/GlobalStyles";

export const styles = StyleSheet.create({
  home1: {
    fontSize: 32,
    color: "#77deff",
    width: "100%",
    textAlign: "center",
    fontFamily: FontFamily.libreCaslonTextBold,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 20,
  },
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