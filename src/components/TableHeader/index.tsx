import * as Mui from "@mui/material";

interface TableHeaderProps {
  tableName: string;
  fails: number;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  tableName,
  fails,
}) => {
  return (
    <Mui.Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Mui.Typography
        sx={{ marginRight: "auto" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {tableName}
      </Mui.Typography>

      <Mui.Typography variant="h6" id="tableTitle" component="div">
        Quantidade de falhas: {fails}
      </Mui.Typography>
    </Mui.Toolbar>
  );
};
