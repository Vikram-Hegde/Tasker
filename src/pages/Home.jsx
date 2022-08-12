import Task from '../components/Task/Task';

export default function Home({ tasks, toggleOption, updateTask, handleDelete }) {
	return (
		<div className="page homepage">
			{tasks.map((task, idx) => (
				<Task idx={idx} key={task.id} task={task} updateTask={updateTask} toggleOption={toggleOption} handleDelete={handleDelete} />
			))}
		</div>
	);
}
