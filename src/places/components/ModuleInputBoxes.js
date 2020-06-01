import React, { useCallback, useReducer } from "react";

import "./ModuleInputBoxes.css";
import InputBox from "../../shared/components/InputBox";
import NavButton from "../../shared/components/NavButton";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const ModuleInputBoxes = (props) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      mod1: {
        value: "",
        isValid: true,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const number = props.num;

  let content = [];
  for (let i = 1; i <= number; i++) {
    content.push(i);
  }

  const inputContainers = content.map((a) => {
    return (
      <div className="input-container" key={a + 100}>
        <InputBox
          element="input"
          id={"mod" + a}
          type="text"
          placeholder={"Module " + a}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid module code."
          onInput={inputHandler}
        />
      </div>
    );
  });

  const createHandler = (event) => {
    event.preventDefault();
    // console.log(formState.inputs);
    let array = [];
    for (let i = 1; i <= number; i++) {
      array.push(document.getElementById("mod" + i).value);
    }

    console.log(array.map((k) => k.toUpperCase()));
  };

  return (
    content.length !== 0 && (
      <form action="" id="form" onSubmit={createHandler}>
        <div className="moduleInput-seperator">
          <div className="module-side">{inputContainers}</div>
          <div className="preference-side">
            <div className="createButton">
              <NavButton type="submit" disabled={!formState.isValid}>
                CREATE
              </NavButton>
            </div>
          </div>
        </div>
      </form>
    )
  );
};

export default ModuleInputBoxes;
