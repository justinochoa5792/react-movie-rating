import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Form, Grid } from "semantic-ui-react";
import { rateMovie, rateTvShow } from "./Mutation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ColumnDisplay = (props) => {
  const { data, display } = props;
  const [rating, setRating] = useState(0);

  const { mutate: rateMovieMutation } = useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: (id) => rateMovie(id, rating),
    onSuccess: () => {
      toast.success("Sucessfully Rated!");
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  const { mutate: rateTvShowMutation } = useMutation({
    mutationKey: ["rateTvShow"],
    mutationFn: (id) => rateTvShow(id, rating),
    onSuccess: () => {
      toast.success("Sucessfully Rated!");
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });
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
                  style={{ height: "820px" }}
                />
              </Link>
              <Form style={{ marginTop: 10 }}>
                <Form.Group inline>
                  <Form.Field>
                    <Form.Input
                      type="number"
                      min="0"
                      max="10"
                      step="0.5"
                      onChange={(e) => setRating(Number(e.target.value))}
                      action={{
                        color: "violet",
                        labelPosition: "right",
                        icon: "star",
                        content: "Rate",
                        onClick: () => {
                          return display === "Movies"
                            ? rateMovieMutation(element.id)
                            : rateTvShowMutation(element.id);
                        },
                      }}
                    />
                  </Form.Field>
                </Form.Group>
              </Form>
            </Card.Group>
          </Grid.Column>
        );
      })}
    </Grid>
  );
};
