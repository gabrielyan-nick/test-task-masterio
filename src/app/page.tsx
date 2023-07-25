"use client";

import { useGetDataQuery } from "@/api/dataApi";
import ActivityTimeline from "@/components/ui/ActivityTimeline";
import ConnectionsList from "@/components/ui/ConnectionsList";
import DataList from "@/components/ui/ConnectionsList";
import ProjectsTable from "@/components/ui/projectsTable/ProjectsTable";
import TeamsList from "@/components/ui/TeamsList";
import UserCard from "@/components/ui/UserCard";
import UserInfo from "@/components/ui/UserInfo";
import { Main, Wrapper, WrapperBg } from "@/components/ui/microComponents";
import { IData } from "@/types/data.types";
import { Grid } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  const { data, isLoading } = useGetDataQuery();
  // console.log(data);
  return (
    <Main>
      <Wrapper>
        <UserCard />
        <Grid container spacing={3} sx={{ marginTop: "0rem" }}>
          <Grid item xs={12} md={5} lg={4}>
            <UserInfo
              about={data?.about}
              contacts={data?.contacts}
              teams={data?.teams}
              overview={data?.overview}
            />
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ActivityTimeline />
              </Grid>
              <Grid item xs={12} md={6}>
                <ConnectionsList data={data?.connections} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TeamsList data={data?.teamsTech} />
              </Grid>
              <Grid item xs={12}>
                <ProjectsTable />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </Main>
  );
}
