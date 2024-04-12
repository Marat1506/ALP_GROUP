import { Box, Button, Grid, TextField } from '@mui/material'
import styles from './Main-footer.module.scss'

export default function MainFooter() {
    return (
        <Box className={styles.bg}>
            <h4 className='font-bold text-center text-3xl mt-[3rem]'>Заявка на диагностику</h4>
            <p className='text-center mt-[4rem] mb-[4rem]'>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные результаты в кратчайшие сроки</p>

            <Grid container spacing={4} justifyContent={'center'}>
                <Grid item>
                    <TextField label="Фамилия" />
                </Grid>
                <Grid item>
                    <TextField label="Имя" />
                </Grid>
                <Grid item>
                    <TextField label="Отчество" />
                </Grid>



            </Grid>

            <Box className="text-center mt-[2rem]">
                <Button variant='contained'>Отправить</Button>
            </Box>

        </Box>
    )
}
