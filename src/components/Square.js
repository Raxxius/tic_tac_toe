import React from 'react';


const Square = (props) => {
  const style = {
    backgroundColor: "grey",
    borderStyle: "solid",
    height: "200px",
    width: "200px",
    fontSize: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  const valueStyle = {
    fontSize: "1",
    lineHeight: "1",
    margin: "0",
  }

  const handleOnClick = (id) => {
    props.handleOnClick(id)
  }

  return (
    <div 
      className="square"
      id={props.id}
      style={style}
      onClick={() => handleOnClick(props.id)}
      >
      <h2 style={valueStyle}>{props.fill}</h2>
    </div>
  )
}

export default Square