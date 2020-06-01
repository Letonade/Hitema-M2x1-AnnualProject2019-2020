import React              from 'react';

function Footer() {
  return (
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="/#">Back to top</a>
          </p>
            <p>{1 == 0 && "Test"}</p>
            <p>{1 == 0 && "Un message."}</p>
        </div>
      </footer>
  );
}

export default Footer;
