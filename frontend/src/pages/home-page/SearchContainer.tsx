import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SearchContainer = () => {
  const [value1, setValue1] = useState<Dayjs | null>(dayjs("2022-04-17"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="column" spacing={5} padding={4} width="750px">
        <FormControl sx={{ m: 1 }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            //   value={password}
            //   onChange={handlePasswordChange}
            //   error={!!passwordError}
            placeholder="Enter the city or hotels"
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <LocationOnIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* {passwordError && (
                <Typography color="error">{passwordError}</Typography> value={value1}value={value1}
              )} */}
        <Stack direction="row" spacing={2} alignItems="justify">
          <Stack direction="column" spacing={1}>
            <Typography>Check In</Typography>
            <DatePicker onChange={(newValue: any) => setValue1(newValue)} />
          </Stack>
          <Stack direction="column" spacing={1}>
            <Typography>Check out</Typography>
            <DatePicker onChange={(newValue: any) => setValue1(newValue)} />
          </Stack>
        </Stack>
        <Button variant="contained">Search Hotels</Button>
      </Stack>
    </LocalizationProvider>
  );
};
export default SearchContainer;
