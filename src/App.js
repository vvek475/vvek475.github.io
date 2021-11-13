import Home from "./pages/home";
import Info from "./pages/info";
import { Movieselectfuncn } from "./store/movieProvider";

function App() {

  return (
    <>
    <Movieselectfuncn>
      <Home/>
      <Info/>
    </Movieselectfuncn>
    </>
  )
}
export default App;
