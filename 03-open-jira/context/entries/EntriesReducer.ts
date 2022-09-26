import { EntriesState } from './';

type EntriesActionType = 
  | { type: '[Entries] - ActionName'};

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {

  switch (action.type) {
    // case '[Entry] add-Entry' : 
    //   return {
    //     ...state,
    //     entries: [ ...state.entries, action.payload ]
    //   }
      
    //   break;
  
    default:
      return state;
  }
}