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
      _id: uuidv4(),
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis delectus? Repellendus dolores temporibus architecto ea aut sapiente, vero, reiciendis veritatis itaque alias in dicta dignissimos nesciunt commodi modi tenetur!',
      status: 'pending',
      createdAT: Date.now(),
    },
    {
      _id: uuidv4(),
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis delectus? Repellendus dolores temporibus architecto ea aut sapiente, vero, reiciendis veritatis itaque alias in dicta dignissimos nesciunt commodi modi tenetur!',
      status: 'in-progress',
      createdAT: Date.now(),
    },
    {
      _id: uuidv4(),
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis delectus? Repellendus dolores temporibus architecto ea aut sapiente, vero, reiciendis veritatis itaque alias in dicta dignissimos nesciunt commodi modi tenetur!',
      status: 'finished',
      createdAT: Date.now(),
    },
  ],
}


interface Props {
  children: React.ReactNode
}

export const EntriesProvider:FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAT: Date.now(),
      status: 'pending'
    };
    dispatch({type: '[Entry] - Add-Entry', payload: newEntry })
  };


  return (
    <EntriesContext.Provider value={{
      ...state,

      // Methods 
      addNewEntry,
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
