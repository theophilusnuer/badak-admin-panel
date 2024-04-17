import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard-page';
import Login from './pages/register-page/login';
import Signup from './pages/register-page/signup';
import UserRequest from './pages/user-request-page';
import UserProfile from './pages/user-profile-page';


function App() {

const router = createBrowserRouter([
  {path:"/", element: <Dashboard/>},
  {path:"/login", element: <Login/>},
  {path:"/signup", element: <Signup/>},
  {path:"/userrequest", element: <UserRequest/>},
  {path:"/userprofile", element: <UserProfile/>},

]);

  return (
   <RouterProvider router = {router}/>
  );
}

export default App;
