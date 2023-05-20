import React, { useContext } from "react";
import StylesContext from "./StyleContext";

export default function RequestFormButton() {
  const styling = useContext(StylesContext);
  return (
    <div>
      <button style={styling}>Click Here!</button>
      <input type="submit" value="Submit" />
    </div>
  );
}
