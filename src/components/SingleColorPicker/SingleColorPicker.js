import React, { useState } from "react";
import RGBColorPicker from "../RGBColorPicker/RGBColorPicker";

function SingleColorPicker() {
  const [colors, setColors] = useState("122,133,133");

  const handleChangeColor = (event) => {
    event.preventDefault();
    setColors(
      `${event.target.red.value},${event.target.green.value},${event.target.blue.value}`
    );
  };

  return (
    <div>
      <RGBColorPicker onChangeColor={(event) => handleChangeColor(event)} />
      <div style={{ background: `rgb(${colors})` }} class="show-rgb-color">
        <p>rgb({colors})</p>
      </div>
    </div>
  );
}

export default SingleColorPicker;
