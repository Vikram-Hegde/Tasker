import './styles/style.scss';
import Sidebar from './components/Sidebar/Sidebar';
import HomeIcon from './components/icons/HomeIcon';
import Home from './pages/Home';
import Important from './pages/Important';
import Completed from './pages/Completed';
import Toggle from './components/Toggle/Toggle';
import { useState } from 'react';
import { useEffect } from 'react';
import TaskInput from './components/TaskInput/TaskInput';

function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, task: 'Finish this project', completed: true, important: true },
		{
			id: 2,
			task: 'Bank work should be done by today',
			completed: false,
			important: false,
		},
	]);

	const completedTasks = tasks.filter((task) => task.completed);
	const importantTasks = tasks.filter((task) => task.important);
	const remainingTasks = tasks.length - completedTasks.length;

	const toggleOption = (id, option) => {
		const task = tasks.find((taskId) => taskId.id === id);
		task[option] = !task[option];
		setTasks([...tasks]);
	};

	const handleDelete = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const updateTask = (id, task) => {
		const taskToUpdate = tasks.find((taskId) => taskId.id === id);
		taskToUpdate.task = task;
		setTasks([...tasks]);
	};

	const addNewTask = (task) => setTasks([...tasks, task]);

	const [theme, setTheme] = useState('dark');

	const [activeMenu, setActiveMenu] = useState({
		name: 'Home',
		icon: <HomeIcon width={24} height={24} />,
	});

	let pageProps = {
		toggleOption: toggleOption,
		handleDelete: handleDelete,
		updateTask: updateTask,
	};
	let content;

	if (activeMenu.name === 'Home')
		content = <Home {...pageProps} tasks={tasks} />;
	else if (activeMenu.name === 'Important')
		content = <Important {...pageProps} tasks={importantTasks} />;
	else if (activeMenu.name === 'Completed')
		content = <Completed {...pageProps} tasks={completedTasks} />;

	useEffect(() => {
		document.body.setAttribute('color-scheme', theme);
	}, [theme]);

	return (
		<main className="App">
			<Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
			<div className="pages">
				<header>
					<div className="page__subtitle">Hello User,</div>
					<Toggle setTheme={setTheme} />
				</header>
				<div className="page__title">
					You've got <b>{remainingTasks}</b>{' '}
					{remainingTasks > 1 ? 'tasks' : 'task'} to complete
				</div>
				<TaskInput addNewTask={addNewTask} />
				{content}
			</div>
		</main>
	);
}

export default App;
