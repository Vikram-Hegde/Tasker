import Logo from '../icons/Logo';
import HomeIcon from '../icons/HomeIcon';
import ImportantIcon from '../icons/ImportantIcon';
import CompletedIcon from '../icons/CompletedIcon';
import './Sidebar.scss';

export default function Sidebar({ activeMenu, setActiveMenu }) {
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

	return (
		<div className="sidebar">
			<div className="logo sidebar__logo">
				<Logo height={36} width={36} />
			</div>
			<nav>
				<ul className="sidebar__list">
					{menuList.map((item) => (
						<li
							className={`sidebar__item ${
								activeMenu.name === item.name ? 'active' : ''
							}`}
							onClick={() => setActiveMenu(item)}
							key={item.name}
						>
							{item.icon}
							{item.name}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
