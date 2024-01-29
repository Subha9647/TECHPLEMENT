import React, { useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const Popup = (props) => {
  const [input, setInput] = useState(props.popupData.text);

  const updateTodo = () => {
    axios
      .put(`${baseURL}/update/${props.popupData.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        props.setUpdateUI((prevState) => !prevState);
        props.setShowPopup(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross2 className="cross" onClick={() => props.setShowPopup(false)} />
        <h1>Update Todo</h1>
        <div className="popup__input_holder">
          <input
            type="text"
            placeholder="Update Todo.. "
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
