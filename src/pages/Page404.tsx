// Libraries
import { Box, Button, styled, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// Components - global
import Page from "@/components/Page";

export default function Page404() {
  return (
    <Page
      title="Page Not Found"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
        <Typography variant="h3" paragraph>
          Sorry, page not found!
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Sorry, we couldn't find the page you're looking for. Perhaps you've
          mistyped the URL? Be sure to check your spelling.
        </Typography>

        <Button
          to="/login"
          variant="contained"
          component={RouterLink}
          sx={{ marginTop: 4 }}
        >
          Go to Home
        </Button>
      </Box>
    </Page>
  );
}
