import { useRoutes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";

export interface IAppProps {}

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      {path: '/', element: <Home />},
    ],
  };

  const routing = useRoutes([mainRoutes]);
  return <>{routing}</>;
};

export default App;
