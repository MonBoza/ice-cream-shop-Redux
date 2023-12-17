import Header from "./Header"
import IceCreamControl from "./IceCreamControl"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Provider } from "react-redux";
import { store } from "../redux/store.js";



function App() {
  return (
  
    <>
      <Provider store={store}>
      <div>
        <Header />
        <hr />
      </div>
      <div>
        <IceCreamControl />
        <hr />
      </div>
      </Provider>
    </>
  
  )
}

export default App
