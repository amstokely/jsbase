import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

/*
    * @param {Object} props
 */
const Button = ({label}) => {
    return <button>{label}</button>;
};

export default Button;
