import { Box } from '@mui/material'
import galery1 from '../../assets/galery/galery-1.png'
import galery8 from '../../assets/galery/galery-8.png'
import galery3 from '../../assets/galery/galery-3.png'
import galery4 from '../../assets/galery/galery-4.png'
import styles from './GaleryMobile.module.scss'
export default function GaleryMobile() {
  return (
    <Box>
        <h4 className={styles.galery_text}>Галерея</h4>
        <Box className={styles.gallery}>
            <img src={galery1}/>
            <img src={galery8}/>
            <img src={galery3}/>
            <img src={galery4}/>
        </Box>
    </Box>
  )
}
