import React, { useState } from "react";
import { Container, Header, Loader, Menu, Segment } from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";
import { fetchRateMovies, fetchRateTvShows } from "./Query";
import { ColumnDisplay } from "../home/Column-Display";
import { Navigate } from "react-router-dom";

const Rated = () => {
  const [activeTabs, setActiveTabs] = useState("Movies");

  const { data: ratedMovies, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: fetchRateMovies,
  });
  const { data: ratedTvShows, isLoading: isLoadingTvshows } = useQuery({
    queryKey: ["ratedTv"],
    queryFn: fetchRateTvShows,
  });

  if (isLoadingMovies || isLoadingTvshows) {
    return <Loader active />;
  }

  if (localStorage.getItem("guest_session_id") == null) {
    return <Navigate to={"/auth"} />;
  }

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
            <ColumnDisplay data={ratedMovies.results} />
          </div>
        ) : (
          <div>
            <Header as={"h2"}>Rated Tv Shows</Header>
            <ColumnDisplay data={ratedTvShows.results} />
          </div>
        )}
      </Segment>
    </Container>
  );
};

export default Rated;
