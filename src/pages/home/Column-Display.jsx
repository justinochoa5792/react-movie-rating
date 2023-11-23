import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";

export const ColumnDisplay = (props) => {
  const { data, display } = props;
  return (
    <Grid
      columns={3}
      stackable
      centered
      verticalAlign="top"
      padded="vertically"
    >
      {data.map((element) => {
        return (
          <Grid.Column key={element.id}>
            <Card.Group>
              <Link
                to={`/${display === "Movies" ? "movie" : "tvshow"}/${
                  element.id
                }`}
              >
                <Card
                  fluid
                  image={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
                  header={
                    element.title === undefined ? element.name : element.title
                  }
                  meta={`Release Date: ${element.release_date} | Rating: ${element.vote_average}`}
                  description={element.overview.slice(0, 350) + "..."}
                />
              </Link>
            </Card.Group>
          </Grid.Column>
        );
      })}
    </Grid>
  );
};
