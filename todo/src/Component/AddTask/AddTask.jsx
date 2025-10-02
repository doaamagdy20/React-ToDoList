import React, { useState, useRef, useEffect } from 'react';
import './AddTask.css';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    
    inputRef.current?.focus();
  }, []);

  function handleAdd() {
    if (text.trim() !== "") {
      onAddTask(text);
      setText("");
      inputRef.current?.focus(); 
    }
  }

  return (
    <div className="addtask">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add New Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
