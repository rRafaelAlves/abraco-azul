import React from "react";
import styled from "styled-components";
import { Button, Grid, Typography } from "@mui/material";
import { LocalAtm, Favorite, Business } from "@mui/icons-material";

const SupportContainer = styled.header`
 
  padding: 80px 0;
  width: 98%; 
  @media (max-width: 750px) {
        
      }
`;

const SupportGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 750px) {
       
    }
`;

const SupportCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 12px;
  @media (max-width: 750px) {
       
    }
  
`;

const SupportIcon = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
  color: #007bff;
`;

const SupportButton = styled(Button)`
  margin-top: 50px;
  
`;

function Support({ suportRef }) {


    console.log(suportRef);
    return (
        <SupportContainer ref={suportRef} id="suport">
            <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }} align="center" gutterBottom>
                Apoie
            </Typography>
            <SupportGrid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SupportCard>
                        <SupportIcon>
                            <LocalAtm />
                        </SupportIcon>
                        <Typography variant="h5" gutterBottom>
                            Faça uma Doação
                        </Typography>
                        <Typography>
                            Sua contribuição financeira ajuda-nos a oferecer suporte e
                            recursos essenciais para as crianças com autismo.
                        </Typography>
                        <SupportButton sx={{ width: '180px', marginTop: '20px' }} variant="contained" color="primary">
                            Doar Agora
                        </SupportButton>
                    </SupportCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SupportCard>
                        <SupportIcon>
                            <Favorite />
                        </SupportIcon>
                        <Typography variant="h5" gutterBottom>
                            Seja um Voluntário
                        </Typography>
                        <Typography>
                            Junte-se à nossa equipe de voluntários dedicados e faça a
                            diferença diretamente na vida das crianças.
                        </Typography>
                        <SupportButton variant="contained" color="primary" sx={{ width: '180px', marginTop: '20px' }}>
                            Inscrever-se
                        </SupportButton>
                    </SupportCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SupportCard>
                        <SupportIcon>
                            <Business />
                        </SupportIcon>
                        <Typography variant="h5" gutterBottom>
                            Parcerias Corporativas
                        </Typography>
                        <Typography>
                            Empresas podem colaborar conosco para promover a inclusão,
                            conscientização e criar um impacto positivo na sociedade.
                        </Typography>
                        <SupportButton variant="contained" color="primary" sx={{ width: '180px', marginTop: '20px' }}>
                            Saiba Mais
                        </SupportButton>
                    </SupportCard>
                </Grid>
            </SupportGrid>
        </SupportContainer>
    );
}

export default Support;
