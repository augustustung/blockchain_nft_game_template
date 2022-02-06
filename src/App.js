import React from 'react';
import './App.css';
import brain from '../brain.png'
import { useSelector } from 'react-redux';

function App() {
  const blockchain = useSelector(state => state.blockchain)

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://github.com/augustustung"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={brain} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; Lip Tokens
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-muted"><span id="account">{blockchain.account}</span></small>
          </li>
        </ul>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
              <h1 className="d-4">Edit this file in App.js!</h1>

              <div className="grid mb-4" >

                {/* Code goes here... */}

              </div>

              <div>

                {/* Code goes here... */}

                <div className="grid mb-4" >

                  {/* Code goes here... */}

                </div>

              </div>

            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
