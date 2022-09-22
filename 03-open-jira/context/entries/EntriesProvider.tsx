import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
};

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: 
    }
  ],
}


interface Props {
  children: React.ReactNode
}

export const EntriesProvider:FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );

  return (
    <EntriesContext.Provider value={{
      ...state,
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
