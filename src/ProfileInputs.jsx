import { useState } from "react";

function ProfileInputs() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card profileCard">
        <div className="inputPair inputName">
          <label className="inputFor" htmlFor="name">
            Name
          </label>
          <input className="inputBox" type="text" id="name" />
        </div>
        <div className="inputPair inputEmail">
          <label className="inputFor" htmlFor="email">
            Email
          </label>
          <input className="inputBox" type="email" id="email" />
        </div>
        <div className="inputPair cityAddress">
          <label className="inputFor" htmlFor="city">
            City
          </label>
          <input className="inputBox" type="text" id="city" />
        </div>
        <div className="inputPair postcodeZip">
          <label className="inputFor" htmlFor="phone">
            Phone
          </label>
          <input className="inputBox" type="number" id="phone" />
        </div>
      </div>
      <div className="buttonCont">
        <button type="submit" className="editButton profileEdit formButton">
          Edit
        </button>
        <button type="submit" className="saveButton profileSave formButton">
          Save
        </button>
      </div>
    </>
  );
}

export default ProfileInputs;
