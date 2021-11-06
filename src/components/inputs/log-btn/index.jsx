import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SearchLog from '../../search-log';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function LogButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{ '& button': { m: 1 } }}>


            <Button variant="outlined" size="medium" onClick={handleOpen}>
                Search log
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <SearchLog closeModal={handleClose}></SearchLog>
                </Box>
            </Modal>

        </Box>
    );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function TextInput(props) {
//     return (
//         <Box
//             component="form"
//             sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//             <TextField id="filled-basic" label="Filled" variant="filled" /> */}
//             <TextField id="standard-basic" color='primary' label={props.entity} variant="standard" />
//         </Box>
//     );
// }