
import './App.css';
import UserInfo from './components/UserInfo';
import withLoading from './components/withLoading';

const UserInfoWithLoading = withLoading(UserInfo);

function App() {
  return (
    <div>
      <UserInfoWithLoading name="Didier Ganthier" email="didierganthierperan@gmail.com" />
    </div>
  );
}

export default App;
