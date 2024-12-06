import React, { useEffect, useReducer, useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import Subleft from "./Subleft";
import { useDispatch, useSelector } from "react-redux";
import { setForm, reset, createData } from "./source/slice";
const Main = () => {
  const formData = useSelector((state) => state.data.formData);
  // const loads=useSelector((state)=>state.data);
  const dispatch = useDispatch();
  const [mainList, setMainList] = useState(
    JSON.parse(localStorage.getItem("formState")) || []
  );
  // console.log("loads",loads);
  let compare;
  const [forms, setForms] = useState({
    header: "",
    message: "",
  });
  const [updation, setupdation] = useState([]);
  const load = {
    header: "header",
    message: "Messages",
  };

  const [origin, setorigin] = useState([]);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });
  };
  const handleSave = (e) => {
    e.preventDefault();
    console.log("saved");
  dispatch(createData(forms))
    window.location.reload();
  };

  const handleupdate = (data) => {
    console.log("update", data);
  };
  const handleData = (data) => {
    // console.log("datas",data);
    compare = data;
    const grip = mainList[data];
    if (grip) {
      load.header = grip.header;
      load.message = grip.message;
    }
    setForms(load);
  };
  const handledel = () => {
    console.log("compare", compare);
  };

  return (
    <div className="main">
      <Subleft check={handleData} update={handleupdate} />
      <div className="main-main">
        <div className="header-bar-container">
          <input
            name="header"
            type="text"
            className="header-bar"
            value={forms.header}
            onChange={handleChange}
            placeholder="Caption here..."
          />
        </div>

        <div className="notepad-container">
          <textarea
            name="message"
            className="notepad"
            value={forms.message}
            onChange={handleChange}
            placeholder="Start typing your notes here..."
          />
          <div className="bottombar">
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "1px",
                margin: "10px",
                marginLeft: "15px",
              }}
            >
              <RemoveRedEyeOutlinedIcon />
              <StarBorderOutlinedIcon />
              <DeleteOutlineOutlinedIcon onClick={handledel} />
              <SaveAltOutlinedIcon onClick={handleSave} />
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "1px",
                margin: "10px",
                marginLeft: "580px",
              }}
            >
              <RecyclingOutlinedIcon />
              <BedtimeOutlinedIcon />
              <SettingsOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
