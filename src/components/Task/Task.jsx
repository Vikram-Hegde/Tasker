import { useEffect } from 'react';
import { useState } from 'react';
import Check from '../icons/Check';
import Star from '../icons/Star';
import Trash from '../icons/Trash';
import './Task.scss';

export default function Task({
	task,
	toggleOption,
	handleDelete,
	updateTask,
}) {
	let [updatedTask, setUpdatedTask] = useState(task.task);
	let [toggle, setToggle] = useState(false);

	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (
				e.target.classList.contains('task') ||
				e.target.classList.contains('edit-task')
			)
				return;
			updatedTask.trim().length > 0 && setToggle(false);
		});
	}, []);

	const handleExit = (e) => {
		switch (e.key) {
			case 'Enter':
			case 'Escape':
				updatedTask.trim().length > 0 && setToggle(false);
		}
		updateTask(task.id, e.target.value);
	};

	return (
		<div className="task" onDoubleClick={() => setToggle(true)}>
			<button
				onClick={() => toggleOption(task.id, 'completed')}
				className={`task__check ${task.completed ? 'completed' : ''}`}
			>
				{task.completed && <Check width={20} height={20} />}
			</button>
			<div className={`task__name ${task.completed ? 'dashed' : ''}`}>
				{task.task}
			</div>
			{toggle && !task.completed && (
				<input
					value={updatedTask}
					className="edit-task"
					onInput={(e) => setUpdatedTask(e.target.value)}
					onKeyDown={handleExit}
					autoFocus={true}
				/>
			)}
			<button
				className={`task__icon important-icon ${
					task.important ? 'important' : ''
				}`}
				onClick={() => toggleOption(task.id, 'important')}
			>
				<Star width={20} height={20} />
			</button>
			<button
				className="task__icon delete-icon"
				onClick={() => handleDelete(task.id)}
			>
				<Trash width={20} height={20} />
			</button>
		</div>
	);
}
