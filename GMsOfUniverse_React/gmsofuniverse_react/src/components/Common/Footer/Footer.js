import React              from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="row">
        <div className="col-md-6">
          <p className="text-center text-md-left">Chat Conteur 2020</p>
        </div>

        <div className="col-md-6">
          <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
            <li className="nav-item">
              <a className="nav-link" href="# ">Contact us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# ">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# ">Ideas Box</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
