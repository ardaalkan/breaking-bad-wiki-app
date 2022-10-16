import React from "react";

interface types {
  touched: string;
  message: string;
}

const Error = ({ touched, message }: types) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return <div className="form-message invalid">{message}</div>;
  }
  return <div className="form-message valid">all good</div>;
};

export default Error;
