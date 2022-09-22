import { useContext } from 'react';
import { FC } from 'react'
import Head from 'next/head'
import Navbar from '../ui/Navbar';
import { Sidebar } from '../ui';
import { Box } from '@mui/material'
import { UIContext } from '../../context/ui';



interface Props {
    title?: string,
    children: React.ReactNode;
};
const Layout:FC<Props> = ({ title = 'OpenJira', children }) => {

  const { sidemenuOpen } = useContext(UIContext);

  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>{ title }</title>
        </Head>
        <Navbar />
        <Sidebar />
        <Box sx={{padding: '10px 20px'}}>
            { children }
        </Box>


    </Box>
  )
}

export default Layout