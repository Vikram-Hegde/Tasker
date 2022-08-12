function Star({ width, height }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="transparent"
			xmlns="http://www.w3.org/2000/svg"
			stroke="var(--others-yellow)"
		>
			<path
				d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Star;
