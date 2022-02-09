import { useContext } from 'react';
import UserContext from '../context/User/UserContext';

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            className="card-img-top rounded-circle m-auto img-fluid"
            src={selectedUser.avatar}
            alt={selectedUser.first_name}
            style={{ width: 180 }}
          />
          <h2 className='fw-bold'>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h2>
          <h3 className='text-muted'>Email: {selectedUser.email}</h3>
        </div>
      ) : (
        <h2 className='text-center text-muted'>No user selected</h2>
      )}
    </>
  );
};

export default Profile;
