import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"
import App from "../App"
import Login from "../pages/sign-in/login"
import SignUp from "../pages/sign-up"
import Main from "../pages/main/main"
 const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login />}/>
                <Route path="sign-up" element={<SignUp />}/>
                <Route path="main/*" element={<Main/>}>
                </Route>
            </Route>
        )
    )
    return <RouterProvider router={router}/>
 }
 export default Index