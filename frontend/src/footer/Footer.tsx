import { Grid2, IconButton, Stack, Typography } from "@mui/material";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";

const Footer = () => {
  return (
    <Grid2
      container
      paddingY={6}
      paddingX={15}
      alignItems="center"
      color="white"
      bgcolor="black"
    >
      <Grid2 size={3}>
        <Stack direction="row" alignItems="center">
          <Typography variant="h4" fontFamily="Berkshire Swash">
            bookNow
          </Typography>
          <IconButton>
            <SwipeLeftIcon sx={{ fontSize: "50px", color: "#acd145" }} />
          </IconButton>
        </Stack>
        <Typography variant="h6" fontFamily="Mulish">
          Copy rights @2024
        </Typography>
      </Grid2>
      <Grid2 size={9}>
        <Grid2 container padding={2}>
          <Grid2 size={3}>
            <Typography
              variant="h5"
              marginBottom={3}
              color="#aae055"
              fontFamily="Mulish"
            >
              {" "}
              Stays
            </Typography>
            <Stack direction="column" spacing={2}>
              <Typography fontSize="16px" fontFamily="Mulish">
                Hotels
              </Typography>
              <Typography fontSize="16px" fontFamily="Mulish">
                Resorts
              </Typography>
              <Typography fontSize="16px" fontFamily="Mulish">
                Villas
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Typography
              variant="h5"
              marginBottom={3}
              color="#aae055"
              fontFamily="Mulish"
            >
              Services
            </Typography>
            <Stack direction="column" spacing={2}>
              <Typography fontSize="16px" fontFamily="Mulish">
                Holiday Stays
              </Typography>
              <Typography fontSize="16px" fontFamily="Mulish">
                Conferences
              </Typography>
              <Typography fontSize="16px" fontFamily="Mulish">
                Conventions
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Typography
              variant="h5"
              marginBottom={3}
              color="#aae055"
              fontFamily="Mulish"
            >
              {" "}
              Policy
            </Typography>
            <Stack direction="column" spacing={2}>
              <Typography fontSize="16px" fontFamily="Mulish">
                Terms & Conditions
              </Typography>
              <Typography fontSize="16px" fontFamily="Mulish">
                Privacy Policy
              </Typography>
              <Typography fontSize="16px" fontFamily="Mulish">
                Cookies
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Typography
              variant="h5"
              marginBottom={3}
              color="#aae055"
              fontFamily="Mulish"
            >
              {" "}
              Contact Us
            </Typography>
            <Stack direction="column" spacing={2}>
              <Typography fontSize="16px" fontFamily="Mulish">
                Frequently Asked Questions
              </Typography>
              <Typography fontSize="16px" fontFamily="Mulish">
                Customer Support
              </Typography>
              <Typography fontSize="16px" fontFamily="Mulish">
                Contact
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
export default Footer;
