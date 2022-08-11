import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Home from './pages/home';
import AddUser from './pages/add-user';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import store from './redux/store';
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Header/>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/addUser' element={<AddUser />}></Route>
            <Route path='/updateUser/:id' element={<AddUser />}></Route>
            
          </Routes>
          <Footer/>
          </Provider>
      </Router>
    </>
  );
}

export default App;
