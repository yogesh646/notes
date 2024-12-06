import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem,deleteItem,updateItem } from "./source/slice";

const Demo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [form, setForm] = useState({ id: "", name: "" });

  const handleCreate = () => {
    if (!form.id || !form.name) return alert("ID and Name are required");
    dispatch(createItem(form));
    setForm({ id: "", name: "" });
  };

  const handleUpdate = () => {
    if (!form.id || !form.name) return alert("ID and Name are required");
    dispatch(updateItem(form));
    setForm({ id: "", name: "" });
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h3>Form</h3>
      <input
        type="text"
        placeholder="ID"
        value={form.id}
        onChange={(e) => setForm({ ...form, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleUpdate}>Update</button>

      <h3>Items</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}: {item.name}{" "}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
