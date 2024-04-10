import { Box, Button, Grid, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './Header.module.scss'
import kapibara from '../../assets/kapibara-1.png'

export default function Header() {
    return (
        <Box>
            <Grid container justifyContent={'space-between'}>
                <Box className="flex">
                    <Typography variant="h5">Kapibara
                        <span className="text-blue-400 text-1xl">Lab</span>

                    </Typography>
                    <Typography>Современные методики
                        диагностики</Typography>
                </Box>
                <Box>
                    <Button>Лаборатория</Button>
                    <Button>Галерея</Button>
                    <Button>Оставить заявку</Button>
                </Box>
                <Box className="flex text-center items-center">
                    <PhoneIcon color="primary" />
                    <Box >
                        <Typography>
                            +7 123 456 7890
                        </Typography>
                        <Typography>
                            Звонок бесплатный
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            <Box className={styles.bg}>
                <Box>
                    <p className="bg-blue-600 text-white text-5xl">Точные результаты</p>
                    <p className="bg-white text-blue-600 text-5xl">Точно в срок</p>
                </Box>
                <img src={kapibara}/>
            </Box>
        </Box>

    )
}
