import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
