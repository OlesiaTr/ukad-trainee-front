// Core
import { useState, useEffect } from 'react';

// API
import { fetchBreeds } from '../../services/theDogApi';

// Components
import { Loader } from 'components/Loader';
import { CardsList } from 'components/CardsList';

// Styles
import { Main, PageTitle } from './Products.styled';

const Products = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCats = async () => {
      try {
        setLoading(true);
        const data = await fetchBreeds();
        setCats(data);
        setLoading(false);
      } catch (error) {
        throw new Error('Something went wrong, oops', error.message);
      }
    };

    getCats();
  }, []);

  return (
    <Main>
      {loading && <Loader />}

      <PageTitle>Product Page</PageTitle>

      {cats && <CardsList data={cats} />}
    </Main>
  );
};

export default Products;
