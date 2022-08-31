import { TableHeader } from "../TableHeader";

import * as Mui from "@mui/material";
import * as Styled from "./styles";

interface TableProps {
  rows: number[][];
  columns: string[];
  tableName: string;
}

export const Table: React.FC<TableProps> = ({ columns, rows, tableName }) => {
  return (
    <div style={{ width: "100%" }}>
      <TableHeader tableName={tableName} fails={rows?.length} />

      <Styled.TableStyled>
        <Styled.TableHeader>
          {columns.map((column, i) => (
            <th key={i}>{column}</th>
          ))}
        </Styled.TableHeader>

        <Styled.TableBody>
          {rows.map((row) => (
            <Styled.Row>
              {row.map((r) => (
                <Styled.Cell>{r}</Styled.Cell>
              ))}
            </Styled.Row>
          ))}
        </Styled.TableBody>
      </Styled.TableStyled>
    </div>
  );
};
