import React from "react";
import { Chip, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function JobCard({ job }) {
  return (
    <Grid item xs={4}>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontSize: 14 }} gutterBottom noWrap>
            {job.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {job.description.length > 70
              ? `${job.description.slice(0, 50)}...`
              : job.description}
          </Typography>
          {job.skills.slice(0, 2).map((skill) => (
            <Chip label={skill} />
          ))}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default JobCard;
