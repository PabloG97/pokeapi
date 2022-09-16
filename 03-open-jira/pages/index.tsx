import type { NextPage } from 'next';
import { Typography } from '@mui/material'
import Layout from '../components/layouts/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout title='OpenJira'>
      <Typography variant='h1' color=''>
        Hola mundo
      </Typography>
    </Layout>
  );
};

export default HomePage;
