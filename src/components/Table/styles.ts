// import styled from "styled-components";
import { styled } from "@mui/system";

export const TableStyled = styled("table")({
  width: "100%",
});

export const TableHeader = styled("thead")({
  width: "100%",
  backgroundColor: "indigo",
});

export const TableBody = styled("tbody")({
  backgroundColor: "purple",
});

export const Row = styled("td")({
  height: "100%",
  padding: ".2rem",
});

export const Cell = styled("tr")({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",

  border: "1px solid white",
  borderRadius: "3px",

  marginBottom: ".2rem",

  backgroundColor: "purple",
});
