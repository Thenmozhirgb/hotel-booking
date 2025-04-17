import {
  Box,
  Button,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import image from "../assets/work-hiring.jpg";
import { useState } from "react";
import RegisterApi from "../api/RegisterApi";
import { useNavigate } from "react-router-dom";
import routes from "../routes/routes";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (event: any) => {
    setEmail(event?.target.value);
    setError("");
  };
  const handleNameChange = (event: any) => {
    setName(event?.target.value);
    setNameError("");
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event?.target.value);
    setPasswordError("");
  };

  const handleNumberChange = (event: any) => {
    const value = event.target.value;
    const numericValue = value.replace(/\D/g, "");

    // Update the state with the numeric value, but only if it is 10 digits or less
    if (numericValue.length <= 10) {
      setNumber(numericValue);
      setNumberError(
        numericValue.length === 10 ? "" : "Phone number must be 10 digits"
      );
    } else {
      setNumberError("Phone number cannot exceed 10 digits");
    }
  };
  const handleSubmit = async () => {
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    }
    if (!name) {
      setNameError("Please enter a valid name");
    }

    if (!number) {
      setNumberError("Please enter a valid phone number");
    }
    if (!password) {
      setPasswordError("Please enter a valid password");
    }

    if (name && email && number) {
      const data = {
        email: email,
        name: name,
        phone_number: number,
        password: password,
      };

      try {
        const response = await RegisterApi.createUser(data);
        if (response) {
          setNumberError("");
          setNumber("");
          setName("");
          setEmail("");
          setPassword("");
          setPasswordError("");
          navigate(routes.LOGIN);
        }
      } catch (err: any) {
        alert(err.message);
      }
    }
  };
  return (
    <Box bgcolor="#acd145" paddingY={8}>
      <Grid2
        container
        width="100%"
        maxWidth={1280}
        margin=" auto"
        padding={6}
        bgcolor="white"
        columnGap={9}
        sx={{
          boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: "25px",
        }}
      >
        <Grid2 size={6}>
          <img
            src={image}
            alt="vacation"
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </Grid2>
        <Grid2 size={5}>
          <Stack direction="column" spacing={5}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h4" fontFamily="Berkshire Swash">
                bookNow
              </Typography>

              <SwipeLeftIcon sx={{ fontSize: "45px", color: "#acd145" }} />
            </Stack>
            <Stack direction="column" spacing={4}>
              <Stack direction="column" spacing={2}>
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  fontFamily="Mulish"
                >
                  User Name
                </Typography>
                <TextField
                  value={name}
                  onChange={handleNameChange}
                  error={!!nameError}
                  helperText={nameError}
                  sx={{ width: "100%", maxWidth: 400 }}
                />
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  fontFamily="Mulish"
                >
                  Email
                </Typography>
                <TextField
                  value={email}
                  onChange={handleEmailChange}
                  error={!!error}
                  helperText={error}
                  sx={{ width: "100%", maxWidth: 400 }}
                />
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  fontFamily="Mulish"
                >
                  Phone Number
                </Typography>
                <TextField
                  type="number"
                  value={number}
                  onChange={handleNumberChange}
                  error={!!numberError}
                  helperText={numberError}
                  sx={{ width: "100%", maxWidth: 400 }}
                />
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  fontFamily="Mulish"
                >
                  Password
                </Typography>
                <TextField
                  value={password}
                  onChange={handlePasswordChange}
                  error={!!passwordError}
                  helperText={passwordError}
                  sx={{ width: "100%", maxWidth: 400 }}
                />
              </Stack>
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
                Register
              </Button>
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default RegisterPage;
