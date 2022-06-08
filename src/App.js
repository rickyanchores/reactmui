//import ButtonAppBar from "./components/ButtonAppBar";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import "./index.scss";

///////////// CUSTOM THEME CODE HERE ////////////////////////////////

import { createTheme, ThemeProvider } from "@mui/material";
import  * as Color  from "@mui/material/colors";
import Home from "./pages/Home/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: Color.grey[900]
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
      </div>
    </ThemeProvider>
  );
};

export default App;
