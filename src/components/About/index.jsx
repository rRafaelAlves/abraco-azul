import { ContainerHeader, ContentAbout, Slug } from "./styles";


function About({ aboutRef }) {
    return (
        <ContainerHeader ref={aboutRef} >
            <Slug>
                Sobre
            </Slug>
            <ContentAbout>
                <h3>Sobre o "Abraço Azul"</h3>

                <p>
                    Bem-vindo ao coração da nossa missão! O "Abraço Azul" é mais do que uma campanha; é um movimento dedicado a criar um mundo onde cada criança no espectro do autismo se sinta compreendida, apoiada e amada.
                </p>

                <h4>Nossa Missão:</h4>
                <p>
                    Buscamos construir pontes de entendimento, espalhar conscientização e promover a inclusão. Acreditamos que cada gesto de empatia é um passo em direção a um futuro mais brilhante e inclusivo para todas as crianças.
                </p>

                <h2>O Que Fazemos:</h2>
                <ul>
                    <li>Conscientização: Espalhamos informações sobre o autismo para promover uma compreensão mais profunda.</li>
                    <li>Apoio: Oferecemos recursos e apoio emocional para famílias e cuidadores.</li>
                    <li>Inclusão: Trabalhamos para criar ambientes mais inclusivos em escolas, comunidades e além.</li>
                </ul>

                <h2>Como Você Pode Ajudar:</h2>
                <p>
                    Seja parte da mudança! Explore nosso <a href="#">site</a>, participe de eventos, compartilhe histórias inspiradoras e, acima de tudo, abrace a causa. Cada ação conta!
                </p>

                <p>
                    Junte-se a nós no <span class="hashtag">#AbraçoAzul</span> e ajude-nos a construir um futuro mais acolhedor e compreensivo para todas as crianças.
                </p>
            </ContentAbout>

        </ContainerHeader>
    );
}
export default About;
