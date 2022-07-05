import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

function Item({ personaje }) {
  const { model, image, price, color, id } = personaje;
  return (
    <>
      <Card sx={{ maxWidth: 340 }} style={{ margin: "13px", width: "15%" }}>
        <CardActionArea>
          <CardMedia component="img" height="150" src={image} alt="img" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "#000000ba" }}
            >
              {model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Color: {color}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/item/${id}`} className="buttonItem">
            <Button style={{ color: "#787A91" }}>Ver mas detalles</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
export default Item;
