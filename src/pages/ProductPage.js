import React from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  const history = useHistory();
  const gotoAboutPage = () => {
    history.push('/about');
  };
  if (id === '3') {
    return <Redirect to="/" />;
  }
  return (
    <div>
      Product Page
      {id ? (
        <div>
          Product ID : {id}
          <button onClick={gotoAboutPage}>See about page</button>
        </div>
      ) : (
        <ul>
          <li>
            <Link to="/product/1">Product 1</Link>
          </li>
          <li>
            <Link to="/product/2">Product 2</Link>
          </li>
          <li>
            <Link to="/product/3">Product 3</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
