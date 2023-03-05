import React from "react";
import boxes from "./boxes"

function App() {
     /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

  const [squareArray, setSquareArray] = React.useState(boxes)

  const items = squareArray.map(square => {
    return (
      <div className="box" key={square.id}></div>
    )
  })

  return (
    <div className="App">
      {items}
    </div>
  );
}

export default App;
