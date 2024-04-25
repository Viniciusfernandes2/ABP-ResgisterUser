import ReactDOM from 'react-dom/client';
import App from './App';
import LoginPage from './pages/loginPage';
import Header from './components/Header/header';
import RegisterUser from './pages/RegisterUser';
import AdmPanel from './pages/admPanel';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <div>
      <Header/>
      <AdmPanel/>
    </div>
);
