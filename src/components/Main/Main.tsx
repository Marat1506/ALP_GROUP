import { Box, Button, useMediaQuery } from "@mui/material";
import styles from './Main.module.scss'
import kapibara from '../../assets/kapibara-2.png'
import Galery from "./Galery";
import MainFooter from "./Main-footer";

export default function Main() {

    const isMobile = useMediaQuery('(max-width: 568px)')
    return (
        <Box >
            <p className={styles.textWelcome}>Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!</p>

            <Box className={styles.bg}>
                <Box >
                    <h4 className="pl-[2rem] md:pl-[3rem] lg:pl-[4rem] font-bold text-3xl md:text-4xl ">Лаборатория</h4>
                    <p className="text-left pl-[2rem] md:pl-[3rem] lg:pl-[4rem] text-xl md:text-2xl">
                        Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными капибарами-лаборантами. Мы специализируемся
                        на анализе биоматериалов, микробиологических исследованиях, генетической диагностике и многом другом.
                    </p>
                    <p className="mt-[1rem] text-left pl-[2rem] md:pl-[3rem] lg:pl-[4rem] text-xl md:text-2xl">
                        Мы используем современное оборудование и методики и гарантируем точность и надежность результатов.
                    </p>

                    <Box className="ml-[2rem] md:ml-[3rem] lg:ml-[4rem]">
                        <Button variant="contained" >Оставить заявку</Button>
                    </Box>

                </Box>
                
                <img src={kapibara} />

            </Box>

            <Galery />
            <MainFooter />
        </Box>
    )
}
