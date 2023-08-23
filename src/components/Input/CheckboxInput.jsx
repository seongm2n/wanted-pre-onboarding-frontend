import React from 'react';

function CheckboxInput({ onChange, checked }) {
	return (
		<input
			className='mx-2 outline-none'
			type='checkbox'
			checked={checked}
			onChange={onChange}
		></input>
	);
}

export default CheckboxInput;
