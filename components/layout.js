import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (

      <div suppressHydrationWarning className="flex-col flex h-screen">

          <Header/>
          <div className="pt-32 pb-24  px-10 flex flex-col text-gray-300 mr-auto ml-auto container">
              {children}
          </div>
          <Footer/>


      </div>
  );
}