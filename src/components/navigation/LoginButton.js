import React from "react";
import { Button, Spinner } from "react-bootstrap";

import "./LoginButton.css";


export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoginButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <><Spinner size="sm" animation="border" /> <span>{loadingText}...</span></>}
    {!isLoading ? text : null}
  </Button>;

