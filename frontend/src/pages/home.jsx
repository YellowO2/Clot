import React, { useState } from "react";
import DisplayCard from "../components/display_card";
import SearchBar from "../components/search_bar";
import { Container, Grid, Divider } from "@mui/material";
import Hero from "../components/hero";

// Mock data
const mockPostDataList = [
  {
    id: 1,
    title: "Cleanup",
    description: "Join us for a cleanup event!",
    image: "https://via.placeholder.com/150",
    upvotes: 100,
    createdOn: "2024-05-01",
  },
  {
    id: 2,
    title: "Clot Restoration",
    description: "Help!!!",
    image: "https://via.placeholder.com/150",
    upvotes: 10,
    createdOn: "2024-05-02",
  },
  {
    id: 69,
    title: "Red Clot Restoration",
    description: "Help us restoring the local clot!",
    image: "https://via.placeholder.com/150",
    upvotes: 69,
    createdOn: "2024-05-03",
  },
  {
    id: "White_Clot_id",
    title: "White Clot Restoration",
    description: "Help us restoring the local !",
    image: "https://via.placeholder.com/150",
    upvotes: 11,
    createdOn: "2024-05-04",
  },
  {
    id: "rithwik",
    title: "Haemoglobin Restoration",
    description: "Help us restoring !",
    image: "https://via.placeholder.com/150",
    upvotes: 0,
    createdOn: "2024-05-05",
  },
];

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

  const filteredAndSortedPosts = mockPostDataList
    .filter((post) => {
      const matchesSearchTerm =
        post.title.toLowerCase().includes(searchParams.searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchParams.searchTerm.toLowerCase());

      const matchesFromDate = !searchParams.fromDate || new Date(post.createdOn) >= new Date(searchParams.fromDate);
      const matchesToDate = !searchParams.toDate || new Date(post.createdOn) <= new Date(searchParams.toDate);

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
      <Hero />
      <Divider />

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
