import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";
import { FC } from "react";
import { SearchResult } from "~/services/search/search.model";

interface SearchCardProps {
  data: SearchResult["query"]["search"][0];
}

export const SearchCard: FC<SearchCardProps> = (props) => {
  const { data } = props;

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={data.title}
          secondary={
            <React.Fragment>
              <div dangerouslySetInnerHTML={{ __html: data.snippet }}></div>
              <Typography
                component="span"
                variant="caption"
                color="text.primary"
              >
                {moment(data.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
