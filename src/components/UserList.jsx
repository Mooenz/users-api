import { useEffect, useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map(({ id, first_name, last_name, avatar }) => (
        <a
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start align-items-center"
          href="#!"
          key={id}
          onClick={() => getProfile(id)}
        >
          <img className="img-fluid mr-4 rounded-circle" src={avatar} alt={first_name} width="70"/>
          <p className='mb-0 ms-2'>{`${first_name} ${last_name}`}</p>
        </a>
      ))}
    </div>
  );
};

export default UserList;
