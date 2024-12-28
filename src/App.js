
import './App.css';
import Dashboard from './components/Dashboard';
import withAuthentication from './components/withAuthentication';

const simulateAuth = () => new Promise((resolve) => setTimeout(() => resolve(true), 2000))

const AccessDeniedComponent = () => <div>You do not have access to this ressource</div>

const UserAccess = withAuthentication(Dashboard);

function App() {
  return (
    <div>
      <UserAccess username="didierganthier"/>
    </div>
  );
}

export default App;
