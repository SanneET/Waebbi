import "./styles/App.css"; // Ændret fra "../src/styles/App.css"
import Service from "./views/Service";
import VoresVaerdier from "./views/VoresVaerdier";
import Kontakt from "./views/Kontakt";
import Home from "./views/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "service", element: <Service /> },
      { path: "vores-vaerdier", element: <VoresVaerdier /> },
      { path: "kontakt", element: <Kontakt /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
