import Task from '../components/Task/Task';

export default function Home({ tasks, toggleOption, handleDelete }) {
	return (
		<div className="page homepage">
			{tasks.map((task) => (
				<Task key={task.id} task={task} toggleOption={toggleOption} handleDelete={handleDelete} />
			))}
		</div>
	);
}
