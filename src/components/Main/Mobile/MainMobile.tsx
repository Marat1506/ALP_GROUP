import { Box, Button } from "@mui/material";
import styles from './MainMobile.module.scss'
import kapibara from '../../../assets/kapibara-2.png'
import { useRef } from "react";
import GaleryMobile from "./GaleryMobile";
import MainFooter from "../Main-footer";

export default function MainMobile() {

    const footerRef = useRef(null);
    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Box>

            <Box>
                <Box>
                    <p className={styles.textWelcome}>Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!</p>
                </Box>

                <Box className={styles.bg}>
                    <Box className="flex flex-col gap-3" >
                        <h4 className="pl-[2rem] md:pl-[3rem] lg:pl-[4rem] font-bold text-3xl md:text-4xl ">Лаборатория</h4>
                        <img src={kapibara} />
                        <p className="text-left pl-[2rem] md:pl-[3rem] lg:pl-[4rem] text-xl md:text-2xl">
                            Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными капибарами-лаборантами. Мы специализируемся
                            на анализе биоматериалов, микробиологических исследованиях, генетической диагностике и многом другом.
                        </p>
                        <p className="mt-[1rem] text-left pl-[2rem] md:pl-[3rem] lg:pl-[4rem] text-xl md:text-2xl">
                            Мы используем современное оборудование и методики и гарантируем точность и надежность результатов.
                        </p>

                        <Box className="ml-[2rem] md:ml-[3rem] lg:ml-[4rem]">
                            <Button variant="contained" onClick={scrollToFooter}>Оставить заявку</Button>
                        </Box>

                    </Box>



                </Box>


            </Box>
            <GaleryMobile />
            <Box ref={footerRef}>
                <MainFooter />
            </Box>
        </Box>


    )
}
