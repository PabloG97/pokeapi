import { ChangeEvent, useState, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from "../../context/entries";

const NewEntry = () => {

    const [isAddIng, setIsAddIng] = useState(false);

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const { addNewEntry } = useContext(EntriesContext);

    const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    };

    const onSave = () => {
        if( inputValue.length === 0 ) return;

        addNewEntry(inputValue);

        setIsAddIng(false);
        setTouched(false);
        setInputValue('');

    };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
        {
        isAddIng ? (
            <>
                <TextField 
                    fullWidth
                    sx={{marginTop: 2, marginBottom: 1}}
                    placeholder='Nueva entrada'
                    autoFocus
                    multiline 
                    label='nueva entrada'
                    helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor' }
                    error={inputValue.length <= 0 && touched}
                    value={ inputValue }
                    onChange={ onTextFieldChange }
                    onBlur={() => setTouched( true )}
                />
                <Box display='flex' justifyContent='space-between' >
                    <Button variant='text' onClick={()=> setIsAddIng(false)}>
                        Cancelar
                    </Button>
                    <Button
                        variant='outlined'
                        color='secondary'
                        endIcon={ <SaveOutlinedIcon/> }
                        onClick={onSave}
                        >
                        Guardar
                    </Button>
                </Box>    
            </>
        ) : (
                <Button
                    startIcon={ <AddCircleOutlineOutlinedIcon/> }
                    fullWidth
                    variant='outlined'
                    onClick={()=> setIsAddIng( true )}
                >
                    Agregar tarea
                </Button>

        )
        }
    </Box>
  )
}

export default NewEntry;