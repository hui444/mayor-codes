import React from "react";
import "./Form.css";
import FormInput from "./FormInput";

const Form = () => {
  const FormClose = () => {
    document.getElementById("myForm").style.display = "none";
  };
  return (
    <div className="form-popup" id="myForm">
      <form>
        <FormInput label="Title" text="Enter Title" />
        <FormInput label="Link" text="Enter Link" />
        <button>SAVE</button>
        <button onClick={FormClose}>CANCEL</button>
      </form>
    </div>
  );
};

export default Form;
