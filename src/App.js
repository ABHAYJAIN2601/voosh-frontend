import './App.css'
import { Provider } from 'react-redux'
import store from './Redux/store';
import { BrowserRouter} from 'react-router-dom';
import MainPage from './Components/MainPage';
import 'bootstrap/dist/css/bootstrap.css';

function App () {

  return (
    <Provider store={store}>
     
    <BrowserRouter>
    <div className='App'>
     <MainPage/>
    </div>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
