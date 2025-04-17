import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";
import {Toaster} from 'react-hot-toast';

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/page";
import Yojana from "@/routes/yojana";
import Taluka from "@/routes/taluka";
import GramPanchayat from "@/routes/gram-panchayat";
import Village from '@/routes/village';
import SignIn from '@/routes/sign-in';
import Register from "@/routes/register";
import Category from "@/routes/category";
import Subcategory from "@/routes/sub-category";
import Document_Yojana from "@/routes/document_yojana";
import Document from "@/routes/document";
import User from "@/routes/user";
import  Settings  from "@/routes/setting";
import Setting from "./routes/setting";

function App() {
    const router = createBrowserRouter([
        // Default route shows Sign In
        {
            path: "/",
            element: <SignIn />,
        },
        {
            path: "/login",
            element: <SignIn />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        // All other routes under Layout
        {
            path: "/dashboard",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "category",
                    element: <Category />,
                },
                {
                    path: "subcategory",
                    element: <Subcategory />,
                },
                {
                    path: "yojana",
                    element: <Yojana />,
                },
                {
                    path: "document-yojana",
                    element: <Document_Yojana />,
                },
                {
                    path: "document",
                    element: <Document />,
                },
                {
                    path: "taluka",
                    element: <Taluka />,
                },
                {
                    path: "gram-panchayat",
                    element: <GramPanchayat />,
                },
                {
                    path: "village",
                    element: <Village />,
                },
                {
                    path: "user",
                    element: <User />,
                },
                {
                    path: "setting",
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
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        style: {
                            background: '#4CAF50',
                        },
                    },
                    error: {
                        style: {
                            background: '#F44336',
                        },
                    },
                }}
            />
        </ThemeProvider>
    );
}

export default App;
