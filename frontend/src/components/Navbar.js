import { Typography } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static">
          <Toolbar
            style={{ padding: "0.5rem 2rem", background: "white" }}
            variant="dense"
          >
            <Typography variant="h4" style={{ color: "green" ,fontWeight:'900' }} component="div">
              Workout Buddy
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
