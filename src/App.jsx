//components
import Profile from './components/Profile';
import UserList from './components/UserList';

//context
import UserState from './context/User/UserState';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserState>
      <div className="container py-4 min-vh-100 position-relative">
        <div className="col-12 text-center mb-4">
          <h1 className="fw-bold">Select a Profile</h1>
          <p className="fw-light m-0">
            hi there, this project show you how work whit useContext and how
            make a context reuse
          </p>
        </div>
        <div className="row gap-3 gap-md-0">
          <div className="col-12 col-md-6">
            <Profile />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <UserList />
          </div>
        </div>
        <p className='text-light text-muted text-center position-absolute bottom-0 start-0 end-0'>created by <span className='fw-bold'>Mooenz</span></p>
      </div>
    </UserState>
  );
}

export default App;
