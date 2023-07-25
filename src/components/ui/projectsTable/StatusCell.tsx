import { LinearProgress, Typography } from "@mui/material";

const StatusCell = ({ num }: { num: number }) => {
  return (
    <>
      <LinearProgress
        value={num}
        sx={{
          marginRight: "1rem",
          width: "100%",
          height: "6px",
          borderRadius: "48px",
          backgroundColor: "secondary.light",
          "& span": {
            borderRadius: "48px",
          },
        }}
        variant="determinate"
        color="primary"
      />
      <Typography
        sx={{ fontSize: "1rem", color: "text.disabled" }}
      >{`${num}%`}</Typography>
    </>
  );
};

export default StatusCell;
