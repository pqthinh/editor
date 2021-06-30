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
      data-color={color?.hex || "#fff"}
      style={{ background: color?.hex || "#fff" }}
    >
      <SketchPicker color={color} onChangeComplete={handleChange} />
    </div>
  );
};

export default BaseColorPicker;
