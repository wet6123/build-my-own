import { RouterProvider } from 'react-router-dom';
import { routers } from './router';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
