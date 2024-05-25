import React, { useState } from "react";
import DisplayCard from "../components/display_card";
import SearchBar from "../components/search_bar";
import { Container, Grid, Divider } from "@mui/material";
import Hero from "../components/hero";
import { mockUsers, mockEvents } from "../mock_data";

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    searchTerm: "",
    fromDate: "",
    toDate: "",
  });

  const [sortBy, setSortBy] = useState("recent");

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const filteredAndSortedPosts = mockEvents
    .filter((post) => {
      const matchesSearchTerm =
        post.title
          .toLowerCase()
          .includes(searchParams.searchTerm.toLowerCase()) ||
        post.description
          .toLowerCase()
          .includes(searchParams.searchTerm.toLowerCase());

      const matchesFromDate =
        !searchParams.fromDate ||
        new Date(post.createdOn) >= new Date(searchParams.fromDate);
      const matchesToDate =
        !searchParams.toDate ||
        new Date(post.createdOn) <= new Date(searchParams.toDate);

      return matchesSearchTerm && matchesFromDate && matchesToDate;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "upvotes":
          return b.upvotes - a.upvotes;
        case "recent":
        default:
          return new Date(b.createdOn) - new Date(a.createdOn);
      }
    });

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        onSortChange={handleSortChange}
        sortBy={sortBy}
      />

      <Container sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {filteredAndSortedPosts.map((postData) => (
            <Grid key={postData.id} item xs={6} md={4}>
              <DisplayCard postData={postData} />
              
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
