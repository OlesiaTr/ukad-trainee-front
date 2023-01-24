// Core
import { useState, useEffect } from 'react';

// API
import { fetchBreeds } from './../services/theCatApi';

// Components
import { Loader } from 'components/Loader';
import { CardsList } from 'components/CardsList';

const Home = () => {
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
    <main style={{ flex: '1 1 auto' }}>
      {loading && <Loader />}

      {cats && <CardsList data={cats} />}
    </main>
  );
};

export default Home;
