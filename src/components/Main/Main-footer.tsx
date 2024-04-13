import { Box, Button, Grid, TextField } from '@mui/material'
import { useState } from 'react';
import ModalForm from '../Modal/Modal'; // Проверьте, правильно ли импортирован компонент ModalForm
import styles from './Main-footer.module.scss';

export default function MainFooter() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: ''
    });
    const [submitClicked, setSubmitClicked] = useState(false);

    const handleOpen = () => {
        // Проверка на заполненность всех полей перед открытием модального окна
        const isFormValid = Object.values(formData).every(value => value.trim() !== '');
        if (isFormValid) {
            setOpen(true);
        } else {
            // Если форма не заполнена, установите флаг submitClicked, чтобы показать ошибки
            setSubmitClicked(true);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <Box className={styles.bg}>
            <h4 className='font-bold text-center text-3xl mt-[3rem]'>Заявка на диагностику</h4>
            <p className='text-center mt-[4rem] mb-[4rem]'>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные результаты в кратчайшие сроки</p>

            <Grid container spacing={4} justifyContent={'center'}>
                <Grid item>
                    <TextField
                        label="Фамилия"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={submitClicked && formData.lastName.trim() === ''}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Имя"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={submitClicked && formData.firstName.trim() === ''}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Отчество"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        error={submitClicked && formData.middleName.trim() === ''}
                    />
                </Grid>
            </Grid>

            <Box className="text-center mt-[2rem]">
                <Button variant='contained' onClick={handleOpen}>Отправить</Button>
            </Box>
            {open && <ModalForm open={open} setOpen={setOpen} />}
        </Box>
    )
}
