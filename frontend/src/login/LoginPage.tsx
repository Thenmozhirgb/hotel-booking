import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid2,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import GoogleIcon from "@mui/icons-material/Google";
import image from "../assets/Login.webp";
import { useState } from "react";
import { toast } from "react-toastify";
import RegisterApi from "../api/RegisterApi";
import { useNavigate } from "react-router-dom";
import routes from "../routes/routes";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (event: any) => {
    setEmail(event?.target.value);
    setError("");
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event?.target.value);
  };

  const handleSubmit = async () => {
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    }
    if (!password) {
      setPasswordError("Please enter a valid password");
    }
    if (email && password) {
      const data = {
        email: email,
        password: password,
      };
      try {
        const response = await RegisterApi.login(data);
        if (response) {
          setEmail("");
          setPassword("");
          navigate(routes.ROOT);
          localStorage.setItem("user", JSON.stringify(data));
        }
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box bgcolor="#acd145" paddingY={9.5}>
      <Grid2
        container
        width="100%"
        maxWidth={1280}
        margin=" auto"
        padding={4}
        bgcolor="white"
        columnGap={12.5}
        sx={{
          boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: "25px",
        }}
      >
        <Grid2 size={6}>
          <img src={image} alt="vacation" width="100%" height="100%" />
        </Grid2>
        <Grid2 size={5}>
          <Stack direction="column" spacing={5}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h4" fontFamily="Berkshire Swash">
                bookNow
              </Typography>

              <SwipeLeftIcon sx={{ fontSize: "45px", color: "#acd145" }} />
            </Stack>
            <Stack direction="column" spacing={3}>
              <Typography fontWeight={600} fontSize="16px" fontFamily="Mulish">
                Log in or create account with your email
              </Typography>
              <TextField
                value={email}
                onChange={handleEmailChange}
                sx={{ width: "100%", maxWidth: 400 }}
                error={!!error}
              />
              {error && <Typography color="error">{error}</Typography>}
              <Typography fontWeight={600} fontSize="16px" fontFamily="Mulish">
                Password
              </Typography>
              <FormControl
                sx={{ m: 1, width: "100%", maxWidth: 400 }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  error={!!passwordError}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {passwordError && (
                <Typography color="error">{passwordError}</Typography>
              )}
              <Button
                variant="contained"
                sx={{
                  padding: 2,
                  width: "100%",
                  maxWidth: 400,
                  backgroundColor: "#acd145",
                  fontFamily: "Mulish",
                  fontSize: "16px",
                }}
                onClick={handleSubmit}
              >
                Continue
              </Button>

              <Divider
                sx={{
                  padding: 2,
                  width: "100%",
                  maxWidth: 400,
                  fontFamily: "Mulish",
                  fontSize: "20px",
                }}
              >
                or continue with
              </Divider>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{
                  padding: 2,
                  width: "100%",
                  maxWidth: 400,
                  color: "#acd145",
                  fontFamily: "Mulish",
                  fontSize: "16px",
                  border: "1px solid #acd145",
                }}
              >
                Google
              </Button>
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default LoginPage;
