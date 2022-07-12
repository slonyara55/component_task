function DateText() {
	const currentDate = new Date();
	const formattedDate = currentDate.getDate() + '-' + currentDate.getMonth() + '-' + currentDate.getFullYear();
	return (
		<div className="Date">
			<div>{formattedDate}</div>
		</div>
	);
}


export default DateText;