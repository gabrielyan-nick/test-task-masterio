import React, { useEffect, useState } from "react";
import {
  ContentHeader,
  ContentWrapper,
  FlexBetweenBox,
  FlexBox,
  SelectWrapper,
  StyledDataGrid,
  StyledInput,
  TextLight,
  WrapperBg,
} from "../sharedStyledComponents";
import {
  Chip,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import BtnContained from "../BtnContained";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { invoiceStatus } from "@/data/selectData";
import { GridColDef } from "@mui/x-data-grid";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StatusCell from "./StatusCell";
import ClientCell from "./ClientCell";
import ActionsCell from "./ActionsCell";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "#",
    width: 130,
    flex: 1.1,
    renderCell: (params) => `#${params.row.id}`,
  },
  {
    field: "status",
    width: 140,
    flex: 1.1,
    renderHeader: () => <TrendingUpOutlinedIcon fontSize="small" />,
    renderCell: (params) => (
      <StatusCell
        status={params.row.payStatus.status}
        balance={params.row.payStatus.balance}
        date={params.row.payStatus.date}
      />
    ),
  },
  {
    field: "client",
    headerName: "CLIENT",
    width: 460,
    flex: 3,
    renderCell: (params) => (
      <ClientCell
        name={params.row.client.name}
        email={params.row.client.email}
        avatar={params.row.client.avatar}
      />
    ),
  },
  {
    field: "total",
    headerName: "TOTAL",
    width: 140,
    flex: 1.1,
    renderCell: (params) => (
      <TextLight variant="body2">{params.row.total}</TextLight>
    ),
  },
  {
    field: "date",
    headerName: "ISSUED DATE",
    width: 240,
    flex: 1.6,
    renderCell: (params) => (
      <TextLight variant="body2">{params.row.issuedDate}</TextLight>
    ),
  },
  {
    field: "balance",
    headerName: "BALANCE",
    width: 160,
    flex: 1.2,
    renderCell: (params) => {
      if (params.row.balance === "paid")
        return (
          <Chip
            size="small"
            label="Paid"
            sx={{ bgcolor: "success.100", color: "success.main" }}
          />
        );
      else return <Typography variant="body2">{params.row.balance}</Typography>;
    },
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    width: 150,
    minWidth: 100,
    flex: 1.2,
    renderCell: (params) => <ActionsCell id={params.row.id} />,
  },
];

const rows = [
  {
    id: 4987,
    payStatus: {
      status: "Paid",
      balance: "$724",
      date: "23 aug. 2023",
    },
    client: {
      name: "Alan Jimenez",
      email: "scott96@mejia.net",
    },
    total: "$4372",
    issuedDate: "30 aug. 2023",
    balance: "-$344",
  },
  {
    id: 4988,
    payStatus: {
      status: "Downloaded",
      balance: "0",
      date: "15 aug. 2023",
    },
    client: {
      name: "Amanda Phillips",
      email: "guerrerobrandy@beasley-harper.com",
    },
    total: "$2771",
    issuedDate: "26 aug. 2023",
    balance: "paid",
  },
  {
    id: 4989,
    payStatus: {
      status: "Paid",
      balance: "0",
      date: "03 aug. 2023",
    },
    client: {
      name: "Andrew Burns",
      email: "pwillis@cross.org",
      avatar: "8",
    },
    total: "$3171",
    issuedDate: "19 aug. 2023",
    balance: "-$205",
  },
  {
    id: 4990,
    payStatus: {
      status: "Sent",
      balance: "0",
      date: "11 aug. 2023",
    },
    client: {
      name: "April Yates",
      email: "todd34@owens-morgan.com",
    },
    total: "$3904",
    issuedDate: "24 aug. 2023",
    balance: "$951",
  },
  {
    id: 4991,
    payStatus: {
      status: "Draft",
      balance: "$815",
      date: "30 aug. 2023",
    },
    client: {
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      avatar: "4",
    },
    total: "$2060",
    issuedDate: "06 aug. 2023",
    balance: "paid",
  },
  {
    id: 4992,
    payStatus: {
      status: "Paid",
      balance: "0",
      date: "24 aug. 2023",
    },
    client: {
      name: "Charles Alexander",
      email: "zpearson@miller.com",
    },
    total: "$4077",
    issuedDate: "23 aug. 2023",
    balance: "paid",
  },
  {
    id: 4993,
    payStatus: {
      status: "Paid",
      balance: "$724",
      date: "23 aug. 2023",
    },
    client: {
      name: "Chris Reyes",
      email: "hunter14@jones.com",
    },
    total: "$2280",
    issuedDate: "02 aug. 2023",
    balance: "paid",
  },
  {
    id: 4994,
    payStatus: {
      status: "Draft",
      balance: "$407",
      date: "22 aug. 2023",
    },
    client: {
      name: "Christina Collier",
      email: "williamshenry@moon-smith.com",
    },
    total: "$1060",
    issuedDate: "18 aug. 2023",
    balance: "paid",
  },
  {
    id: 4995,
    payStatus: {
      status: "Paid",
      balance: "-$205",
      date: "10 aug. 2023",
    },
    client: {
      name: "David Flores",
      email: "margaretharvey@russell-murray.com",
      avatar: "2",
    },
    total: "$3460",
    issuedDate: "23 aug. 2023",
    balance: "$407",
  },
  {
    id: 4996,
    payStatus: {
      status: "Downloaded",
      balance: "0",
      date: "24 aug. 2023",
    },
    client: {
      name: "Valerie Perez",
      email: "dianarodriguez@villegas.com",
      avatar: "5",
    },
    total: "$2780",
    issuedDate: "18 aug. 2023",
    balance: "paid",
  },
  {
    id: 4997,
    payStatus: {
      status: "Downloaded",
      balance: "$305",
      date: "02 aug. 2023",
    },
    client: {
      name: "Susan Dickerson",
      email: "bwilson@norris-brock.com",
      avatar: "1",
    },
    total: "$3325",
    issuedDate: "20 aug. 2023",
    balance: "-$361",
  },
  {
    id: 4998,
    payStatus: {
      status: "Partial Payment",
      balance: "$666",
      date: "18 aug. 2023",
    },
    client: {
      name: "Kelly Smith",
      email: "markcampbell@bell.info",
      avatar: "6",
    },
    total: "$3020",
    issuedDate: "10 aug. 2023",
    balance: "$405",
  },
  {
    id: 4999,
    payStatus: {
      status: "Partial Payment",
      balance: "0",
      date: "17 aug. 2023",
    },
    client: {
      name: "Jamie Jones",
      email: "mary61@rosario.com",
      avatar: "4",
    },
    total: "$1580",
    issuedDate: "12 aug. 2023",
    balance: "$290",
  },
  {
    id: 5000,
    payStatus: {
      status: "Paid",
      balance: "0",
      date: "01 aug. 2023",
    },
    client: {
      name: "Ruben Garcia",
      email: "sean22@cook.com",
      avatar: "4",
    },
    total: "$5200",
    issuedDate: "21 aug. 2023",
    balance: "paid",
  },
  {
    id: 5001,
    payStatus: {
      status: "Paid",
      balance: "0",
      date: "22 aug. 2023",
    },
    client: {
      name: "Ryan Meyer",
      email: "mccoymatthew@lopez-jenkins.net",
      avatar: "3",
    },
    total: "$4900",
    issuedDate: "05 aug. 2023",
    balance: "$600",
  },
  {
    id: 5002,
    payStatus: {
      status: "Partial Payment",
      balance: "-$202",
      date: "02 aug. 2023",
    },
    client: {
      name: "Valerie Valdez",
      email: "novakshannon@mccarty-murillo.com",
      avatar: "7",
    },
    total: "$3290",
    issuedDate: "03 aug. 2023",
    balance: "paid",
  },
  {
    id: 5003,
    payStatus: {
      status: "Downloaded",
      balance: "$731",
      date: "15 aug. 2023",
    },
    client: {
      name: "Melissa Wheeler",
      email: "smithrachel@davis-rose.net",
      avatar: "8",
    },
    total: "$1450",
    issuedDate: "01 aug. 2023",
    balance: "-$120",
  },
  {
    id: 5004,
    payStatus: {
      status: "Sent",
      balance: "-$344",
      date: "17 aug. 2023",
    },
    client: {
      name: "Alan Jimenez",
      email: "scott96@mejia.net",
    },
    total: "$5900",
    issuedDate: "09 aug. 2023",
    balance: "paid",
  },
  {
    id: 5005,
    payStatus: {
      status: "Partial Payment",
      balance: "-$253",
      date: "16 aug. 2023",
    },
    client: {
      name: "Jennifer Morris",
      email: "cramirez@ross-bass.biz",
      avatar: "5",
    },
    total: "$4660",
    issuedDate: "13 aug. 2023",
    balance: "$590",
  },
  {
    id: 5006,
    payStatus: {
      status: "Past Due",
      balance: "0",
      date: "12 aug. 2023",
    },
    client: {
      name: "Timothy Stevenson",
      email: "arielberg@wolfe-smith.com",
    },
    total: "$9999",
    issuedDate: "07 aug. 2023",
    balance: "paid",
  },
];

const BillingHistoryTable = () => {
  const [searchString, setSearchString] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [filtredRows, setFiltredRows] = useState(rows);
  const match = useMediaQuery("(min-width: 1000px");

  useEffect(() => {
    let statusFilteredRows = rows;
    if (statusFilter) {
      statusFilteredRows = rows.filter(
        (row) => row.payStatus.status === statusFilter
      );
    }

    let finalFilteredRows = statusFilteredRows;
    if (searchString) {
      finalFilteredRows = statusFilteredRows.filter(
        (row) =>
          row.id
            .toString()
            .toLowerCase()
            .includes(searchString.toLowerCase()) ||
          row.client.email.toLowerCase().includes(searchString.toLowerCase()) ||
          row.client.name.toLowerCase().includes(searchString.toLowerCase()) ||
          row.total.toLowerCase().includes(searchString.toLowerCase()) ||
          row.balance.toLowerCase().includes(searchString.toLowerCase())
      );
    }

    setFiltredRows(finalFilteredRows);
  }, [statusFilter, searchString]);

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
                      backgroundColor: "background.paper",
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
        rows={filtredRows}
        columns={columns.map((column) => ({
          ...column,
          flex: match ? column.flex : undefined,
        }))}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50]}
        disableRowSelectionOnClick
      />
    </WrapperBg>
  );
};

export default BillingHistoryTable;
