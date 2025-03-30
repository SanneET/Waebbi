import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Home from "./views/Home";
import Service from "./views/Service";
import Voresvaerdier from "./views/VoresVaerdier";


const router = createBrowserRouter([
  {
    path: "/aisystems/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "first",
        element: <Service />,
      },{
        path: "second",
        element: <Voresvaerdier />,
      },
      
      
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
