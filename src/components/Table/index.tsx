import * as Mui from "@mui/material";

import { TableHeader } from "../TableHeader";

interface TableProps {
  rows: any[];
  columns: any[];
  tableName: string;
}

function createData(
  cell1: number,
  cell2?: number,
  cell3?: number,
  cell4?: number,
  cell5?: number
) {
  return { cell1, cell2, cell3, cell4, cell5 };
}

const rows2 = [
  createData(8),
  createData(2, 237, 9.0, 37, 4.3),
  createData(3, 262, 16.0, 24, 6.0),
  createData(64, 305, 3.7, 67, 4.3),
  createData(43, 356, 16.0, 49, 3.9),
];

export const Table: React.FC<TableProps> = ({ columns, rows, tableName }) => {
  console.log(rows.map((row) => row));

  return (
    <Mui.TableContainer component={Mui.Paper}>
      <TableHeader tableName={tableName} />
      <Mui.Table sx={{ minWidth: 650 }} size="small" aria-label="memory table">
        <Mui.TableHead>
          <Mui.TableRow>
            {columns.map((column, i) => (
              <Mui.TableCell key={i}>{column}</Mui.TableCell>
            ))}
          </Mui.TableRow>
        </Mui.TableHead>
        <Mui.TableBody>
          {rows2.map((row, i) => (
            <Mui.Table
              key={i}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <Mui.TableCell component="th" scope="row">
                {row.cell1}
              </Mui.TableCell>
              <Mui.TableCell component="th" scope="row">
                {row.cell2}
              </Mui.TableCell>
              <Mui.TableCell component="th" scope="row">
                {row.cell3}
              </Mui.TableCell>
              <Mui.TableCell component="th" scope="row">
                {row.cell4}
              </Mui.TableCell>
              <Mui.TableCell component="th" scope="row">
                {row.cell5}
              </Mui.TableCell>
            </Mui.Table>
          ))}
        </Mui.TableBody>
      </Mui.Table>
    </Mui.TableContainer>
  );
};
