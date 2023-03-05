import React from "react";

export default function Box(props) {
    const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    return (   
      <div className="box" style={styles} onClick={props.handleClick}></div>
    )
}