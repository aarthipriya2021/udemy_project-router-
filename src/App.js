import { Route} from 'react-router-dom';

import './App.css';
import MainHeader from './components/MainHeader';
import Products from './pages/Products';
import Welcome from './pages/Welcome';


function App() {
  return (
    <div className="App">
      <MainHeader />
        <main>
          <Route path='/Welcome'>
              <Welcome />
          </Route>
          <Route path='/Products'>
              <Products />
          </Route>
        </main>
        
      
    </div>
  );
}

export default App;
