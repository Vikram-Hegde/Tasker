import './styles/style.scss';
import Sidebar from './components/Sidebar/Sidebar';
import HomeIcon from './components/icons/HomeIcon';
import Home from './pages/Home';
import Important from './pages/Important';
import Completed from './pages/Completed';
import Toggle from './components/Toggle/Toggle';
import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import { useRef } from 'react';

function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, task: 'Finish this project', completed: false, important: false },
		{
			id: 2,
			task: 'Double click to edit',
			completed: false,
			important: true,
		},
	]);

	const [theme, setTheme] = useState('dark');
	useEffect(() => {
		document.body.setAttribute('color-scheme', theme);
	}, [theme]);

	// bringing in if available
	useEffect(() => {
		console.log('i run first');
		const tasksStorage = JSON.parse(localStorage.getItem('tasks'));
		if (tasksStorage) {
			setTasks(tasksStorage);
		}
	}, []);

	// saving tasks to localStorage
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}, [tasks]);

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

	return (
		<main className="App">
			<Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
			<div className="pages">
				<header>
					<div className="page__subtitle">Hello User,</div>
					<Toggle setTheme={setTheme} />
				</header>
				<div className="page__title">
					{remainingTasks
						? `You've got ${remainingTasks}${' '}
					${remainingTasks > 1 ? 'tasks' : 'task'} to complete`
						: `You've completed all the tasks! Hurray`}
				</div>
				<TaskInput addNewTask={addNewTask} />
				{content}
			</div>
		</main>
	);
}

export default App;
