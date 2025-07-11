import React, { useState } from "react";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && task.trim()) {
      setTasks((prev) => [...prev, task]);
      setTask(""); // Clear input field after adding
    }
  };

  const renderedTasks = tasks.map((tk, index) => <li key={index}>{tk}</li>);

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {renderedTasks}
    </div>
  );
};

export default TaskInput;
