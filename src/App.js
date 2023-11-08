import { createStore } from 'redux';
import './App.css';
import reducer from './reducers/index';
import Gallery from './components/gallery/gallery';
import { Provider } from 'react-redux';
import Summary from './components/summary/summary';

function App() {

  const store = createStore(reducer);

  return (
    <div>
      <Provider store={store}>
        <div className='d-flex'>
          <Summary></Summary>
          <Gallery></Gallery>
        </div>
        
      </Provider>
    </div>
  );
}

export default App;
