import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const NewEntry = () => {

    const [isAddIng, setIsAddIng] = useState(false);

    // const [inputValue, setInputValue] = useState('');

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
                    helperText='Ingrese un valor'
                />
                <Box display='flex' justifyContent='space-between' >
                    <Button variant='text' onClick={()=> setIsAddIng(false)}>
                        Cancelar
                    </Button>
                    <Button
                        variant='outlined'
                        color='secondary'
                        endIcon={ <SaveOutlinedIcon/> }
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