import * as React from "react";
import Card from "@mui/material/Card";
import "./Card.scss";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ title, description, image, imageTitle }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title={imageTitle} />
      <CardContent
        sx={{
          bgColor: "rgba(0, 107, 179, 0.15)",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
