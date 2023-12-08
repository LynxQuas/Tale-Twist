import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppLayout from "./pages/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import BlogsLayout from "./pages/BlogsLayout";
import BlogNew from "./pages/BlogNew";
import BlogEdit from "./pages/BlogEdit";

import Blog from "./pages/Blog";

import {
    blogsLoader,
    blogDetailLoader,
    checkAuthUser,
    authProtectedLoader,
} from "./utlis/loaders";
import {
    deleteBlog,
    manipulateBlogAction,
    createUserAction,
    loginUser,
    logout as logoutAction,
    editProfile,
} from "./utlis/actions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        id: "root",
        loader: checkAuthUser,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "profile", element: <Profile />, action: editProfile },

            {
                path: "profile/:blogId",
                element: <Blog />,
                loader: blogDetailLoader,
            },
            { path: "login", element: <Login />, action: loginUser },
            { path: "logout", action: logoutAction },
            {
                path: "register",
                element: <Register />,
                action: createUserAction,
            },
            {
                path: "blogs",
                element: <BlogsLayout />,
                children: [
                    { index: true, element: <Blogs />, loader: blogsLoader },
                    {
                        path: "new",
                        element: <BlogNew />,
                        action: manipulateBlogAction,
                        loader: authProtectedLoader,
                    },
                    {
                        path: ":blogId",
                        id: "blog-detail",
                        loader: blogDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <Blog />,
                                action: deleteBlog,
                            },
                            {
                                path: "edit",
                                element: <BlogEdit />,
                                action: manipulateBlogAction,
                                loader: authProtectedLoader,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
