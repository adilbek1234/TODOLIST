import React, { useState } from "react";

const InputField = ({ onAdd }) => {
  const [newHabit, setNewHabit] = useState("");

  const handleAdd = () => {
    if (newHabit.trim() !== "") {
      onAdd(newHabit);
      setNewHabit("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Жаңа әдет қосу..."
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        className="input-field"
      />
      <button onClick={handleAdd} className="add-button">
        Қосу
      </button>
    </div>
  );
};

export default InputField;
