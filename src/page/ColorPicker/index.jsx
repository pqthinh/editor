import React, { useCallback, useState } from "react";
import { SketchPicker } from "react-color";
import "./style.css";

const BaseColorPicker = () => {
  const [color, setColor] = useState();
  const handleChange = useCallback((color) => {
    setColor(color);
    console.log(color);
  }, []);

  return (
    <div
      className="container--color-picker"
      data-color={color.hex}
      style={{ background: color.hex }}
    >
      <SketchPicker color={color} onChangeComplete={handleChange} />
    </div>
  );
};

export default BaseColorPicker;
