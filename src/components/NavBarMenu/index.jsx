import { Close } from '@mui/icons-material';
import { ContainerNavBar, LiBox, UlBox } from './styles';


function NavBarMenu({ open, scrollToRef, refs }) {
    return (
        <>
            {
                open && (
                    <ContainerNavBar style={{ right: open ? 0 : -300, transition: '1s' }} isOpen={open}>
                        <UlBox>
                            <LiBox onClick={() => scrollToRef(refs.headerRef)}>
                                HOME
                            </LiBox >
                            <LiBox onClick={() => scrollToRef(refs.aboutRef)}>
                                SOBRE
                            </LiBox >
                            <LiBox onClick={() => scrollToRef(refs.suportRef)}>
                                APOIE
                            </LiBox >
                        </UlBox>
                    </ContainerNavBar>
                )
            }
        </>
    );
}
export default NavBarMenu;
