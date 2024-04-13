import { Box, Button, useMediaQuery } from "@mui/material";
import styles from './Main.module.scss'
import kapibara from '../../assets/kapibara-2.png'
import Galery from "./Galery";
import MainFooter from "./Main-footer";
import MainMobile from "./Mobile/MainMobile";

import {  useRef } from "react";
import Header from "../Header/Header";


export default function Main() {
    const isMobile = useMediaQuery('(max-width: 868px)')

    const footerRef = useRef(null);
    const galeryRef = useRef(null);
    const laboratoryRef = useRef(null);

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToGalery = () => {
        if (galeryRef.current) {
            galeryRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToMessage = () => {
        if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToLaboratory = () => {
        if (laboratoryRef.current) {
            laboratoryRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    

    return (
        <Box >
            <Header scrollToGalery={scrollToGalery} scrollToMessage={scrollToMessage} scrollToLaboratory={scrollToLaboratory}/>

            {isMobile ? <MainMobile /> :
                <Box>
                    <Box>
                        <p className={styles.textWelcome}>Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!</p>

                        <Box className={styles.bg}>
                            <Box >
                                <h4 className="pl-[2rem] md:pl-[3rem] lg:pl-[4rem] font-bold text-3xl md:text-4xl " ref={laboratoryRef}>Лаборатория</h4>
                                <p className="text-left pl-[2rem] md:pl-[3rem] lg:pl-[4rem] text-xl md:text-2xl" >
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

                            <img src={kapibara} />

                        </Box>
                    </Box>
                    <Box ref={galeryRef}>
                        <Galery />
                    </Box>


                    <Box ref={footerRef}>
                        <MainFooter />
                    </Box>
                </Box>


            }


        </Box>
    )
}
