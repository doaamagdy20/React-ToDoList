import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

export default function TaskList({ tasks, onDeleteTask,onEditTask,onToggleTask  }) {
  if (tasks.length === 0) {
    return <span className='no-tasks'>You Don’t Have Tasks</span>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
            onEdit={(newText) => onEditTask(task.id, newText)  }
           onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </ul>
  );
}
