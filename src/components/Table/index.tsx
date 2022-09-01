import { useEffect, useState } from "react";

import { TableHeader } from "../TableHeader";
import * as Styled from "./styles";

interface TableProps {
  rows: number[][];
  columns: string[];
  tableName: string;
}

export const Table: React.FC<TableProps> = ({ columns, rows, tableName }) => {
  const [fails, _] = useState(() => {
    let fail = 0;

    rows.map((row) => (row.length > 0 ? (fail += 1) : (fail += 0)));

    return fail;
  });

  return (
    <div style={{ width: "100%" }}>
      <TableHeader tableName={tableName} fails={fails} />

      <Styled.TableStyled>
        <Styled.TableHeader>
          {columns.map((column, i) => (
            <th key={i}>{column}</th>
          ))}
        </Styled.TableHeader>

        <Styled.TableBody>
          {rows.map((row, i) => (
            <Styled.Row key={i}>
              {row.map((r, i) => (
                <Styled.Cell key={i}> {r}</Styled.Cell>
              ))}
            </Styled.Row>
          ))}
        </Styled.TableBody>
      </Styled.TableStyled>
    </div>
  );
};
