import React from "react";

const HabitCard = ({ habit, onToggle, onDelete }) => {
  return (
    <div className={`habit-card ${habit.completed ? "completed" : ""}`}>
      <span onClick={onToggle}>{habit.text}</span>
      <button onClick={onDelete} className="delete-button">
        Жою
      </button>
    </div>
  );
};

export default HabitCard;
