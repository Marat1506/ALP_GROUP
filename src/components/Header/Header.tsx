import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './Header.module.scss'
import kapibara from '../../assets/kapibara-1.png'

import HeaderMobile from "./HeaderMobile";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { changeActiveButton } from "../../hooks/reducer";

export default function Header({ scrollToGalery, scrollToMessage, scrollToLaboratory }) {
    const dispatch = useAppDispatch()
    const activeButton = useAppSelector(state => state.kapibara.activeButton)
    const isMobile = useMediaQuery('(max-width: 868px)')

    const handleButtonClick = (buttonName: string) => {
        dispatch(changeActiveButton({ active: buttonName }));
    };


    return (
        <Box>
            {isMobile ? <HeaderMobile /> :
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
                                onClick={() => {
                                    handleButtonClick("Лаборатория")
                                    scrollToLaboratory()
                                }}
                            >
                                Лаборатория
                            </Button>
                            <Button
                                className={`${styles.button} ${activeButton === "Галерея" ? styles.active : ""}`}
                                onClick={() => {
                                    handleButtonClick("Галерея")
                                    scrollToGalery()

                                }}
                            >
                                Галерея
                            </Button>
                            <Button
                                className={`${styles.button} ${activeButton === "Оставить заявку" ? styles.active : ""}`}
                                onClick={() => {
                                    handleButtonClick("Оставить заявку")
                                    scrollToMessage()
                                }}
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
                            <p className="bg-blue-500 text-white text-5xl">Точные результаты</p>
                            <p className="bg-white text-blue-500 text-5xl">Точно в срок</p>
                        </Box>
                        <img src={kapibara} />
                    </Box>
                </Box>
            }

        </Box>


    )
}
