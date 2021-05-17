import Routes from './routes';
import './styles.css';
import AuthenticateProvider from './contexts/UserContext';
import AppProvider from './contexts/AppContext';

export default function App() {
  return (
    <div className="App">
      <AppProvider>
        <AuthenticateProvider>
          <Routes />         
        </AuthenticateProvider>
      </AppProvider>
    </div>
  );
}



