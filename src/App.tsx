import * as Mui from "@mui/material";

function App() {
  const rows = [
    { col1: "valor1", col2: "valor2", col3: "valor3", col4: "valor4" },
  ];

  return (
    <Mui.Container>
      <Mui.Grid container spacing={1}>
        <Mui.Grid item xs={6}>
          <Mui.Box
            sx={{
              width: "100%",
            }}
          >
            <Mui.TextField
              label="label 1"
              sx={{
                width: "100%",
              }}
            />
          </Mui.Box>
        </Mui.Grid>

        <Mui.Grid item xs={6}>
          <Mui.Box
            sx={{
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: "1rem",
            }}
          >
            <Mui.TextField
              label="label 2"
              sx={{
                width: "100%",
              }}
            />

            <Mui.Button variant="contained">Salvar</Mui.Button>
          </Mui.Box>
        </Mui.Grid>
        <Mui.Grid item xs={12}>
          <Mui.Box>
            <Mui.TableContainer component={Mui.Paper}>
              <Mui.Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="memory table"
              >
                <Mui.TableHead>
                  <Mui.TableRow>
                    <Mui.TableCell>1</Mui.TableCell>
                    <Mui.TableCell>2</Mui.TableCell>
                    <Mui.TableCell>3</Mui.TableCell>
                    <Mui.TableCell>4</Mui.TableCell>
                  </Mui.TableRow>
                </Mui.TableHead>
                <Mui.TableBody>
                  {rows.map((row) => (
                    <Mui.TableRow
                      key={row.col1}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <Mui.TableCell component="th" scope="row">
                        {row.col1}
                      </Mui.TableCell>
                      <Mui.TableCell component="th" scope="row">
                        {row.col2}
                      </Mui.TableCell>
                      <Mui.TableCell>{row.col3}</Mui.TableCell>
                      <Mui.TableCell>{row.col4}</Mui.TableCell>
                    </Mui.TableRow>
                  ))}
                </Mui.TableBody>
              </Mui.Table>
            </Mui.TableContainer>
          </Mui.Box>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Container>
  );
}

export default App;
