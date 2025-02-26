import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits"));
    if (savedHabits) setHabits(savedHabits);
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([...habits, { text: newHabit, id: Date.now() }]);
      setNewHabit("");
    }
  };

  const deleteHabit = (id) => {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  };

  return (
    <div className="app-container">
      <h1>Күнделікті әдеттер</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Жаңа әдет қосу..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button className="add-button" onClick={addHabit}>
          Қосу
        </button>
      </div>
      <div className="habits-list">
        {habits.map((habit) => (
          <div key={habit.id} className="habit-card">
            <span>{habit.text}</span>
            <button
              className="delete-button"
              onClick={() => deleteHabit(habit.id)}
            >
              Жою
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
