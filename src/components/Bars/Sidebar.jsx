import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReorderIcon from "@mui/icons-material/Reorder";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const paths = {
    "/pages/profile": "Profile",
    "/pages/loads/list": "Find Load",
    "/pages/drivers/create": "Add Driver",
    "/pages/drivers/drivers": "Drivers",
    "/pages/tractors/create": "Add Tractor",
    "/pages/tractors/tractors": "Tractors",
    "/pages/trailers/create": "Add Trailer",
    "/pages/trailers/trailers": "Trailers",
  };

  const names = [
    { PROFILE: ["Profile"] },
    { "LOAD BOARD": ["Find Load"] },
    { "MY DRIVERS": ["Add Driver", "Drivers"] },
    { "MY TRACTORS": ["Add Tractor", "Tractors"] },
    { "MY TRAILERS": ["Add Trailer", "Trailers"] },
  ];

  const onClickHandler = (ev) => {
    const path = Object.keys(paths).find(
      (key) => paths[key] === ev.target.innerText
    );

    navigate("../../" + path);
  };

  return (
    <Box
      bgcolor="#CDFFDD"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          fontSize: 10,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            sx={{
              display: "inline-block",
              fontWeight: "bold",
              mx: 0.5,
              fontSize: 22,
            }}
            id="nested-list-subheader"
          >
            Axele Plan
          </ListSubheader>
        }
      >
        <Divider />

        {names.map((name, ind) => (
          <div key={ind}>
            <Typography mt={2} ml={2} variant="body2">
              {Object.keys(name)[0]}
            </Typography>

            {name[Object.keys(name)[0]].map((subName, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  onClick={onClickHandler}
                  selected={
                    name[Object.keys(name)[0]][index] ===
                    paths[location.pathname]
                  }
                >
                  <ListItemIcon>
                    <ReorderIcon />
                  </ListItemIcon>
                  <ListItemText primary={subName} />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
