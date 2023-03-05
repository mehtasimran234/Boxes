import React from "react";
import boxes from "./boxes"
import Box from "./Box"

function App() {

    /**
     * Challenge part 3.2:
     * Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */

  const [squareArray, setSquareArray] = React.useState(boxes)

  function toggle() {
    console.log("Clicked!!")
  }

  const items = squareArray.map(square => {
    return (
      <Box key={square.id} on={square.on} handleClick={toggle} />
    )
  })

  return (
    <div className="App">
      {items}
    </div>
  );
}

export default App;
