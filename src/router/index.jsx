import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"
import App from "../App"
import Login from "../pages/login/login"
import Users from "../pages/users/users"
import Main from "../pages/main/main"
import SinglePage from "../pages/single-page/single-page"
 const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login />}/>
                <Route path="main/*" element={<Main/>}>
                    <Route index element={<Users />}/>
                    <Route path="single-page/:id" element={<SinglePage />} />
                </Route>
            </Route>
        )
    )
    return <RouterProvider router={router}/>
 }
 export default Index