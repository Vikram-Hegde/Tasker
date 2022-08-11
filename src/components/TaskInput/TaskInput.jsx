import AddIcon from '../icons/AddIcon';
import './TaskInput.scss';

export default function TaskInput() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.taskInput.value)
		e.target.reset();
	}

	return (
		<form className="task-input" onSubmit={handleSubmit}>
			<input name="taskInput" type="text" className="task-input__input" placeholder='Write a new task...' />
			<button className="task-input__btn"><AddIcon width={16} height={16} /> Add</button>
		</form>
	);
}
