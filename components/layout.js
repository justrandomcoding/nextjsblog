import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (

      <div className="flex-col flex h-screen">

          <Header/>
          <div className="pt-32 pb-24 flex flex-col mx-28 text-gray-300">
              {children}
          </div>
          <Footer/>


      </div>
  );
}