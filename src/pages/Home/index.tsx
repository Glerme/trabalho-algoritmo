import { useState } from "react";

import * as Mui from "@mui/material";
import { toast } from "react-toastify";

import { TableDataProps } from "../../types/TableDataProps";

import { Table } from "../../components/Table";

export const Home = () => {
  const [tableData, setTableData] = useState<TableDataProps>({
    columns: [],
    lifo: [],
    fifo: [],
    otimo: [],
    lru: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const [fields, setFields] = useState({
    arrayNumbers: "",
    numberOfMemory: "",
  });

  async function handleSubmit() {
    setIsLoading(true);

    try {
      const parsedFields = {
        ...fields,
        arrayNumbers: fields.arrayNumbers.split(";"),
      };

      if (parsedFields.arrayNumbers.length < 2) {
        return toast.warning("Conteudo invalido");
      }

      parsedFields.arrayNumbers.forEach((value) => {
        if (value === "")
          parsedFields.arrayNumbers.splice(
            parsedFields.arrayNumbers.indexOf(value),
            1
          );
      });

      const response = await fetch("http://127.0.0.1:8000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: parsedFields.arrayNumbers,
          frames: parsedFields.numberOfMemory,
        }),
      });

      const { fifo, lifo, otimo, lru } = await response.json();

      setTableData({
        columns: parsedFields.arrayNumbers,
        fifo,
        lifo,
        lru,
        otimo,
      });

      toast.success("Tabelas Atualizadas");
    } catch (e) {
      console.error(e);
      toast.error("Ocorreu um erro");
    } finally {
      setIsLoading(false);
    }
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

          {isLoading ? (
            <Mui.CircularProgress />
          ) : (
            tableData.fifo.length > 0 &&
            tableData.lifo.length > 0 &&
            tableData.lru.length > 0 && (
              <Mui.Grid item xs={12}>
                <Mui.Box mb={2}>
                  <Table
                    columns={tableData.columns}
                    rows={tableData.fifo}
                    tableName="FIFO"
                  />
                </Mui.Box>

                <Mui.Box mb={2}>
                  <Table
                    columns={tableData.columns}
                    rows={tableData.lru}
                    tableName="LRU"
                  />
                </Mui.Box>

                {/* <Mui.Box mb={2}>
                  <Table
                    columns={tableData.columns}
                    rows={tableData.otimo}
                    tableName="ÓTIMO"
                  />
                </Mui.Box> */}

                <Mui.Box mb={2}>
                  <Table
                    columns={tableData.columns}
                    rows={tableData.lifo}
                    tableName="LIFO"
                  />
                </Mui.Box>
              </Mui.Grid>
            )
          )}
        </Mui.Grid>
      </Mui.Box>
    </Mui.Container>
  );
};
