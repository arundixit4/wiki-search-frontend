import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SearchService } from "~/services/search/search.service";
import { SearchResult } from "~/services/search/search.model";
import { SearchCard } from "~/components/SearchCard";
import { LoadingButton } from "@mui/lab";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<SearchResult["query"]["search"]>([]);

  const searchHandler = () => {
    setLoading(true);
    SearchService.search(searchTerm).then((response) => {
      setData(response.data.data.query.search);
      setLoading(false);
    });
  };

  return (
    <div>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 150px", gap: 1 }}>
          <TextField
            id="outlined-basic"
            label="Search (eg. Russia)"
            variant="outlined"
            fullWidth
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
          />
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={searchHandler}
            loading={loading}
            disabled={!searchTerm}
          >
            Search
          </LoadingButton>
        </Box>
        <Typography variant="h4" sx={{ mt: 4 }}>
          Results
        </Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {data.map((item, index) => (
            <SearchCard key={index} data={item} />
          ))}
        </List>
      </Container>
    </div>
  );
}
