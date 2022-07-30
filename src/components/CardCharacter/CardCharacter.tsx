import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

interface Data {
  image: any;
  name: String;
  species: String;
  id: string;
}
interface CardProps {
  data: Data;
}
export default function CardComponent(props: CardProps) {
  const { data } = props;
  return (
    <>
    {data? <Card sx={{
      minWidth: 240,
      border: '2px solid #D2E054',
      boxShadow: '0px 14px 39px -12px rgba(0, 0, 0, 1)',
      transition: 'all 0.6s ease',
      cursor: 'pointer',
      backgroundColor: '#0C7C85',
      '&:hover': {
        border: '4px solid #D2E054'
      }
    }}
      key={data?.id}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={data.image}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "rgba(0, 0, 0, 0.54)",
            color: "white",
            padding: "10px"
          }}
        >
          <Typography variant="h6" style={{ fontSize: '1.15rem' }} data-testid="name">{data.name}</Typography>
          <Typography variant="body2" sx={{ display: 'flex' }}>
            <i style={{ fontSize: '2vh', width: '17px', height: '17px', borderRadius: "100%", marginRight: '.3rem', marginTop: "2px", backgroundColor: data?.species === 'Alien' ? '#DC2626' : data?.species === 'Human' ? '#65A30D' : '' }}
              className={`fas fa-circle iconClass`}
            />
            {data.species}</Typography>
        </Box>
      </Box>
    </Card>:<>Loading...</>}
    </>
   
  );
}
