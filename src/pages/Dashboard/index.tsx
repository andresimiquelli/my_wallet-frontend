import React from "react";

import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Maria', label: 'Maria'},
        {value: 'João', label: 'João'},
        {value: 'Marcos', label: 'Marcos'},
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard Control" lineColor="#FFF">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard;