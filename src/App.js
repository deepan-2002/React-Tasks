import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import Congrats from './Components/Congrats Card/Congrats';
import SuperOver from './Components/Super Over/Superover';
import Home from './Components/Hello World/home';
import Social from './Components/Social Buttons/social';
import Notification from './Components/Notification/Notification';
import Login from './Components/Login Design/Login';
import Tech from './Components/Technology Cards/Tech';
import Hook from './Components/Hook/Hook';
import Fruit from './Components/Fruit Container/Fruit';
import Feedback from './Components/Feedback/Feedback';
import Response from './Components/Feedback/Response';
import Coursedate from './Components/Date Function/Date';
import Fetch from './Components/Fetch/Fetch';
import Productlist from './Components/Product List/Productlist';
import Productdetails from './Components/Product List/Productdetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="/superover" element={<SuperOver />} />
          <Route path="/socialbuttons" element={<Social />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/logindesign" element={<Login />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/hook" element={<Hook />} />
          <Route path="/fruit" element={<Fruit />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/response" element={<Response />} />
          <Route path="/datefunction" element={<Coursedate />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/productlist" element={<Productlist />} />
          <Route path="/products/:id" element={<Productdetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
