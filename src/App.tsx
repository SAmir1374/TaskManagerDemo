import { RootState } from "./redux/store";
import { Routes } from "./routes";
import { useSelector } from "react-redux";

const App = () => {
  const auth = useSelector((store: RootState) => store.auth);
  console.log(auth);

  return <Routes isAuthorized={!!auth.accessToken} />;
};

export default App;
