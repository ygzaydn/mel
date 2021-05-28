import { Header, WhatsappFooter } from "./components";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./theme/theme.jsx";

import { compose } from "recompose";
import { withWindowProvider } from "./contexts/window/provider";

import { Homepage } from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = ({}) => {
  return (
    <Router>
      <Header />
      <ThemeProvider theme={Theme}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Switch>
      </ThemeProvider>
      <WhatsappFooter />
    </Router>
  );
};

export default compose(withWindowProvider)(App);
