import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./assets/authentication/authentication.component";
import SignUpForm from "./components/sign-up form/sign-up-form.component";
import Shop from "./routes/shop/shop.component";

<Navigation/>

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        {/* Index makes the sub-route render at the same time the parent is rendered */}
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />}/>
        <Route path="login" element={<Authentication />} />
        <Route path="SignUp" element={<SignUpForm/>} />
      </Route>
    </Routes>
  );
};

export default App;