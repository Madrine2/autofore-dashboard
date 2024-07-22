import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import {AppShell} from '@mantine/core';
import Navbar from "@/components/navbar/navbar";
const Orders = () => {
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
                <Navbar/>
            </AppShell.Header>
            <AppShell.Navbar>
                <Sidebar/>
            </AppShell.Navbar>
            {/*<AppShell.Main>*/}
            {/*    <FoodForm />*/}
            {/*</AppShell.Main>*/}
        </AppShell>
    );
};

export default Orders;
