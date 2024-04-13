import { Box, Typography } from "@mui/material";
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <Box className={styles.bg}>
      <Typography className={styles.text}>Все права защищены Российской Ассоциацией Капибар</Typography>
      <Typography variant="h4" className={styles.text}>KapibaraLab</Typography>
    </Box>
  )
}
