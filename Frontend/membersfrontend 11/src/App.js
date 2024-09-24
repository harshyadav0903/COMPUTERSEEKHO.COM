import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
   <div>
    <ul>
       <li><Link to='Home'>Home</Link></li>
       <li><Link to='Get'>Get</Link></li>
       <li><Link to='Post'>Post</Link></li>
       </ul>
       <Outlet></Outlet>
    </div>
  );
}

export default App;
