import React from 'react';
import { AppShell } from '@mantine/core';
import Sidebar from '@/components/sidebar/sidebar';

const Add = () => {
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
            <AppShell.Navbar>
                <Sidebar />
            </AppShell.Navbar>
            {/* Add your main content here */}
        </AppShell>
    );
};

export default Add;
