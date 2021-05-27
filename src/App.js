import { Route} from 'react-router-dom';

import './App.css';
import Products from './components/Products';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
        <Route path='/Welcome'>
            <Welcome />
        </Route>
        <Route path='/Products'>
            <Products />
        </Route>
    </div>
  );
}

export default App;
