import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import CartView from './CartView.jsx';
import PayForm from './PayForm.jsx';
import AdminLogin from './AdminLogin.jsx';
import Landing from './Landing.jsx';
import EditMerchPage from './EditMerchPage.jsx';
import AddItemForm from './AddItemForm.jsx';

const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
				path: '/cartview',
				element: <CartView />
			},
			{
				path: '/payform',
				element: <PayForm />
			},
			{
				path: '/adminlogin',
				element: <AdminLogin />
			},
			{
				path: '/editmerchpage',
				element: <EditMerchPage />
			},
			{
				path: '/additemform',
				element: <AddItemForm />
			},
			{
				index: true,
				element: <Landing />
			},
		]
	},

]);

export { router }