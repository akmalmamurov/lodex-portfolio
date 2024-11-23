import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Home } from "@/components/home";
import { Container } from "@/container";
import {Services} from "@/components/services";
import { Contact } from "./components/contact";
import { Toaster } from "react-hot-toast";
import {Footer} from "@/components/footer";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <div className="w-full h-full ">
        <Navbar />
        <Container>
          <Home />
          <About />
          <Services />
          <Portfolio/>
          <Contact />
        </Container>
        <Footer />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
