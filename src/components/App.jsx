import React from "react";
import Header from "./Header";
import IceCreamControl from "./IceCreamControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useSelector } from "react-redux";

function App() {
  const iceCream = useSelector((state) => state.iceCream);

  return (
    <>
      <div>
        <Header />
        <hr />
      </div>
      <div>
        <IceCreamControl />
        <hr />
      </div>
    </>
  );
}

export default App;