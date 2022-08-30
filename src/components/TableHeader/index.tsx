import * as Mui from "@mui/material";

interface TableHeaderProps {
  tableName: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ tableName }) => {
  return (
    <Mui.Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Mui.Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {tableName}
      </Mui.Typography>
    </Mui.Toolbar>
  );
};
