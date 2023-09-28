/* eslint-disable react/prop-types */
import { useState } from "react";

function ProfileInputs({ profileData, setProfileData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="card profileCard">
        <div className="inputPair inputName">
          <label className="inputFor" htmlFor="name">
            Name
          </label>
          <input
            className="inputBox"
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setProfileData({
                ...profileData,
                name: e.target.value,
              });
            }}
          />{" "}
        </div>
        <div className="inputPair inputEmail">
          <label className="inputFor" htmlFor="email">
            Email
          </label>
          <input
            className="inputBox"
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setProfileData({
                ...profileData,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputPair postcodeZip">
          <label className="inputFor" htmlFor="phone">
            Phone
          </label>
          <input
            className="inputBox"
            type="number"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setProfileData({
                ...profileData,
                phone: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputPair cityAddress">
          <label className="inputFor" htmlFor="city">
            City
          </label>
          <input
            className="inputBox"
            type="text"
            id="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setProfileData({
                ...profileData,
                city: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileInputs;
