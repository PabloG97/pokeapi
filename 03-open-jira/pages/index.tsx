import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import Layout from '../components/layouts/Layout';
import { EntryList } from '../components/ui';
import NewEntry from '../components/ui/NewEntry';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home | OpenJira'>
      <Typography variant='h1' color=''>
        <Grid container spacing={ 2 }>
          <Grid item xs={12} sm={4} >
            <Card sx={{ height: '80vh' }}>
              <CardHeader title='Pendientes' />
              <NewEntry/>
              <EntryList status='pending'/>
            </Card>

          </Grid>
          <Grid item xs={12} sm={4} >
            <Card sx={{ height: '80vh' }}>
              <CardHeader title='En Progreso' />
              <EntryList status='in-progress'/>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card sx={{ height: '80vh' }}>
              <CardHeader title='Completados' />
              <EntryList status='finished'/>
            </Card>
          </Grid>
        </Grid>
      </Typography>
    </Layout>
  );
};

export default HomePage;
