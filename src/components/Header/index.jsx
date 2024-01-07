import { ContainerHeader, DivContent, Img, Logo, MenuIconBox, Slug, TextContent } from "./styles";
import CriancaMaosColoridasPhoto from '../../assets/crianca-maos-coloridas.png';
import TopBarMenu from "../TopBarMenu";
import { Menu, Close } from '@mui/icons-material'
import LogoBracoAzul from '../../assets/abraco.png'
import { useEffect, useState } from "react";


function Header({ open, setOpen, headerRef, refs, scrollToRef }) {

    const [colorMenu, setColorMenu] = useState('white');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(!isMobile){
                if (window.scrollY > 890 && window.scrollY < 2200) {
                    setColorMenu('#6FB3D2');
                } else {
                    setColorMenu('white');
                }
            }else{
                if (window.scrollY > 720 && window.scrollY < 2920) {
                    setColorMenu('#6FB3D2');
                } else {
                    setColorMenu('white');
                }
            }
            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleResize = () => {
            const larguraTela = window.innerWidth;
            setIsMobile(larguraTela <= 768);
        };
        window.addEventListener('resize', handleResize);

        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ContainerHeader ref={headerRef}>
            <MenuIconBox >
                <Logo src={LogoBracoAzul} alt="Logo do abraço azul" />
                {open ? (
                    <Close sx={{
                        color: 'black',
                        cursor: 'pointer',
                        fontSize: '70px',
                        zIndex: 2,
                        position: 'fixed',
                        right: 40
                    }} onClick={() => setOpen(false)} />) : (
                    <Menu sx={{
                        color: colorMenu,
                        cursor: 'pointer',
                        fontSize: '70px',
                        zIndex: 2,
                        position: 'fixed',
                        right: 40,
                    }} onClick={() => setOpen(true)} />
                )}

            </MenuIconBox>
            <TopBarMenu scrollToRef={scrollToRef} refsTopBar={refs}/>
            <Slug>
                Abraço Azul
            </Slug>
            <DivContent>
                <TextContent>
                    Junte-se a nós na jornada da compreensão e apoio ao autismo. Cada gesto faz diferença.
                    Explore e ajude-nos a criar um mundo mais inclusivo.
                </TextContent>
                <Img src={CriancaMaosColoridasPhoto} alt="Criança com as mãos pintadas" />
            </DivContent>

        </ContainerHeader>
    );
}
export default Header;
