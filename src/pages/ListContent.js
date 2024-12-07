import { FolderCopyOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { categories } from "./source/datas";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, updateData } from "./source/slice";

const ListContent = ({ editIndex }) => {
  const formData = useSelector((state) => state.data.contentData);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }
  const handleOpen = (index) => {
    editIndex(index);
  }
  
  const handleDelete = (indexes) => {
   dispatch(deleteData(indexes));
  };

  const searchData = formData?.filter((a, b) =>
    a.header.toLowerCase().startsWith(query.toLowerCase())
  );
  return (
    <div className="subleft">
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          padding: "5px",
          marginTop: "10px",
          margin: "10px",
          marginLeft: "30px",
          fontSize: "14px",
        }}
      >
        <span className="new-sub">
          Total Files:<b>{formData.length}</b>
        </span>
      </div>
      <div className="notes-container">
        {searchData?.map((note, index) => (
          <div className="note-next">
            <div key={index} className="note" >
              <FolderCopyOutlined />
              <span>{note?.header}</span>
              <BorderColorOutlinedIcon
                style={{
                  fontSize: "25px", // Make the icon larger
                  color: "#5c5757",
                  justifyItems: "right",
                  right: 0,
                  position: "relative",
                }}
                onClick={() => handleOpen(index)}
              />
              <DeleteOutlineOutlinedIcon
                style={{
                  fontSize: "25px", // Make the icon larger
                  color: "#5c5757",
                  justifyItems: "right",
                  right: 0,
                  position: "relative",
                }}
                onClick={() => handleDelete(note.id)}
              />
            </div>
            <div className="note-message">
              {note?.message.length > 50
                ? `${note?.message.slice(0, 50)}...`
                : note?.message}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "5px",
          marginTop: "10px",
          margin: "10px",
          marginLeft: "30px",
          fontSize: "large",
        }}
      >
        <span className="new-sub">
          <b>Categories</b>
        </span>
        <AddOutlinedIcon
          style={{
            fontSize: "25px", // Make the icon larger
            color: "#5c5757",
            marginLeft: "100px",
            marginTop: "4px",
            stroke: "var(--mui-palette-secondary-main)", // Border color
            strokeWidth: 2, // Thicker borders
          }}
        />
      </div>
      <div className="notes-container">
        {categories.map((note, index) => (
          <div className="note-next">
            <div key={index} className="note">
              {note.icon}
              <span>{note.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListContent;
