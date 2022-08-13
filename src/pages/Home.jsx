import Task from '../components/Task/Task';
import EmptyState from '../components/EmptyState/EmptyState';

export default function Home({
	tasks,
	toggleOption,
	updateTask,
	handleDelete,
}) {
	return (
		<div className="page homepage">
			{tasks.length ? (
				tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						updateTask={updateTask}
						toggleOption={toggleOption}
						handleDelete={handleDelete}
					/>
				))
			) : (
				<EmptyState />
			)}
		</div>
	);
}
