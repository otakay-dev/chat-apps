import  {Route , Switch , BrowserRouter} from 'react-router-dom'
import { Login } from './components/login'


export const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/"  component={Login} />
			</Switch>
		</BrowserRouter>
	  );
}

