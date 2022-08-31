import { useEffect, useState } from "react";

import * as Mui from "@mui/material";
import { toast } from "react-toastify";

import { Table } from "../../components/Table";

const rows = [[1], [1, 3], [4, 3], [4, 5], [3, 5], [], [], [3, 4]];
const columns = [1, 2, 3, 4, 5, 6, 7, 7];

export const Home = () => {
  const [tableData, setTableData] = useState({
    lifo: [],
    fifo: [],
    otimo: [],
    lru: [],
  });

  const [fields, setFields] = useState({
    arrayNumbers: "",
    numberOfMemory: "",
  });

  function handleSubmit() {
    const parsedFields = {
      ...fields,
      arrayNumbers: fields.arrayNumbers.split(";"),
    };

    if (
      parsedFields.arrayNumbers.length < 2 ||
      parsedFields.arrayNumbers.length > 10
    ) {
      return toast.warning("Conteudo invalido");
    }

    parsedFields.arrayNumbers.forEach((value) => {
      if (value === "")
        parsedFields.arrayNumbers.splice(
          parsedFields.arrayNumbers.indexOf(value),
          1
        );
    });

    console.log("ENVIO PARA API", parsedFields);
  }

  async function loadTable() {
    try {
    } catch (err) {
      toast.error("Ocorreu um erro");
    }
  }

  useEffect(() => {
    loadTable();
  }, []);

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
              <Table columns={columns} rows={rows} tableName="FIFO" />
            </Mui.Box>

            <Mui.Box mb={2}>
              <Table columns={columns} rows={rows} tableName="LRU" />
            </Mui.Box>

            <Mui.Box>
              <Table columns={columns} rows={rows} tableName="ÓTIMO" />
            </Mui.Box>

            <Mui.Box mb={2}>
              <Table columns={columns} rows={rows} tableName="LIFO" />
            </Mui.Box>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Box>
    </Mui.Container>
  );
};
