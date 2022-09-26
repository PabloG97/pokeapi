import { FC, useContext, useMemo } from 'react'
import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from '../../interfaces';
import { EntriesContext } from '../../context/entries';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

  const { entries } = useContext(EntriesContext);
  

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [ status, entries ]);
  

  return (
    <div>
        <Paper sx={{ height: 'cacl(100vh - 150px', overflow: 'scroll', background: 'trasparent', padding: '1px 5px' }}>

            {/* TODO: cambiará dependiendo si estoy haciendo drag o no  */}
            <List sx={{ opacity: 1, }}>
              {
                entriesByStatus.map( entry => (
                  <EntryCard key={entry._id} entry={entry}/>
                ))
              }
            </List>
        </Paper>    
    </div>
  );
};