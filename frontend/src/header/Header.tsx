import {
  Avatar,
  Button,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import { useNavigate } from "react-router-dom";
import routes from "../routes/routes";
import { useEffect, useState } from "react";
import RegisterApi from "../api/RegisterApi";
import { RegisterDto } from "../dto/RegisterDto";

const Header = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<RegisterDto>();

  const [user, setUser] = useState<any>(null); // Initialize with null for no user state

  // Check if user is logged in and stored in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser); // Set the user state if found
    }
  }, []);

  const handleClick = () => {
    navigate(routes.LOGIN);
  };
  const handleRegisterClick = () => {
    navigate(routes.REGISTER);
  };

  // const userData = localStorage.getItem("user");

  // const user = userData ? JSON.parse(userData) : null;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (user?.email) {
      const getUser = async () => {
        const response = await RegisterApi.getEmailbyUser(user.email);
        if (response) {
          setData(response);
        }
      };
      getUser();
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center">
        <Typography variant="h4" fontFamily="Berkshire Swash">
          bookNow
        </Typography>
        <IconButton>
          <SwipeLeftIcon sx={{ fontSize: "50px", color: "#acd145" }} />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={4} alignItems="center">
        <Typography fontSize="20px" fontFamily="Mulish">
          Services
        </Typography>
        <Typography fontSize="20px" fontFamily="Mulish">
          About Us
        </Typography>
        <Typography fontSize="20px" fontFamily="Mulish">
          Contact Us
        </Typography>
        {user ? (
          <>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              {" "}
              <Avatar onClick={handleButtonClick}>
                {data?.name.charAt(0)}
              </Avatar>{" "}
              <Typography fontSize="20px" fontFamily="Mulish">
                {data?.name}
              </Typography>
            </Stack>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              sx={{
                background: "#acd145",
                fontFamily: "Mulish",
                fontSize: "16px",
              }}
              onClick={handleClick}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#acd145",
                fontFamily: "Mulish",
                fontSize: "16px",
              }}
              onClick={handleRegisterClick}
            >
              Register
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};
export default Header;
