import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";
// import { EntryCard } from "./";


export const EntryList = () => {
  return (
    <div>
        <Paper sx={{ height: 'cacl(100vh - 150px', overflow: 'scroll', background: 'trasparent', padding: '1px 5px' }}>

            {/* TODO: cambiará dependiendo si estoy haciendo drag o no  */}
            <List sx={{ opacity: 1, }}>
              <EntryCard />
              <EntryCard />
              <EntryCard />
              <EntryCard />
            </List>
        </Paper>    
    </div>
  );
};