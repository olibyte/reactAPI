import React, { Component } from 'react';
import SingleSide from './SingleSide';

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
    };
  }

  componentDidMount() {
    
  }

  renderItems() {
    return this.state.news.map((item) => (
      <SingleSide key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default Sidenews;
