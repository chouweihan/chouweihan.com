import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  HomePage,
  ErrorPage,
  ContactPage,
  ProjectsPage,
  SingleProjectPage,
  AboutPage,
} from "./pages";
import ScrollToTop from "./utility/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Route exact path="/projects/:id" children={<SingleProjectPage />} />
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
