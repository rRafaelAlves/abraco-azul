import { ContainerTopBar, LiBox, UlBox } from "./styles";


function TopBarMenu({ scrollToRef, refsTopBar }) {
    console.log(refsTopBar);
    return (
        <ContainerTopBar>
            <UlBox>
                <LiBox onClick={() => scrollToRef(refsTopBar.headerRef)}>
                    HOME
                </LiBox >
                <LiBox onClick={() => scrollToRef(refsTopBar.aboutRef)}>
                    SOBRE
                </LiBox >
                <LiBox onClick={() => scrollToRef(refsTopBar.suportRef)}>
                    APOIE
                </LiBox >
            </UlBox>
        </ContainerTopBar>
    );
}
export default TopBarMenu;
