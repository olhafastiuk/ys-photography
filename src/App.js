import { useRouteMatch } from "react-router";
import { Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Gallery from "./Components/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Services from "./Components/Services";

function App() {
  const match = useRouteMatch();
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
