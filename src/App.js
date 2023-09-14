import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";

import PaginaContato from "./screens/PaginaContato";

import PaginaInicial from "./screens/PaginaInicial";
import PaginaSobre from "./screens/PaginaSobre";

const router = createBrowserRouter([
  {
    path: "*",

    Component: RootNavigation,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function RootNavigation() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />

      <Route path="/contato" element={<PaginaContato />} />
      <Route path="/sobre" element={<PaginaSobre />} />
    </Routes>
  );
}

export default App;
