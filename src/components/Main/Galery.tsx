import { Box, Grid } from "@mui/material";
import galery1 from '../../assets/galery/galery-1.png'
import galery2 from '../../assets/galery/galery-2.png'
import galery3 from '../../assets/galery/galery-3.png'
import galery4 from '../../assets/galery/galery-4.png'
import galery5 from '../../assets/galery/galery-5.png'
import galery6 from '../../assets/galery/galery-6.png'
import galery7 from '../../assets/galery/galery-7.png'
import styles from './Galery.module.scss'

export default function Galery() {
    return (
        <Box className={styles.galery}>
            <h4 className="font-bold text-4xl mt-[50px] mb-[30px]">Галерея</h4>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <img src={galery1} alt="Galery 1"/>
                </Grid>
                <Grid item container xs={6} md={6} spacing={2}>
                    <Grid item xs={12}>
                        <img src={galery2} alt="Galery 2"/>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={galery3} alt="Galery 3"/>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={galery4} alt="Galery 4"/>
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={6} spacing={2}>
                    <Grid item xs={6} md={6}>
                        <img src={galery5} alt="Galery 5"/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <img src={galery6} alt="Galery 6"/>
                    </Grid>
                </Grid>
                <Grid item xs={6} md={6}>
                    <img src={galery7} alt="Galery 7"/>
                </Grid>
            </Grid>
        </Box>
    );
}