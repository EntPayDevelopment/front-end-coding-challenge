import React from "react";

export const Button = (props) => {
  return (<button className={`btn ${props.className}`} onClick={props.onClick}><i className={`fa ${props.iconClass}`}/>{props.text}</button>)
}
