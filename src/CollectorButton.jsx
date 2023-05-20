import React, { useContext } from "react";
import StylesContext from "./StyleContext";

export default function CollectorButton() {
  const buttonStyling = useContext(StylesContext);
  return (
    <div>
      <button style={buttonStyling}>Click Here!</button>
    </div>
  );
}
