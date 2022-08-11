import { useState } from 'react';
import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';
import './Toggle.scss';

export default function Toggle({ setTheme }) {
	let [toggle, setToggle] = useState(0);

	const handleChange = () => {
		setToggle(!toggle);
		setTheme(toggle ? 'light' : 'dark');
	};

	return (
		<div className="toggle">
			<label className="toggler" htmlFor="theme-toggle">
				<input type="checkbox" id="theme-toggle" onChange={handleChange} />
				<div className="toggle__circle">
					{toggle ? (
						<MoonIcon width={12} height={12} />
					) : (
						<SunIcon width={12} height={12} />
					)}
				</div>
			</label>
		</div>
	);
}
