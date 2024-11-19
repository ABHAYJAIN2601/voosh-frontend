import './App.css'
import { Provider } from 'react-redux'
import store from './Redux/store';
import { BrowserRouter} from 'react-router-dom';
import MainPage from './Components/MainPage';
import 'bootstrap/dist/css/bootstrap.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App () {

  return (
    <Provider store={store}>
     
    <BrowserRouter>
    <div className='App'>
    <GoogleOAuthProvider clientId="<your_client_id>"> <MainPage/></GoogleOAuthProvider>;

    
    </div>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
