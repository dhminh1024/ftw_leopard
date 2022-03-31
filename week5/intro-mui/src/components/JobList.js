import { Box, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import JobCard from "./JobCard";

const limit = 5;

function JobList({ jobs }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pageCount = Math.ceil(jobs.length / limit);

  return (
    <>
      <Grid container spacing={2}>
        {jobs &&
          jobs
            .slice((page - 1) * limit, page * limit)
            .map((job) => <JobCard key={job.id} job={job} />)}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Box>
    </>
  );
}

export default JobList;
// page = 1 0 - 5
// page = 2 5 - 10
// page = 3 10 - 15
