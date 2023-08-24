import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const AuthGuard = ({ children }) => {
	const accessToken = localStorage.getItem('access_token');
	const location = useLocation();

	if (!accessToken && location.pathname === '/todo') {
		return (
			<Navigate
				to='/signin'
				replace
			/>
		);
	} else if (
		accessToken &&
		(location.pathname === '/signin' || location.pathname === '/signup')
	) {
		return (
			<Navigate
				to='/todo'
				replace
			/>
		);
	}

	return children;
};
