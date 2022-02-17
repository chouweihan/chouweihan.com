import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  HomePage,
  ErrorPage,
  ContactPage,
  ProjectsPage,
  SingleProjectPage,
  AboutPage,
  ComingSoon
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
          <ComingSoon />
        </Route>
        <Route exact path="/old">
          <HomePage />
        </Route>
        <Route exact path="/old/about">
          <AboutPage />
        </Route>
        <Route exact path="/old/projects">
          <ProjectsPage />
        </Route>
        <Route exact path="/old/projects/:id" children={<SingleProjectPage />} />
        <Route exact path="/old/contact">
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
