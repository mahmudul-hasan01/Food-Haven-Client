import useAuth from "../Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
              <h1>Hi, Welcome </h1>
            {
                user.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default UserHome;