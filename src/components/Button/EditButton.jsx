import React from 'react';

function EditButton({
	'data-testid': dataTestId,
	text,
	onClick,
	type = 'button',
	isCancleButton = false,
}) {
	const buttonClassName = isCancleButton
		? ' text-text font-bold px-3 py-3 hover:bg-BananaMania hover:text-jazzberryJam rounded-full'
		: ' text-text font-bold px-3 py-3 hover:bg-editButton hover:text-springGreen rounded-full';

	return (
		<button
			data-testid={dataTestId}
			className={buttonClassName}
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
}

export default EditButton;
