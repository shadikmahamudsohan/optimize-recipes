import logo from './logo.svg';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
