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
	let menuList = [
		{ name: 'Home', icon: <HomeIcon height={24} width={24} />, page: <Home /> },
		{
			name: 'Important',
			icon: <ImportantIcon height={24} width={24} />,
			page: <Important />,
		},
		{
			name: 'Completed',
			icon: <CompletedIcon height={24} width={24} />,
			page: <Completed />,
		},
	];

	let [active, setActive] = useState(menuList[0]);
	let [theme, setTheme] = useState('light');

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
				<div className="page__title">You've got <b>8</b> tasks to complete</div>
				<TaskInput />
				{active.page}
			</div>
		</main>
	);
}

export default App;
