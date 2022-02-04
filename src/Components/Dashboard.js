import React, {useEffect} from 'react';
import ProductList from './ProductPage/ProductList';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if(!window.localStorage.getItem("IS_LOGGED_IN"))
      navigate('/')
  })

  return (
      <div>
        <Header />
          <ProductList />
      </div>
  );
}

export default Dashboard;
