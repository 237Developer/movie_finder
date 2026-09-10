import App from "./Components/App";
import Search from "./pages/search";
import Home from "./pages/home";
import ErrorPage from "./pages/errorPage";
import MovieDetail from "./Components/Card-detail";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "search", element: <Search /> },
      { index: true, element: <Home /> },
    ],
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
];

export default routes;
