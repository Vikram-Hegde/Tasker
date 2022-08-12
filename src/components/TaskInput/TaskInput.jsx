import AddIcon from '../icons/AddIcon';
import './TaskInput.scss';

export default function TaskInput({ addNewTask }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		addNewTask({
			id: Math.floor(Math.random() * 10000),
			task: e.target.taskInput.value,
			completed: false,
			important: false,
		});
		e.target.reset();
	};

	return (
		<form className="task-input" onSubmit={handleSubmit}>
			<input
				name="taskInput"
				type="text"
				className="task-input__input"
				placeholder="Write a new task..."
			/>
			<button className="task-input__btn">
				<AddIcon width={16} height={16} /> Add
			</button>
		</form>
	);
}
