import React, { useContext, useEffect, useState } from "react";
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { StyledInnerHeader } from "../../styles";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AccountActive } from "../../App";
import { GetTrailersList } from "../../api";

const TrailersList = () => {
  const { activeAccount, setActiveAccount } = useContext(AccountActive);
  const [data, setData] = useState([]);

  useEffect(() => {
    const organizationId = activeAccount.account.organizationId;
    GetTrailersList(organizationId).then((result) => {
      setData(result.trailers);
    });
  }, []);

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
          <StyledInnerHeader>Find Trailers</StyledInnerHeader>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Vin</TableCell>
                  <TableCell align="right">Year</TableCell>
                  <TableCell align="right">Model</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.organizationId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.vin}</TableCell>
                    <TableCell align="right">{row.year}</TableCell>
                    <TableCell align="right">{row.model}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">
                      <Link href="#">Update</Link>
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

export default TrailersList;
