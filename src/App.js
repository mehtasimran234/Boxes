import React from "react";
import boxes from "./boxes"
import Box from "./Box"

function App() {
  const [squareArray, setSquareArray] = React.useState(boxes)

  const items = squareArray.map(square => {
    return (
      <Box key={square.id} on={square.on} />
    )
  })

  return (
    <div className="App">
      {items}
    </div>
  );
}

export default App;
