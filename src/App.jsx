import './styles/style.scss';
import Sidebar from './components/Sidebar/Sidebar';
import HomeIcon from './components/icons/HomeIcon';
import Home from './pages/Home';
import ImportantIcon from './components/icons/ImportantIcon';
import Important from './pages/Important';
import CompletedIcon from './components/icons/CompletedIcon';
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

	let menuList = [
		{
			name: 'Home',
			icon: <HomeIcon height={24} width={24} />,
		},
		{
			name: 'Important',
			icon: <ImportantIcon height={24} width={24} />,
		},
		{
			name: 'Completed',
			icon: <CompletedIcon height={24} width={24} />,
		},
	];

	const [active, setActive] = useState(menuList[0]);
	let pageProps = {
		tasks: tasks,
		toggleOption: toggleOption,
		handleDelete: handleDelete,
		updateTask: updateTask,
	};
	let content;

	if (active.name === 'Home') content = <Home {...pageProps} />;
	else if (active.name === 'Important') content = <Important {...pageProps} />;
	else if (active.name === 'Completed') content = <Completed {...pageProps} />;

	useEffect(() => {
		document.body.setAttribute('color-scheme', theme);
	}, [theme]);

	return (
		<main className="App">
			<Sidebar menuList={menuList} active={active} setActive={setActive} />
			<div className="pages">
				<header>
					<div className="page__subtitle">Hello User,</div>
					<Toggle setTheme={setTheme} />
				</header>
				<div className="page__title">
					You've got <b>{tasks.length}</b> tasks to complete
				</div>
				<TaskInput addNewTask={addNewTask} />
				{content}
			</div>
		</main>
	);
}

export default App;
