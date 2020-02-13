import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './GlobalStyles';

import Map from './components/Map';

function App() {
  return (
    <>
      <Map />
      <GlobalStyles />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
