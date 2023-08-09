import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export function useTodoContext() {
	return useContext(TodoContext);
}

export function TodoProvider({ children }) {
	const [currentModifyItemId, setCurrentModifyItemId] = useState(null);
	const [isModifying, setIsModifying] = useState(false);

	return (
		<TodoContext.Provider
			value={{
				currentModifyItemId,
				setCurrentModifyItemId,
				isModifying,
				setIsModifying,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}
