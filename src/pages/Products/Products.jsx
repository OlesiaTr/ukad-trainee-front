// Core
import { useState, useEffect } from 'react';

// API
import { fetchBreeds } from '../../services/theDogApi';

// Components
import { Loader } from 'components/Loader';
import { CardsList } from 'components/CardsList';
import { PageTitle } from 'components/PageTitle';

// Styles
import { Container } from './Products.styled';

const Products = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDogs = async () => {
      try {
        setLoading(true);
        const data = await fetchBreeds();
        setDogs(data);
        setLoading(false);
      } catch (error) {
        throw new Error('Something went wrong, oops', error.message);
      }
    };

    getDogs();
  }, []);

  if (loading) return <Loader />;

  return (
    <Container>
      <PageTitle text={'Dogs Showroom (aka Product Page)'} />

      {dogs.length > 0 && <CardsList data={dogs} />}
    </Container>
  );
};

export default Products;
