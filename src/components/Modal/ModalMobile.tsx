import { Box, Modal, Typography } from "@mui/material";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from "react";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height: '100dvh',
    bgcolor: '#E9EAF9',
    border: '2px solid #000',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#737BE1',
    justifyContent: 'center',
    textAlign: 'center',
    boxShadow: 24,
    p: 4,
};
export default function ModalMobileForm({ open, setOpen }) {

    const handleClose = () => setOpen(false);


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CheckCircleOutlineIcon fontSize="large"/>
                    <Box>
                        <Typography id="modal-modal-title" variant="h5" component="h2">
                            Спасибо за предоставленную информацию,
                        </Typography>
                        <Typography id="modal-modal-description" variant="h5">
                            мы свяжемся с вами в ближайшее время.
                        </Typography>
                    </Box>

                </Box>
            </Modal>
        </div>
    );
}
