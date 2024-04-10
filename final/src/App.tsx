import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Ender from "./Ender";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Content />
        <Footer />
        <Ender />
      </div>
    </ChakraProvider>
  );
}

export default App;
