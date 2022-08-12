import Check from '../icons/Check';
import Star from '../icons/Star';
import Trash from '../icons/Trash';
import './Task.scss';

export default function Task({ task, toggleOption, handleDelete }) {
	return (
		<div className="task">
			<button
				onClick={() => toggleOption(task.id, 'completed')}
				className={`task__check ${task.completed ? 'completed' : ''}`}
			>
				{task.completed && <Check width={20} height={20} />}
			</button>
			<div className="task__name">{task.task}</div>
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
