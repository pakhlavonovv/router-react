import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from '../App'
import { Login, Cars, Admin, User} from '@pages'
  const Index = () => {
    
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Login/>}/>
        <Route path='cars' element={<Cars/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path="user" element={<User/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router}/>
  }

export default Index