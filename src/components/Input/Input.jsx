import React from 'react';

function Input({'data-testid':dataTestId, value, onChange, placeholder, isAddInput = false }) {
	const inputClassName = isAddInput
		? ' flex-auto text-lg px-4 py-2 border-0 outline-none rounded-l-lg'
		: ' flex-auto text-lg pr-10 pl-2 border-0 outline-none rounded w-[80%]';

	return (
		<input
      data-testid ={dataTestId}
			type='text'
			className={inputClassName}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		></input>
	);
}

export default Input;
