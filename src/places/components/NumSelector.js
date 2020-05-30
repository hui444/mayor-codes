import React, { useState } from "react";
import ModuleInputBoxes from "./ModuleInputBoxes";

const NumSelector = () => {
  const [number, setNumber] = useState(1);
  const onChange = (event) => {
    setNumber(event.target.value);
  };
  return (
    <React.Fragment>
      <label htmlFor="num-modules">Number of Modules: </label>
      <select id="num-modules" name="num-modules" onChange={onChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      <ModuleInputBoxes num={number} />
    </React.Fragment>
  );
};

export default NumSelector;

// import React, { Component } from "react";
// import ModuleInputBoxes from "./ModuleInputBoxes";

// class NumSelector extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectValue: "1",
//     };

//     this.handleDropdownChange = this.handleDropdownChange.bind(this);
//   }

//   handleDropdownChange(e) {
//     this.setState({ selectValue: e.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <select id="dropdown" onChange={this.handleDropdownChange}>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//             <option value="6">6</option>
//             <option value="7">7</option>
//             <option value="8">8</option>
//           </select>
//         </div>

//         <div>
//           <ModuleInputBoxes num={this.state.selectValue} />
//         </div>
//       </div>
//     );
//   }
// }
// export default NumSelector;
