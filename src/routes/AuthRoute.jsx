import React from 'react';
import { Navigate } from 'react-router-dom';

export const AuthRoute = ({ children }) => {
	const accessToken = localStorage.getItem('access_token');

	if (accessToken) {
		return (
			<Navigate
				to='/todo'
				replace
			/>
		);
	}

	return children;
};