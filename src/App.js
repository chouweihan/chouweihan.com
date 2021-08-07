import styled from "styled-components";
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

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
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

const DivWrapper = styled.div`
  color: red;
`;

export default App;
