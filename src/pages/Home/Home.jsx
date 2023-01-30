// Core
import { useState, useEffect } from 'react';

// API
import { fetchBreeds } from '../../services/theDogApi';

// Components
import { Loader } from 'components/Loader';
import { Slider } from 'components/Slider/Slider';
import { PageTitle } from 'components/PageTitle';

// Styles
import { Container } from './Home.styled';

const Home = () => {
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
      <PageTitle text={'Home Page'} />

      {dogs.length > 0 && <Slider data={dogs} />}
    </Container>
  );
};

export default Home;
