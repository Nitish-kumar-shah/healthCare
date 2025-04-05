import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout, Login } from "./components/index.js";
import Signup from "./pages/Signup.jsx";
import HealthInsurance from "./components/HealthInsurance/HealthInsurance.jsx";
import Doctors from "./components/Doctors.jsx";
import Chatbot from "./components/Chatbot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/doctors",
        element: (
          <AuthLayout authentication>
            <Doctors />
          </AuthLayout>
        ),
      },
      {
        path: "/chat-bot",
        element: (
          <AuthLayout authentication>
            <Chatbot />
          </AuthLayout>
        ),
      },
      {
        path: "/insurance",
        element: (
          <AuthLayout authentication>
            <HealthInsurance />
          </AuthLayout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
