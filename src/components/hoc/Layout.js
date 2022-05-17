import React from "react";
import { Loader } from '../Loader';

export const Layout = (props) => {
  return (<div>
    {props.isLoading ? <Loader/>: props.children}
</div>)
}
