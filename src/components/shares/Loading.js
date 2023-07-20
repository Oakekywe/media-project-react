import React from "react";
import LoadingImg from "../../statics/loading.gif";

const Loading = () => {
  return (
    <div className="loadingBox">
      <img src={LoadingImg} />
    </div>
  );
};

export default Loading;
