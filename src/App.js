import Routes from './routes';
import './styles.css';
import AuthenticateProvider from './contexts/UserContext';
import Header from './containers/Header';




export default function App() {
  return (
    <div className="App">
      <AuthenticateProvider>
        <Routes />
      </AuthenticateProvider>
    </div>
  );
}



