import { Header, Footer, WhatsappFooter } from "./components";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./theme/theme.jsx";

import { compose } from "recompose";
import { withWindowProvider } from "./contexts/window/provider";
import Firebase, { FirebaseContext } from "./firebase/index";
import "normalize.css/normalize.css";

import {
    Homepage,
    Aboutpage,
    Gallerypage,
    Contactpage,
    Servicespage,
    Adminpage,
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
            <FirebaseContext.Provider value={new Firebase()}>
                <Header />
                <ThemeProvider theme={Theme}>
                    <Switch>
                        <Route path="/anasayfa" exact>
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
                        <Route path="/admin" exact>
                            <Adminpage />
                        </Route>
                        <Route path="/">
                            <Redirect to="/anasayfa" />
                        </Route>
                    </Switch>
                </ThemeProvider>
                <WhatsappFooter />
                <Footer />
            </FirebaseContext.Provider>
        </Router>
    );
};

export default compose(withWindowProvider)(App);
