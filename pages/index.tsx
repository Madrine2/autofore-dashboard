import Image from "next/image";
import { Inter } from "next/font/google";
import {AppShell} from "@mantine/core";
import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
          }}
          layout="alt"
          padding="md"
          styles={{
            main: {
              backgroundColor: 'white',
            },
          }}
      >
        <AppShell.Header>
            <TopBar title={'Add Food'} admin={'Isaac'}/>
        </AppShell.Header>
        <AppShell.Navbar>
          <Sidebar/>
        </AppShell.Navbar>
        <AppShell.Main>

        </AppShell.Main>
      </AppShell>

  );
}
