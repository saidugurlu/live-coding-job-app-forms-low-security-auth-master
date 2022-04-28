export const ValidationFieldRequired = ({field}) => {
	return (
		<>
			{field.trim().length === 0 && (
				<div className="fieldNote">required</div>
			)}
		</>
	);
};
