import { Drawer, Box, Typography, ListItem, List, ListItemText, Divider } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { UIContext } from '../../context/ui';
import { useContext } from 'react';


const menuItem: string[] = ['inbox', 'Starred', 'Send Email', 'Drafts'];
export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext(UIContext);
    
  return (
    <Drawer
        anchor='left'
        open={ sidemenuOpen }
        onClose={ closeSideMenu }
    >
        <Box sx={{ width: 250 }}>
            <Box sx={{padding: '5px 10px'}}>
                <Typography variant='h4'>
                    Menú
                </Typography>
            </Box>

            <List>
                {
                    menuItem.map( (text, index) => (
                        <ListItem button key={text}>
                            { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon/> }
                            <ListItemText primary={ text }/>
                        </ListItem>
                    ))
                }
            </List>

            <Divider/>

            <List>
                {
                    menuItem.map( (text, index) => (
                        <ListItem button key={text}>
                            { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon/> }
                            <ListItemText primary={ text }/>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    </Drawer>
  )
}
