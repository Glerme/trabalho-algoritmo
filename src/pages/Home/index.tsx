import React, { useState } from "react";

import * as Mui from "@mui/material";
import { Table } from "../../components/Table";

const rows = [
  {
    cell1: "valor1",
    cell2: "valor2",
    cell3: "valor3",
    cell4: "valor4",
    cell5: "valor4",
    cell6: "valor4",
    cell7: "valor4",
    cell8: "valor4",
    cell9: "valor4",
    cell10: "valor4",
  },
];

export const Home = () => {
  const [fields, setFields] = useState({
    arrayNumbers: "",
    numberOfMemory: "",
  });

  function handleSubmit() {
    const parsedFields = {
      ...fields,
      arrayNumbers: fields.arrayNumbers.split(";"),
    };

    parsedFields.arrayNumbers.forEach((value) => {
      if (value === "")
        parsedFields.arrayNumbers.splice(
          parsedFields.arrayNumbers.indexOf(value),
          1
        );
    });

    console.log("ENVIO PARA API", parsedFields);
  }

  return (
    <Mui.Container>
      <Mui.Box pt={4}>
        <Mui.Grid container spacing={1}>
          <Mui.Grid item xs={6}>
            {/* primeira coluna */}
            <Mui.Box
              sx={{
                width: "100%",
              }}
            >
              <Mui.TextField
                placeholder="Digite de 2 à 10 números separados por ; (ponto e vírgula)"
                sx={{
                  width: "100%",
                }}
                value={fields.arrayNumbers}
                onChange={(e) =>
                  setFields({ ...fields, arrayNumbers: e.target.value })
                }
              />
            </Mui.Box>
          </Mui.Grid>

          <Mui.Grid item xs={6}>
            {/* segunda coluna */}

            <Mui.Box
              sx={{
                width: "100%",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <Mui.TextField
                placeholder="Digite a quantidade de memória"
                sx={{
                  width: "100%",
                }}
                value={fields.numberOfMemory}
                onChange={(e) =>
                  setFields({ ...fields, numberOfMemory: e.target.value })
                }
              />

              <Mui.Box pt={1} pb={4} width={"100%"}>
                <Mui.Button
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Salvar
                </Mui.Button>
              </Mui.Box>
            </Mui.Box>
          </Mui.Grid>

          <Mui.Grid item xs={12}>
            <Mui.Box mb={2}>
              <Table
                columns={[1, 2, 3, 4, 5, 6, 7, 7]}
                rows={rows}
                tableName="FIFO"
              />
            </Mui.Box>

            <Mui.Box mb={2}>
              <Table
                columns={[1, 2, 3, 4, 5, 6, 7, 7]}
                rows={rows}
                tableName="LIFO"
              />
            </Mui.Box>

            <Mui.Box>
              <Table
                columns={[1, 2, 3, 4, 5, 6, 7, 7]}
                rows={rows}
                tableName="ÓTIMO"
              />
            </Mui.Box>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Box>
    </Mui.Container>
  );
};
