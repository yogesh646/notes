import { FolderCopyOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { categories } from "./source/datas";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, updateData } from "./source/slice";

const Subleft = ({ check, update }) => {
  const loads = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("formState")) || []
  );
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleopen = (index) => {
    check(index);
  };
  const handleupdate = (index) => {
    dispatch(updateData(index));
  };
  const handledel = (indexes) => {
    console.log("deleted");
    dispatch(deleteData(indexes));
  };
  console.log("loads", JSON.parse(loads));

  useEffect(() => {
    const files = () =>
      fetch(JSON.parse(localStorage.getItem("formState")) || []);
    files();
  });
  const filtered = JSON.parse(loads)?.filter((a, b) =>
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
          Total Files:<b>{list.length}</b>
        </span>
      </div>
      <div className="notes-container">
        {filtered?.map((note, index) => (
          <div className="note-next">
            <div key={index} className="note" onClick={() => handleopen(index)}>
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
                onClick={() => handleupdate(index)}
              />
              <DeleteOutlineOutlinedIcon
                style={{
                  fontSize: "25px", // Make the icon larger
                  color: "#5c5757",
                  justifyItems: "right",
                  right: 0,
                  position: "relative",
                }}
                onClick={() => handledel(index)}
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

export default Subleft;
