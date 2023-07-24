import React from "react";
import { ContentHeader, FlexBox, WrapperBg } from "./microComponents";
import { TextField, TextFieldProps, Typography, styled } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "name", headerName: "NAME", width: 220 },
  { field: "leader", headerName: "LEADER", width: 141 },
  { field: "team", headerName: "TEAM", width: 141 },
  {
    field: "status",
    headerName: "STATUS",
    width: 150,
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    sortable: false,
    width: 141,
  },
];

const SearchField = styled(TextField)<TextFieldProps>({
  "& input": {
    padding: "8.5px 15px",
  },
  "& > div": { borderRadius: "6px" },
});

const ProjectsTable = () => {
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <WrapperBg>
      <ContentHeader
        sx={{ paddingBottom: "1.25rem" }}
        title="Projects"
        action={
          <FlexBox sx={{ alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="body2" sx={{ color: "text.disabled" }}>
              Search:
            </Typography>
            <SearchField />
          </FlexBox>
        }
      />

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[5, 7, 10]}
        checkboxSelection
      />
    </WrapperBg>
  );
};

export default ProjectsTable;
