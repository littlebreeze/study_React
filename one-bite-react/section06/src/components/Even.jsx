import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    console.log("mount?");
    return () => {
      console.log("unmount?");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
