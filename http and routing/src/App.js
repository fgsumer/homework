import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import BlogRoutes from './containers/Blog/BlogRoutes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BlogRoutes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
