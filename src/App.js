import React from "react";
import boxes from "./boxes"
import Box from "./Box"

function App() {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */

  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
    setSquares(squares => {
      return squares.map(square => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const items = squares.map(square => {
    return (
      <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
    )
  })

  return (
    <div className="App">
      {items}
    </div>
  );
}

export default App;
