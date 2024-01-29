import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import ToDo from "./components/ToDo";
import { baseURL } from "./utils/constant";
import Popup from "./components/Popup";

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setToDos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateUI]);

  const saveToDo = () => {
    axios
      .post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <div className="container">
        <h1 className="title" style={{ color: "black" }} >TODO APP</h1>

        <div className="input_holder">
          <input
            type="text"
            placeholder="Add an Item.. "
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          {toDos.map((el) => (
            <ToDo
              key={el._id}
              id={el._id}
              text={el.toDo}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupData={setPopupData}
            />
          ))}
        </div>
      </div>
      {showPopup && <Popup setShowPopup={setShowPopup} popupData={popupData} setUpdateUI={setUpdateUI} />}
    </main>
  );
}

export default App;
