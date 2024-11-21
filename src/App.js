import React from 'react';
import './App.css'; // Keep CSS imports at the top
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './Components/MainPage';
import 'bootstrap/dist/css/bootstrap.css'; // Ensure bootstrap CSS is imported here
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="<your_client_id>">
          <div className='App'>
            <MainPage />
          </div>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;