import React, { useState } from "react";
import Form from "./components/Form";
import OverLay from "./components/model/overlay";

function Index() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState("");
  const [closeOverLayState, SetcloseOverLay] = useState(true);
  const [data, setData] = useState([]);
  function handleName(name) {
    setName(name);
  }
  function handleInfo(info) {
    setInfo(info);
  }
  function switchOverLay() {
    SetcloseOverLay((prevS) => !prevS);
  }
  function handelRemove(id) {
    setData((prevData) => {
      return prevData.filter((item) => item.id !== id);
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    const name = e.target.name;
    const note = e.target.note;
    // handleName("");
    if (name.value.trim() && note.value.trim()) {
      handleInfo("");
      setData((prevdata) => {
        const id = new Date().getTime();
        return [{ id, name: name.value, info: note.value }, ...prevdata];
      });
      setMessage("");
    } else {
      switchOverLay();
    }
    ///
    if (!name.value.trim()) {
      setMessage("The Name  is Missing Please Fill  it !");
    } else if (!note.value.trim()) {
      setMessage("The  Note is Missing Please Fill  it !");
    }
  }

  return (
    <>
      {closeOverLayState && (
        <Form
          state={{ name, info, data }}
          dispatch={{ handleName, handleInfo, handelSubmit, handelRemove }}
        />
      )}
      <OverLay
        closeOverLay={switchOverLay}
        closeOverLayState={closeOverLayState}
        message={message}
      />
    </>
  );
}

export default Index;
