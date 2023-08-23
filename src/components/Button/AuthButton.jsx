import React from 'react';

function AuthButton({
	'data-testid': dataTestId,
	text,
	onClick,
	type = 'button',
}) {
	return (
		<button
			data-testid={dataTestId}
			className=' bg-orange-300 px-8 py-2 w-full  focus:outline-none border-b border-wgray-400 sm:text-center rounded hover:bg-orange-200'
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
}

export default AuthButton;
