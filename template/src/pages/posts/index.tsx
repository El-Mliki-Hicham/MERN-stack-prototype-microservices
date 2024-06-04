import { MantineProvider } from '@mantine/core';
import Table from "./table";

const Index = () => {

    return (
        <MantineProvider>
        <div>
            <h1>posts index</h1>
        </div>
        <div>
            <Table />
        </div>
    </MantineProvider>
    );
};

export default Index;
