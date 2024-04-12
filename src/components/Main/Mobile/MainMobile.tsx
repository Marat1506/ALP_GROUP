import { Box } from "@mui/material";
import styles from './MainMobile.module.scss'

export default function MainMobile() {
  return (
    <Box>
        <Box>
        <p className={styles.textWelcome}>Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!</p>
        </Box>
    </Box>
  )
}
