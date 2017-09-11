import React, { Component } from 'react';

import Api from 'api';

class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    Api.getCategories()
      .then(categories => this.setState({
        categories
      }));
  }

  render() {
    console.log(this.state.categories);
    return (
      <div>
        {/* {this.state.categories.map((category) => 
          <div key={category}>
            {category}
          </div>
        )} */}
        Udacity project #2 - Readable
      </div>
    );
  }
}

export default App;
