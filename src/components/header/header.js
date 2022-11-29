import React, { useEffect, useState } from "react";

function Header() {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log(">>Header Mount Oldu")
  },[])
  console.log(">>Header Render Ediliyor")

  console.log("Counter: " + counter)

  function onNegativeClick(event) {
    setCounter(counter-1)
    console.log(counter);

  }

  function onPositiveClick(event) {
    setCounter(counter+1)
    console.log(counter);

  }

  return (
    <div>
      <button className="btn btn-primary" onClick={onNegativeClick}>Azalt</button>
      {counter}
      <button className="btn btn-success" onClick={onPositiveClick}>Arttir</button>
    </div>
  );
}

export default Header;
