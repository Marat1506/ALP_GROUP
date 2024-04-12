import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './Header.module.scss'
import kapibara from '../../assets/kapibara-1.png'
import { useState } from "react";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
    const [activeButton, setActiveButton] = useState("Лаборатория");
    const isMobile = useMediaQuery('(max-width: 568px)')

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };
    return (
        <Box>
            {isMobile ? <HeaderMobile />:
             <Box>
             <Grid container justifyContent={'space-between'} className={styles.header} alignContent={'center'}>
                 <Box className="flex">
                     <Typography variant="h5">Kapibara
                         <span className="text-blue-400 text-1xl">Lab</span>

                     </Typography>
                     <Typography>Современные методики <br />
                         диагностики</Typography>
                 </Box>
                 <Box>
                     <Button
                         className={`${styles.button} ${activeButton === "Лаборатория" ? styles.active : ""}`}
                         onClick={() => handleButtonClick("Лаборатория")}
                     >
                         Лаборатория
                     </Button>
                     <Button
                         className={`${styles.button} ${activeButton === "Галерея" ? styles.active : ""}`}
                         onClick={() => handleButtonClick("Галерея")}
                     >
                         Галерея
                     </Button>
                     <Button
                         className={`${styles.button} ${activeButton === "Оставить заявку" ? styles.active : ""}`}
                         onClick={() => handleButtonClick("Оставить заявку")}
                     >
                         Оставить заявку
                     </Button>
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
                 <img src={kapibara} />
             </Box>
         </Box>
            }
           
        </Box>


    )
}
