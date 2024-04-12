import { Box, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './Header.module.scss'
import kapibara from '../../assets/kapibara-1.png'


export default function HeaderMobile() {
    return (
        <Box>
            <Box className="flex items-center justify-between">
                <Box>
                    <Typography variant="h5">Kapibara
                        <span className="text-blue-400 text-1xl">Lab</span>
                    </Typography>
                    <Typography>Современныу методики диагностики</Typography>
                </Box>
                <PhoneIcon color="primary" />
            </Box>
            <Box className={styles.bgMobile}>
                <img src={kapibara} />


            </Box>
            <Box>
                <p className="bg-blue-600 text-white text-5xl">Точные результаты</p>
                <p className="bg-white text-blue-600 text-5xl">Точно в срок</p>
            </Box>
        </Box>

    )
}
