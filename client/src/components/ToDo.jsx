import React from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { baseURL } from "../utils/constant";

const ToDo = (props) => {
  const deleteToDo = () => {
    axios.delete(`${baseURL}/delete/${props.id}`).then((res) => {
      console.log(res.data);
      props.setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    props.setPopupData({ text: props.text, id: props.id });
    props.setShowPopup(true);
  };

  return (
    <div className="toDo">
      {props.text}
      <div className="icons">
        <FaEdit className="icon" onClick={updateToDo} />
        <MdDeleteForever className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
