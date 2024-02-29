import React, { useEffect, useState } from "react";

const UunMountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    return () => {
      console.log("UnMount");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }} className="Lifecycle">
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UunMountTest />}
    </div>
  );
};

export default Lifecycle;
