import React from "react";

const page = () => {
  const value = 1234;
  return (
    <div>
      <ReactComponent>
          <div className="w-[200px]"> double test </div>
      </ReactComponent>
    </div>
  );
};

const ReactComponent = ({ children }: any) => {
  return (
    <div className="bg-blue-200 felx">
      {children}
    </div>
  );
};

export default page;
