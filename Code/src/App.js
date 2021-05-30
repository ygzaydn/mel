import { Header, Footer, WhatsappFooter } from "./components";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./theme/theme.jsx";

import { compose } from "recompose";
import { withWindowProvider } from "./contexts/window/provider";

import {
  Homepage,
  Aboutpage,
  Gallerypage,
  Contactpage,
  Servicespage,
} from "./pages";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = ({}) => {
  return (
    <Router>
      <Header />
      <ThemeProvider theme={Theme}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/hakkimizda" exact>
            <Aboutpage />
          </Route>
          <Route path="/galeri" exact>
            <Gallerypage />
          </Route>
          <Route path="/iletisim" exact>
            <Contactpage />
          </Route>
          <Route path="/hizmetlerimiz" exact>
            <Servicespage />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </ThemeProvider>
      <WhatsappFooter />
      <Footer />
    </Router>
  );
};

export default compose(withWindowProvider)(App);
