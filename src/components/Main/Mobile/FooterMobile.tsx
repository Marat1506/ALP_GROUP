import { Box, Typography } from "@mui/material";
import styles from './FooterMobile.module.scss'

export default function FooterMobile() {
    return (
        <Box className={styles.bg}>
            <Typography variant="h4" className={styles.text}>KapibaraLab</Typography>
            <Typography className={styles.text}>Все права защищены Российской Ассоциацией Капибар</Typography>

        </Box>
    )
}
