import React, { Component } from 'react';

import PublicNavbar from './navigation/PublicNavbar';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <>
        <PublicNavbar />
        <main>
             
          <div className="welcome my-8 mx-auto">
            <h1>CirroStratus</h1>
            <p>Proto-app for the new Vestmed site</p>
          </div>
        
        </main>
      </>
    )
  }
}

export default Home;