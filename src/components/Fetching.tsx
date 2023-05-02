import userServices, { User } from "../services/userServices";
import useUsers from "../hooks/useUsers";

const Fetching = () => {
 const { users,error,isLoading , setUsers,setError } = useUsers()

  const deleteUser = (user: User) => {
    const ogUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userServices.delete(user.id).catch((error) => {
      setError(error.message);
      setUsers(ogUsers);
    });
  };

  const addUser = () => {
    const ogUsers = [...users];
    const newUser = { id: 0, name: "Ganesh" };
    setUsers([newUser, ...users]);

    userServices
      .create(newUser)
      .then(({ data: savedUsers }) => setUsers([savedUsers, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(ogUsers);
      });
  };

  const updateUser = (user: User) => {
    const ogUsers = [...users];
    const newUpdate = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (user.id === u.id ? newUpdate : u)));

    userServices.update(newUpdate).catch((error) => {
      setError(error.message);
      setUsers(ogUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <p className="spinner-border"></p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-success mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fetching;
