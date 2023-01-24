import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const style = {
    modalBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    }

};

const ModalFilter = ({ mod }) => {
    const handleClose = () => mod.setOpen(false);
    return (
        <div>
            <Modal
                open={mod.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style.modalBox}>
                    <FormControl>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Gender
                        </Typography>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Location
                    </Typography>
                    <TextField name='Location' required fullWidth />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Date
                    </Typography>
                    <TextField name='Date' required fullWidth type={'date'} />
                    <Button >Filter</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalFilter