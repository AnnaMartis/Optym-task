import React from "react";
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { StyledInnerHeader, StyledSubmitButton } from "../../styles";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// const defaultData = [
//   {
//     originCity: "Elgin",
//     originState: "IL",
//     destCity: "Jessup",
//     destState: "PA",
//     eqType: "Van",
//     revenue: "3300",
//     company: "Surge",
//     daysToPay: 19,
//   },
// ];

function createData(
  originCity,
  originState,
  destCity,
  destState,
  eqType,
  revenue,
  company,
  daysToPay,
  id
) {
  return {
    originCity,
    originState,
    destCity,
    destState,
    eqType,
    revenue,
    company,
    daysToPay,
    id,
  };
}

const rows = [
  createData("Elgin", "IL", "Jessup", "PA", "Van", "3300", "Surge", 19, 1),
];

const LoadForm = () => {
  return (
    <Box flex={4} p={1}>
      <Paper sx={{ minHeight: "80vh" }}>
        <Container
          sx={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <StyledInnerHeader>Find Loads</StyledInnerHeader>
          <StyledSubmitButton size="small" variant="contained">
            Refresh
          </StyledSubmitButton>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Origin City</TableCell>
                  <TableCell align="right">Origin State</TableCell>
                  <TableCell align="right">Destination City</TableCell>
                  <TableCell align="right">Destination State</TableCell>
                  <TableCell align="right">Equipement Type</TableCell>
                  <TableCell align="right">Revenue</TableCell>
                  <TableCell align="right">Company</TableCell>
                  <TableCell align="right">DaysToPay</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.originCity}
                    </TableCell>
                    <TableCell align="right">{row.originState}</TableCell>
                    <TableCell align="right">{row.destCity}</TableCell>
                    <TableCell align="right">{row.destState}</TableCell>
                    <TableCell align="right">{row.eqType}</TableCell>
                    <TableCell align="right">{row.revenue}</TableCell>
                    <TableCell align="right">{row.company}</TableCell>
                    <TableCell align="right">{row.daysToPay}</TableCell>
                    <TableCell align="right">
                      <Link href="/register">View</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Paper>
    </Box>
  );
};

export default LoadForm;
