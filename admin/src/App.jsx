import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme-context";
import { Toaster } from "react-hot-toast";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/page";
import Yojana from "@/routes/yojana";
import Taluka from "@/routes/taluka";
import GramPanchayat from "@/routes/gram-panchayat";
import Village from "@/routes/village";
import SignIn from "@/routes/sign-in";
import Register from "@/routes/register";
import Category from "@/routes/category";
import Subcategory from "@/routes/sub-category";
import Document_Yojana from "@/routes/document_yojana";
import Document from "@/routes/document";
import User from "@/routes/user";
import Setting from "@/routes/setting";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <SignIn />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "dashboard", 
                    index: true, // /login
                    element: <DashboardPage />,
                },
                {
                    path: "category", // /login/category
                    element: <Category />,
                },
                {
                    path: "subcategory", // /login/subcategory
                    element: <Subcategory />,
                },
                {
                    path: "yojana", // /login/yojana
                    element: <Yojana />,
                },
                {
                    path: "document-yojana", // /login/document-yojana
                    element: <Document_Yojana />,
                },
                {
                    path: "document", // /login/document
                    element: <Document />,
                },
                {
                    path: "taluka", // /login/taluka
                    element: <Taluka />,
                },
                {
                    path: "gram-panchayat", // /login/gram-panchayat
                    element: <GramPanchayat />,
                },
                {
                    path: "village", // /login/village
                    element: <Village />,
                },
                {
                    path: "user", // /login/user (lowercase recommended)
                    element: <User />,
                },
                {
                    path: "setting", // /login/setting
                    element: <Setting />,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        background: "#363636",
                        color: "#fff",
                    },
                    success: {
                        style: {
                            background: "#3385ff",
                        },
                    },
                    error: {
                        style: {
                            background: "#ff3300",
                        },
                    },
                }}
            />
        </ThemeProvider>
    );
}

export default App;
