import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './styles/main.scss';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	//<React.StrictMode>
	<Provider store={store}>
		<App />,
	</Provider>,
	//</React.StrictMode>,
);
