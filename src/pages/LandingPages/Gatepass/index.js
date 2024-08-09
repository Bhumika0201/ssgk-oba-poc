import React, { useState } from 'react';
import { TextField,Box, Button, Grid, Typography ,CardContent, Card} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { string } from 'prop-types';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from "routes";
import MKBox from 'components/MKBox';

function GatePass() {
  // State variables for form fields
  const [name, setName] = useState('John Doe');
  const [designation, setDesignation] = useState('Doctor');
  const [passoutYear, setPassoutYear] = useState('2000');
  const [location, setLocation] = useState('Kanpur');
  const [selectedDate, setSelectedDate] = useState(null);

  // State variable to track whether the pass should be displayed
  const [showPass, setShowPass] = useState(false);

  // Handle the button click to generate the pass
  const handleGeneratePass = () => {
    setShowPass(true); // Show the pass when the button is clicked
  };
  const Pass = ({ name, designation, passoutYear, location, selectedDate }) => {
    return (
      <Card sx={{ marginTop: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Pass Details
          </Typography>
          <Typography variant="body1">
            <strong>Name:</strong> {name}
          </Typography>
          <Typography variant="body1">
            <strong>Designation:</strong> {designation}
          </Typography>
          <Typography variant="body1">
            <strong>Passout Year:</strong> {passoutYear}
          </Typography>
          <Typography variant="body1">
            <strong>Location:</strong> {location}
          </Typography>
          <Typography variant="body1">
            <strong>Date:</strong> {selectedDate}
          </Typography>
        </CardContent>
      </Card>
    );
  };
// Typechecking props for the BackgroundBlogCard
Pass.propTypes = {
    name: string.isRequired,
    designation:string.isRequired,
    passoutYear:string.isRequired,
    location:string.isRequired,
    selectedDate: string.isRequired,

    }; return (
      <>
         <DefaultNavbar routes={routes} grey dark />
         <MKBox bgColor="white" >
      <Box sx={{ padding:13, maxWidth: 600, margin: 'auto',backgroundColor:'#fffff0'}} >

      <Typography variant="h4" gutterBottom style={{marginTop:'100px'}}>
        Generate Your Pass
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={20}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Passout Year"
            value={passoutYear}
            onChange={(e) => setPassoutYear(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
                                color="primary"
                                style={{color:'#fff'}}
            fullWidth
            onClick={handleGeneratePass}
          >
            Generate Pass
          </Button>
        </Grid>
      </Grid>

      {/* Render the Pass component if the pass has been generated */}
      {showPass && selectedDate && (
        <Pass
          name={name}
          designation={designation}
          passoutYear={passoutYear}
          location={location}
          selectedDate={selectedDate.format('DD-MM-YYYY')}
        />
      )}
                </Box>
    </MKBox>        </>
  );
}

export default GatePass;


