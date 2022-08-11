import Logo from '../icons/Logo';
import './Sidebar.scss';

export default function Sidebar({ menuList, active, setActive }) {
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
								active.name === item.name ? 'active' : ''
							}`}
							onClick={() => setActive(item)}
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
