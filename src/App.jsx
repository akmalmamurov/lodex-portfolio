import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Home } from "@/components/home";
import { Container } from "@/container";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="w-full h-full ">
      <Navbar />

      <Container>
        <Home />
        <About />
        <Services />
      </Container>
    </div>
  );
}

export default App;
