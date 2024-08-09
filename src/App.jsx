import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Work from "./pages/Work";
import About from "./pages/About";
import Service from "./pages/Service";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Ideas from "./pages/Ideas";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Ideas />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
