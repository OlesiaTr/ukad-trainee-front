// Core
import { useState, useEffect } from 'react';

// API
import { fetchBreeds } from '../../services/theDogApi';

// Components
import { Loader } from 'components/Loader';
import { Slider } from 'components/Slider/Slider';

// Styles
import { Main, PageTitle } from './Home.styled';

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

  return (
    <Main>
      {loading && <Loader />}

      {!loading && <PageTitle>Home Page</PageTitle>}

      {dogs && !loading && <Slider data={dogs} />}
    </Main>
  );
};

export default Home;
