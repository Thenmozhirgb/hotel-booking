import { Stack } from "@mui/material";
import SearchContainer from "./SearchContainer";

const HomePage = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      width="100%"
      maxWidth={1280}
      margin="auto"
      paddingY={3}
      alignItems="center"
    >
      <SearchContainer />
    </Stack>
  );
};
export default HomePage;
