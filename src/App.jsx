import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Home } from "@/components/home";
import { Container } from "@/container";

function App() {
  return (
    <div className="w-full h-auto px-4">
      <Navbar />
      <Container>
        <Home />
        <About />
      </Container>
    </div>
  );
}

export default App;
