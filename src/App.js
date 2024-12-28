
import './App.css';
import Dashboard from './components/Dashboard';
import withAuthentication from './components/withAuthentication';

const UserAccess = withAuthentication(Dashboard);

function App() {
  return (
    <div>
      <UserAccess username="didierganthier"/>
    </div>
  );
}

export default App;
