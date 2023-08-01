import React, { useState } from "react";
import {
  ContentHeader,
  ContentWrapper,
  FlexBetweenBox,
  FlexBox,
  SelectWrapper,
  StyledDataGrid,
  StyledInput,
  WrapperBg,
} from "../sharedStyledComponents";
import {
  Divider,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import BtnContained from "../BtnContained";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { invoiceStatus } from "@/data/selectData";
import { GridColDef } from "@mui/x-data-grid";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const columns: GridColDef[] = [
  {
    field: "#",
    headerName: "#",
    width: 150,
    flex: 1,
    // renderCell: (params) => (
    //   <NameCell
    //     avatar={params.row.avatar}
    //     title={params.row.title}
    //     date={params.row.date}
    //   />
    // ),
  },
  {
    field: "status",
    // headerName: "LEADER",
    width: 150,
    flex: 1,
    renderHeader: () => <TrendingUpOutlinedIcon />,
  },
  {
    field: "client",
    headerName: "CLIENT",
    width: 375,
    flex: 1,
    // renderCell: (params) => <TeamCell avatars={params.row.team} />,
  },
  {
    field: "total",
    headerName: "TOTAL",
    width: 155,
    flex: 1,
    // renderCell: (params) => <StatusCell num={params.row.status} />,
  },
  {
    field: "date",
    headerName: "ISSUED DATE",
    width: 225,
    flex: 1,
    // renderCell: (params) => <ActionsCell id={params.row.id} />,
  },
  {
    field: "balance",
    headerName: "BALANCE",
    width: 150,
    flex: 1,
    // renderCell: (params) => <ActionsCell id={params.row.id} />,
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    sortable: false,
    width: 150,
    minWidth: 100,
    flex: 1,
    // renderCell: (params) => <ActionsCell id={params.row.id} />,
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

const BillingHistoryTable = () => {
  const [searchString, setSearchString] = useState("");
  const [statusFilter, setStatusFilter] = useState("none");
  // const [filtredRows, setFiltredRows] = useState(rows);

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setStatusFilter(e.target.value);
  };

  return (
    <WrapperBg sx={{ marginTop: "1.5rem" }}>
      <ContentHeader title="Billing History" sx={{ padding: "1.25rem" }} />
      <Divider />
      <ContentWrapper>
        <FlexBetweenBox>
          <BtnContained startIcon={<AddOutlinedIcon />}>
            Create invoice
          </BtnContained>
          <FlexBox gap="1rem">
            <StyledInput
              placeholder="Search Invoice"
              size="small"
              sx={{ minWidth: "250px" }}
              onChange={(e) => setSearchString(e.currentTarget.value)}
            />

            <SelectWrapper fullWidth>
              <InputLabel id="invoice-status" size="small">
                Invoice Status
              </InputLabel>
              <Select
                labelId="invoice-status"
                id="invoice-status"
                value={statusFilter}
                label="Invoice Status"
                placeholder="Invoice Status"
                sx={{ minWidth: "158px" }}
                onChange={handleSelectChange}
                MenuProps={{
                  sx: {
                    "& .MuiList-root": {
                      backgroundColor: "secondary.main",
                    },
                  },
                }}
                size="small"
              >
                {invoiceStatus.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </SelectWrapper>
          </FlexBox>
        </FlexBetweenBox>
      </ContentWrapper>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50]}
        // disableRowSelectionOnClick
      />
    </WrapperBg>
  );
};

export default BillingHistoryTable;
