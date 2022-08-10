import Logo from '../icons/Logo';
import HomeIcon from '../icons/HomeIcon';
import CompletedIcon from '../icons/CompletedIcon';
import ImportantIcon from '../icons/ImportantIcon';
import './Sidebar.scss';
import { useState } from 'react';

export default function Sidebar() {
	let sidebarList = [
		{ name: 'Home', icon: <HomeIcon height={24} width={24} /> },
		{ name: 'Important', icon: <ImportantIcon height={24} width={24} /> },
		{ name: 'Completed', icon: <CompletedIcon height={24} width={24} /> },
	];

	let [active, setActive] = useState('Home');

	return (
		<div className="sidebar">
			<div className="logo sidebar__logo">
				<Logo height={36} width={36} />
			</div>
			<nav>
				<ul className="sidebar__list">
					{sidebarList.map(({ name, icon }) => (
						<li
							className={`sidebar__item ${active === name ? 'active' : ''}`}
							onClick={() => setActive(name)}
							key={name}
						>
							{icon}
							{name}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
