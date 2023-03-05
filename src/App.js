import React from "react";
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
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
      <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
    )
  })

  return (
    <div className="App">
      {items}
    </div>
  );
}
