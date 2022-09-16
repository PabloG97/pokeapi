import { FC } from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import Navbar from '../ui/Navbar';
import { Sidebar } from '../ui';


interface Props {
    title?: string,
    children: React.ReactNode;
};
const Layout:FC<Props> = ({ title = 'OpenJira', children }) => {
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