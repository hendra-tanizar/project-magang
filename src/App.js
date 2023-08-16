import './App.css';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}
export default App;
