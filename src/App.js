
import './App.css';
import UserInfo from './components/UserInfo';
import withLoadingAndData from './components/withLoadingAndData';

const fetchUserData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: "Didier Ganthier", email: "didierganthierperan@gmail.com"})
  }, 2000);
})

const UserInfoWithLoading = withLoadingAndData(UserInfo, fetchUserData)

function App() {
  return (
    <div>
      <UserInfoWithLoading />
    </div>
  );
}

export default App;
