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
    quaternary: "#00fac2"
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
        <Slide bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Micro Frontends
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" fit bold>
            Matheus Lima
          </Text>
        </Slide>
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
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
