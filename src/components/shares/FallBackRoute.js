import React from "react";
import { Link } from "react-router-dom";

export const FallBackRoute = () => {
  return (
    <div className="my-4">
      <h2 className="text-center">No Route Found</h2>
      <h4 className="text-center"><Link to="/">Go back home</Link></h4>
    </div>
  );
};
