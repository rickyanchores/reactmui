//import ButtonAppBar from "./components/ButtonAppBar";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import "./index.scss";

///////////// CUSTOM THEME CODE HERE ////////////////////////////////

import { createTheme, ThemeProvider } from "@mui/material";
import  * as Color  from "@mui/material/colors";
import Home from "./pages/Home/Home";
import SimpleContainer from "./components/SimpleContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: Color.grey[400]
    },
    secondary: {
      main: Color.blue[500]
    }
  }
});

/////////////////////////////////////////////////////////////////////////

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveAppBar />
        <Home />
        <SimpleContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
