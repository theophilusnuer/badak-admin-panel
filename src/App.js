import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard-page';
import Signup from './pages/register-page/signup';
import UserRequest from './pages/user-request-page';
import Home from './pages/Home';
import LoginForm from './components/user-login/LoginForm';
import UserProfile from './pages/user-profile-page';
import VerifyStatus from './pages/verify-status';


function App() {

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path:"/dashboard", element: <Dashboard/>},
  {path:"/login", element: <LoginForm/>},
  {path:"/signup", element: <Signup/>},
  {path:"/userrequest", element: <UserRequest/>},
  {path:"/userprofile", element: <UserProfile/>},
  {path:"/verification", element: <VerifyStatus/>},

]);

  return (
   <>
   <RouterProvider router = {router}/>
   </>
  );
}

export default App;
