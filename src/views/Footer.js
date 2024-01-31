import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      // sx={{
      //   backgroundColor: (theme) =>
      //     theme.palette.mode === "light"
      //       ? theme.palette.grey[200]
      //       : theme.palette.grey[800],
      //   p: 6,
      // }}
      className="bg-blue-500 h-12 items-center text-white-500 -my-10"
      component="footer"
      
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Bike service app
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}