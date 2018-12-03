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
  Image,
  Fit,
  Fill
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  monolith: require("../assets/monolith.png"),
  micro: require("../assets/micro.png"),
  youtube1: require("../assets/youtube1.png"),
  youtube2: require("../assets/youtube2.png"),
  youtube3: require("../assets/youtube3.png"),
  youtube4: require("../assets/youtube4.png"),
  youtube5: require("../assets/youtube5.png"),
  social: require("../assets/social.png"),
  carta: require("../assets/carta.gif")
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
      <Deck transition={["fade"]} transitionDuration={750} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            What do we want in a Software Project?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="20px" size={4} textColor="tertiary">
            Scalability
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
            Evolvability
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Scalability
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
            Evolvability
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Scalability
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
            Evolvability
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            In the Front End, we've never had all three together
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="20px" size={4} textColor="tertiary">
            Scalability
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
            Evolvability
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="20px" size={4} textColor="tertiary">
            Scalability
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
            Evolvability
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading
            style={{ opacity: 0.3 }}
            margin="20px"
            size={4}
            textColor="tertiary"
          >
            Scalability
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Performance
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Evolvability
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            But this is about to change
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading caps fit textColor="primary">
            Micro Frontends
          </Heading>
          <Heading margin="10px 0 0" fit textColor="secondary" bold>
            and death of the last monolith
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.social} />
          <Text margin="10px 0 0" fit textColor="primary">
            @matheusml
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.carta} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            First things first
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            Let's talk about Microservices
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Microservices:
          </Heading>
          <List>
            <ListItem margin="20px">Focus on doing one thing well</ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Autonomous
              <List>
                <ListItem margin="20px" style={{ opacity: 0 }}>
                  Maintain contracts
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0 }}>
                  Indendepent availability, delivery and ownership
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0 }}>
                  Handle failures on their own
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0 }}>
                  Able to manage access
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Microservices:
          </Heading>
          <List>
            <ListItem margin="20px">Focus on doing one thing well</ListItem>
            <ListItem margin="20px">
              Autonomous
              <List>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Maintain contracts
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Indendepent availability, delivery and ownership
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Handle failures on their own
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Able to manage access
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Microservices:
          </Heading>
          <List>
            <ListItem margin="20px">Focus on doing one thing well</ListItem>
            <ListItem margin="20px">
              Autonomous
              <List>
                <ListItem margin="20px">Maintain contracts</ListItem>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Indendepent availability, delivery and ownership
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Handle failures on their own
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Able to manage access
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Microservices:
          </Heading>
          <List>
            <ListItem margin="20px">Focus on doing one thing well</ListItem>
            <ListItem margin="20px">
              Autonomous
              <List>
                <ListItem margin="20px">Maintain contracts</ListItem>
                <ListItem margin="20px">
                  Indendepent availability, delivery and ownership
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Handle failures on their own
                </ListItem>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Able to manage access
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Microservices:
          </Heading>
          <List>
            <ListItem margin="20px">Focus on doing one thing well</ListItem>
            <ListItem margin="20px">
              Autonomous
              <List>
                <ListItem margin="20px">Maintain contracts</ListItem>
                <ListItem margin="20px">
                  Indendepent availability, delivery and ownership
                </ListItem>
                <ListItem margin="20px">Handle failures on their own</ListItem>
                <ListItem margin="20px" style={{ opacity: 0.3 }}>
                  Able to manage access
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Microservices:
          </Heading>
          <List>
            <ListItem margin="20px">Focus on doing one thing well</ListItem>
            <ListItem margin="20px">
              Autonomous
              <List>
                <ListItem margin="20px">Maintain contracts</ListItem>
                <ListItem margin="20px">
                  Indendepent availability, delivery and ownership
                </ListItem>
                <ListItem margin="20px">Handle failures on their own</ListItem>
                <ListItem margin="20px">Able to manage access</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.monolith} />
          <Text
            margin="50px"
            style={{ fontSize: "24px", fontStyle: "italic" }}
            textColor="primary"
          >
            Source: https://micro-frontends.org/
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            The Back-End evolved, and left the monolith
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            But the Front End did not
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Issues:
          </Heading>
          <List>
            <ListItem margin="20px">Doesn't scale</ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              No isolate code
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              One framework only
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Legacy code
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Issues:
          </Heading>
          <List>
            <ListItem margin="20px">Doesn't scale</ListItem>
            <ListItem margin="20px">No isolate code</ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              One framework only
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Legacy code
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Issues:
          </Heading>
          <List>
            <ListItem margin="20px">Doesn't scale</ListItem>
            <ListItem margin="20px">No isolate code</ListItem>
            <ListItem margin="20px">One framework only</ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Legacy code
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Issues:
          </Heading>
          <List>
            <ListItem margin="20px">Doesn't scale</ListItem>
            <ListItem margin="20px">No isolate code</ListItem>
            <ListItem margin="20px">One framework only</ListItem>
            <ListItem margin="20px">Legacy code</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.micro} />
          <Text
            margin="20px"
            style={{ fontSize: "24px", fontStyle: "italic" }}
            textColor="primary"
          >
            Source: https://micro-frontends.org/
          </Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Solutions:
          </Heading>
          <List>
            <ListItem margin="20px">Easier to scale</ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Code isolation
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Multiple frameworks
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Less legacy code
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Solutions:
          </Heading>
          <List>
            <ListItem margin="20px">Easier to scale</ListItem>
            <ListItem margin="20px">Code isolation</ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Multiple frameworks
            </ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Less legacy code
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Solutions:
          </Heading>
          <List>
            <ListItem margin="20px">Easier to scale</ListItem>
            <ListItem margin="20px">Code isolation</ListItem>
            <ListItem margin="20px">Multiple frameworks</ListItem>
            <ListItem margin="20px" style={{ opacity: 0.3 }}>
              Less legacy code
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Solutions:
          </Heading>
          <List>
            <ListItem margin="20px">Easier to scale</ListItem>
            <ListItem margin="20px">Code isolation</ListItem>
            <ListItem margin="20px">Multiple frameworks</ListItem>
            <ListItem margin="20px">Less legacy code</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.youtube1} />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.youtube2} />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.youtube3} />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.youtube4} />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.youtube5} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1.4} textColor="secondary">
            Show me the code
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="20px" size={4} textColor="tertiary">
            Scalability
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Performance
          </Heading>
          <Heading margin="20px" size={4} textColor="tertiary">
            Evolvability
          </Heading>
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
