// REACT ROUTER DOM - V6
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// LAYOUT
import NavLayout from "./Layout/NavLayout";

// SCENES
import Error from "./Scenes/Error";
import Home from "./Scenes/Home";

// APP
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      {/* PAGES */}
      <Route index path="/" element={<Home />} />

      {/* ERROR HANDLING */}
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
