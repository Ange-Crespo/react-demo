import * as React from "react";


interface Props{
    message : string;
    number_of_turn:number;
}

export const WelcomeComponent = (props : Props) => {
  return <h2>{props.message} : Turn : {props.number_of_turn}</h2>;
};

