import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import BackgroundWrapper from "./backgroundWrapper";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import SearchCard from "../components/SearchCard/SearchCard";
import process from "process";
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="h-screen bg-local bg-gradient-to-r from-teal-100 to-blue-grey-100 ">
        <Header />
        <Navbar />
        <h1 className="m-10 text-4xl text-center font-normal leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Find a loving local pet sitter or dog sitter
        </h1>
        <p className="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Who treats your pet like family
        </p>
        <SearchCard />
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}&libraries=places`}
        ></script>
      </div>
    </>
  );
};

export default Layout;
