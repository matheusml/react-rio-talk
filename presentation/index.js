// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  monolith: require("../assets/monolith.png"),
  micro: require("../assets/micro.png")
};

const theme = createTheme(
  {
    primary: "#2a2629",
    secondary: "white",
    tertiary: "#fb8292",
    quaternary: "#6d7b73"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            O que buscamos em um projeto de Software?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="20px" size={4} textColor="tertiary">
            Escalabilidade
          </Heading>
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Performance
          </Heading>
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Evolução
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Escalabilidade
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Performance
          </Heading>
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Evolução
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Escalabilidade
          </Heading>
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Performance
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Evolução
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            No Front-End, nunca tivemos os três juntos
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="20px" size={4} textColor="tertiary">
            Escalabilidade
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Performance
          </Heading>
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Evolução
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="20px" size={4} textColor="tertiary">
            Escalabilidade
          </Heading>
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Performance
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Evolução
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Escalabilidade
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Performance
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Evolução
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            Mas isso está próximo de mudar
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Micro Frontends
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" fit bold>
            Matheus Lima
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.monolith} />
          <Text
            margin="50px"
            style={{ fontSize: "24px", fontStyle: "italic" }}
            textColor="primary"
          >
            Fonte: https://micro-frontends.org/
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            O Back-End evoluiu, e saiu do monolito
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            Mas o Front-End não
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Problemas:
          </Heading>
          <List>
            <ListItem margin="20px">Dificuldade de manutenção</ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Impossível fazer <i>deploys</i> individuais
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Apenas um <i>framework</i>
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Código legado
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Problemas:
          </Heading>
          <List>
            <ListItem margin="20px">Dificuldade de manutenção</ListItem>
            <ListItem margin="20px">
              Impossível fazer <i>deploys</i> individuais
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Apenas um <i>framework</i>
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Código legado
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Problemas:
          </Heading>
          <List>
            <ListItem margin="20px">Dificuldade de manutenção</ListItem>
            <ListItem margin="20px">
              Impossível fazer <i>deploys</i> individuais
            </ListItem>
            <ListItem margin="20px">
              Apenas um <i>framework</i>
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Código legado
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Problemas:
          </Heading>
          <List>
            <ListItem margin="20px">Dificuldade de manutenção</ListItem>
            <ListItem margin="20px">
              Impossível fazer <i>deploys</i> individuais
            </ListItem>
            <ListItem margin="20px">
              Apenas um <i>framework</i>
            </ListItem>
            <ListItem margin="20px">Código legado</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.micro} />
          <Text
            margin="50px"
            style={{ fontSize: "24px", fontStyle: "italic" }}
            textColor="primary"
          >
            Fonte: https://micro-frontends.org/
          </Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Soluções:
          </Heading>
          <List>
            <ListItem margin="20px">Facilidade de manutenção</ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              <i>Deploys</i> individuais
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Quantos <i>frameworks</i> quiser
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Diminuição do código legado
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Soluções:
          </Heading>
          <List>
            <ListItem margin="20px">Facilidade de manutenção</ListItem>
            <ListItem margin="20px">
              <i>Deploys</i> individuais
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Quantos <i>frameworks</i> quiser
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Diminuição do código legado
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Soluções:
          </Heading>
          <List>
            <ListItem margin="20px">Facilidade de manutenção</ListItem>
            <ListItem margin="20px">
              <i>Deploys</i> individuais
            </ListItem>
            <ListItem margin="20px">
              Quantos <i>frameworks</i> quiser
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Diminuição do código legado
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Soluções:
          </Heading>
          <List>
            <ListItem margin="20px">Facilidade de manutenção</ListItem>
            <ListItem margin="20px">
              <i>Deploys</i> individuais
            </ListItem>
            <ListItem margin="20px">
              Quantos <i>frameworks</i> quiser
            </ListItem>
            <ListItem margin="20px">Diminuição do código legado</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Text size={1} fit lineHeight={1} textColor="tertiary">
            @matheusml
          </Text>
        </Slide>
      </Deck>
    );
  }
}
