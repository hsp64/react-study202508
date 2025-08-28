import './App.css';
import UserList from "./components/Users/UserList.jsx";
import AddUsers from "./components/Users/AddUsers.jsx";

const App = () => {
    return (

        <>
        <AddUsers />
            <UserList />
        </>
    );
};

export default App;