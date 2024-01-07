import { useRef, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Support from "./components/Support";
import NavBarMenu from "./components/NavBarMenu";


function App() {
  const [openMenuBar, setOpenMenuBar] = useState(false);

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const suportRef = useRef(null);

  const scrollToRef = (ref) => {
    setOpenMenuBar(false);
    if (!ref) return
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  console.log(suportRef);

  return (
    <div>
      <div style={{ backgroundColor: '#6FB3D2', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <NavBarMenu
          open={openMenuBar}
          scrollToRef={scrollToRef}
          refs={{ headerRef, aboutRef, suportRef }}
        />

        <Header
          setOpen={setOpenMenuBar}
          open={openMenuBar}
          headerRef={headerRef}
          refs={{ headerRef, aboutRef, suportRef }}
          scrollToRef={scrollToRef}
        />

        <About
          aboutRef={aboutRef}
        />
        <Support
          suportRef={suportRef}
        />
        <div ref={suportRef}>

        </div>
      </div>

    </div>
  );
}

export default App;
