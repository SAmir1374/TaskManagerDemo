import { Outlet } from "react-router-dom";
import AnonymousHeader from "../components/AnonymousHeader";
import anonymousLayoutBackgroundImage from "../assets/anonymousLayoutBackground.svg";

const AnonymousLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <AnonymousHeader />
      <Outlet />
      <img
        src={anonymousLayoutBackgroundImage}
        className="fixed bottom-0  w-screen -z-50"
      />
    </div>
  );
};

export default AnonymousLayout;
