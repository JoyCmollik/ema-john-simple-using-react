import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact path='/'>
							<Shop />
						</Route>
						<Route path='/shop'>
							<Shop />
						</Route>
						<Route path='/orders'>
							<OrderReview />
						</Route>
						<Route path='/inventory'>
							<Inventory />
						</Route>
						<PrivateRoute path='/shipping'>
							<Shipping />
						</PrivateRoute>
						<PrivateRoute path='/placeorder'>
							<PlaceOrder />
						</PrivateRoute>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/register'>
							<Register />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
