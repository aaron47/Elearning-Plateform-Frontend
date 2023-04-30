import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { VisitorNavbar } from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CreateFormation from './components/CreateFormation';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/register',
		element: (
			<>
				<VisitorNavbar />
				<Register />
			</>
		),
	},
	{
		path: '/login',
		element: (
			<>
				<VisitorNavbar />
				<Login />
			</>
		),
	},
	{
		path: '/create-formation',
		element: <CreateFormation />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
