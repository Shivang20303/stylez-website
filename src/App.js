import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/assets/sign-in/sign-in.component";

<Navigation/>

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        {/* Index makes the sub-route render at the same time the parent is rendered */}
        <Route index={true} element={<Home />} /> 
        <Route path="SignIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
