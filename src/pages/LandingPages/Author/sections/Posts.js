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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/meetup-1.JPG";
import post2 from "assets/images/meetup-2.JPG";
import post3 from "assets/images/meetup-3.JPG";
import post4 from "assets/images/meetup-4.JPG";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check recent meetups
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Kanpur Diaries"
              description="Had an absolutely delightful meeting today in Kanpur! The discussions were engaging, and the company was even better. Truly enjoyed every moment spent with everyone. Looking forward to our next gathering already!"

            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Haldwani Diaries"
              description="Had an absolutely delightful meeting today in Kanpur! The discussions were engaging, and the company was even better. Truly enjoyed every moment spent with everyone. Looking forward to our next gathering already!"

            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Lucknow Diaries"
              description="Had an absolutely delightful meeting today in Kanpur! The discussions were engaging, and the company was even better. Truly enjoyed every moment spent with everyone. Looking forward to our next gathering already!"

            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Check All"
              description="Had an absolutely delightful meeting today in Kanpur! The discussions were engaging, and the company was even better. Truly enjoyed every moment spent with everyone. Looking forward to our next gathering already!"

            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
