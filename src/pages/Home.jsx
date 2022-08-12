import Task from '../components/Task/Task';

export default function Home({
	tasks,
	toggleOption,
	updateTask,
	handleDelete,
}) {
	return (
		<div className="page homepage">
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					updateTask={updateTask}
					toggleOption={toggleOption}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
}
