import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "@/components/ui/provider";

import "@fontsource/jetbrains-mono";
import "@fontsource/lato";
import "@fontsource/mogra";

import { NavBar } from "./components/NavBar/NavBar";
import { AboutPage } from "./components/About/AboutPage.jsx";
import Notes from "./components/Note/Notes";
import ContactPage from "./components/Contact/ContactPage";
import { ContactForm } from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/notes", element: <Notes /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
