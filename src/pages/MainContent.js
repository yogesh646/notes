import React, { useEffect, useReducer, useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createData, updateData } from "./source/slice";
import ListContent from "./ListContent";
import { Button } from "@mui/material";

const MainContent = () => {
  const formData = useSelector((state) => state.data.contentData);
  const dispatch = useDispatch();
  let userid = Math.random() * 314000;
  const [isEdit,setIsEdit]=useState(false);
  const [forms, setForms] = useState({
    id: userid,
    header: "",
    message: "",
  });
  console.log("forms", forms);

  const edit = {
    id: "",
    header: "header",
    message: "Messages",
  };
  //input field function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });
  };
  //save
  const handleSave = (e) => {
    e.preventDefault();
    console.log("saved");
    dispatch(createData(forms));
    setForms({ id: userid, header: "", message: "" });
  };
  //for id randomizing
  useEffect(() => {}, [useId]);
  //update the list
  const handleupdate = () => {
    dispatch(updateData(forms));
     setForms({ id: userid, header: "", message: "" });
     setIsEdit(false)
  };
  //show the selected data
  const handleEdit = (data) => {
    const grip = formData[data];
    if (grip) {
      edit.id = grip.id;
      edit.header = grip.header;
      edit.message = grip.message;
    }
    setForms(edit);
    setIsEdit(true);
  };

  return (
    <div className="main">
      <ListContent editIndex={handleEdit} />
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
              {isEdit?<Button onClick={handleupdate}>Update</Button>:null}
              {/* <StarBorderOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={handleupdate}
              /> */}
              {/* <DeleteOutlineOutlinedIcon /> */}
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

export default MainContent;
