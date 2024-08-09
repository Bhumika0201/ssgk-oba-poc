/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";


// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/school.jpg";
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Search } from "@mui/icons-material";

export default function FindAlumini() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display:'flex',
            placeItems: "center",
          }}
              >
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 ,width:'100%'}}>

                      <TextField

                  style={{width:"50%",backgroundColor:'white',borderRadius:5}}
  placeholder="Search your alumini..."
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton><Search/>
        </IconButton>
      </InputAdornment>
    ),
  }}   />

                  </div>

              </MKBox>
              <PeopleCards/>
      </MKBox>
    </>
  );
}
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const people = [
  {
    id: 1,
        name: 'Anu Malik',
        designation: 'Sqn Ldr',
    yearOfPassing: 2010,
    place: 'India',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Anuj Sharma',
    designation: 'Project Manager',
    yearOfPassing: 2012,
    place: 'San Francisco',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    name: 'Sam Brown',
    designation: 'Major',
    yearOfPassing: 2020,
    place: 'India, Haryana',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

function PeopleCards() {
  return (
    <Grid container spacing={2} justifyContent="center" padding={2}>
      {people.map((person) => (
        <Grid item key={person.id}>
          <Card sx={{ width: 250, display: 'flex', flexDirection: 'column' }}>
            <CardMedia>
              <Avatar
                alt={person.name}
                src={person.profileImage}
                sx={{ width: 80, height: 80, mx: 'auto', mt: 2 }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {person.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {person.designation}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {person.place}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Year of Passing: {person.yearOfPassing}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

