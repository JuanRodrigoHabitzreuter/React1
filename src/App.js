import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "boostrap/dist/css/boostrap.min.css";

//1//
import "./App.css";

import PaginaInicial from "./screens/PaginaInicial";
import PaginaContato from "./screens/PaginaContato";
import PaginaSobre from "./screens/PaginaSobre";
//2//
const router = createBrowserRouter([
  {
    path: "*",

    Component: RootNavigation,
  },
]);
//3//
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
//4//
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
