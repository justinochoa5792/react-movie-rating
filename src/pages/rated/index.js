import React, { useState } from "react";
import { Container, Header, Menu, Segment } from "semantic-ui-react";

const Rated = () => {
  const [activeTabs, setActiveTabs] = useState("Movies");
  return (
    <Container style={{ marginTop: 80 }}>
      <Menu>
        <Menu.Item
          name="Movies"
          active={activeTabs === "Movies"}
          onClick={() => setActiveTabs("Movies")}
        />
        <Menu.Item
          name="Tv Shows"
          active={activeTabs === "Tv Shows"}
          onClick={() => setActiveTabs("Tv Shows")}
        />
      </Menu>
      <Segment>
        {activeTabs === "Movies" ? (
          <div>
            <Header as={"h2"}>Rated Movies</Header>
          </div>
        ) : (
          <div>
            <Header as={"h2"}>Rated Tv Show</Header>
          </div>
        )}
      </Segment>
    </Container>
  );
};

export default Rated;
