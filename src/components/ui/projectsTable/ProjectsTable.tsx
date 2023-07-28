import React, { useEffect, useState } from "react";
import { ContentHeader, FlexBox, WrapperBg } from "../sharedStyledComponents";
import {
  TextField,
  TextFieldProps,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { DataGrid, DataGridProps, GridColDef } from "@mui/x-data-grid";
import NameCell from "./NameCell";
import TeamCell from "./TeamCell";
import ActionsCell from "./ActionsCell";
import { MyPalette } from "@/types/theme.types";
import StatusCell from "./StatusCell";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "NAME",
    width: 230,
    flex: 2.2,
    renderCell: (params) => (
      <NameCell
        avatar={params.row.avatar}
        title={params.row.title}
        date={params.row.date}
      />
    ),
  },
  {
    field: "leader",
    headerName: "LEADER",
    width: 161,
    flex: 1.4,
    renderCell: (params) => (
      <Typography sx={{ color: "text.disabled", fontSize: "1rem" }}>
        {params.row.leader}
      </Typography>
    ),
  },
  {
    field: "team",
    headerName: "TEAM",
    width: 165,
    flex: 1.3,
    renderCell: (params) => <TeamCell avatars={params.row.team} />,
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 155,
    flex: 1.5,
    renderCell: (params) => <StatusCell num={params.row.status} />,
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    sortable: false,
    width: 152,
    minWidth: 100,
    flex: 1.1,
    renderCell: (params) => <ActionsCell id={params.row.id} />,
  },
];

const rows = [
  {
    id: 1,
    title: "Website SEO",
    date: "10 may 2021",
    leader: "Eileen",
    team: ["1", "2", "3", "4"],
    status: 38,
  },
  {
    id: 2,
    avatar: "social-label",
    title: "Social Banners",
    date: "03 Jan 2021",
    leader: "Owen",
    team: ["5", "6"],
    status: 45,
  },
  {
    id: 3,
    avatar: "sketch-label",
    title: "Logo Designs",
    date: "12 Aug 2021",
    leader: "Keith",
    team: ["7", "8", "1", "2"],
    status: 92,
  },
  {
    id: 4,
    avatar: "sketch-label",
    title: "IOS App Design",
    date: "19 Apr 2021",
    leader: "Merline",
    team: ["3", "8", "5", "2"],
    status: 56,
  },
  {
    id: 5,
    avatar: "figma-label",
    title: "Figma Dashboards",
    date: "08 Apr 2021",
    leader: "Harmonia",
    team: ["3", "8", "5"],
    status: 25,
  },
  {
    id: 6,
    avatar: "html-label",
    title: "Crypto Admin",
    date: "29 Sept 2021",
    leader: "Allyson",
    team: ["2", "8", "5", "2"],
    status: 36,
  },
  {
    id: 7,
    avatar: "react-label",
    title: "Create Website",
    date: "20 Mar 2021",
    leader: "Georgie",
    team: ["3", "1", "7", "8"],
    status: 72,
  },
  {
    id: 8,
    avatar: "xd-label",
    title: "App Design",
    date: "09 Feb 2021",
    leader: "Fred",
    team: ["2", "4", "1", "5"],
    status: 89,
  },
  {
    id: 9,
    avatar: "figma-label",
    title: "Angular APIs",
    date: "17 June 2021",
    leader: "Richardo",
    team: ["1", "8", "7", "2"],
    status: 77,
  },
  {
    id: 10,
    avatar: "vue-label",
    title: "Admin Template",
    date: "06 Oct 2021",
    leader: "Genevra",
    team: ["1", "2", "3", "5"],
    status: 100,
  },
];

const StyledDataGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
  border: "none",
  minHeight: "161px",
  "& .MuiDataGrid-columnHeaderCheckbox, .MuiDataGrid-cellCheckbox": {
    maxWidth: "58px !important",
    minWidth: "58px !important",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: 600,
    fontSize: "0.75rem",
    letterSpacing: "0.17px",
  },
  "& .MuiCheckbox-root": {
    color: theme.palette.primary,
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.primary.dark,
  },
  "& .MuiDataGrid-menuIcon > button": {
    color: (theme.palette as MyPalette).disabled.main,
  },
  "& .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeaderCheckbox)": {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  "& .MuiDataGrid-cell:not(.MuiDataGrid-cellCheckbox)": {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  "& .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within": {
    outline: "none",
  },
  [`@media (min-width: 1200px)`]: {
    "& .MuiDataGrid-virtualScroller": {
      overflow: "hidden",
    },
  },
}));

const SearchField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  "& input": {
    padding: "8.5px 15px",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: (theme.palette as MyPalette).disabled.main,
  },
  "&& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(145, 85, 253)",
  },
  "& > div": { borderRadius: "6px" },
}));

const ProjectsTable = () => {
  const [searchString, setSearchString] = useState("");
  const [filtredRows, setFiltredRows] = useState(rows);
  const match = useMediaQuery("(min-width: 1200px");

  useEffect(() => {
    const result = rows.filter(
      (row) =>
        row.title.toLowerCase().includes(searchString.toLowerCase()) ||
        row.date.toLowerCase().includes(searchString.toLowerCase()) ||
        row.leader.toLowerCase().includes(searchString.toLowerCase())
    );
    setFiltredRows(result);
  }, [searchString]);

  return (
    <WrapperBg>
      <ContentHeader
        sx={{
          paddingBottom: "1.25rem",
          "& .MuiCardHeader-action": {
            marginTop: 0,
            marginRight: 0,
          },
        }}
        title="Projects"
        action={
          <FlexBox sx={{ alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="body2" sx={{ color: "text.disabled" }}>
              Search:
            </Typography>
            <SearchField
              onChange={(e) => setSearchString(e.currentTarget.value)}
            />
          </FlexBox>
        }
      />

      <StyledDataGrid
        rows={filtredRows}
        columns={columns.map((column, i) => ({
          ...column,
          flex:
            i === columns.length - 1
              ? column.flex
              : match
              ? column.flex
              : undefined,
        }))}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[5, 7, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </WrapperBg>
  );
};

export default ProjectsTable;
