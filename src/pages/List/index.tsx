import React from "react";

import {Container, Content, Filters} from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

const List: React.FC = () => {
    const months = [
        {value: 7, label: "Julho"},
        {value: 8, label: "Agosto"},
        {value: 9, label: "Setembro"}
    ];

    const years = [
        {value: 2021, label: "2021"},
        {value: 2022, label: "2022"},
        {value: 2023, label: "2023"}
    ];

    return (
        <Container>
            <ContentHeader title="List" lineColor="#E44C4E">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
                <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
            </Filters>

            <Content>
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="Debitada automaticamente"
                    amount="R$ 160,00"
                />
            </Content>
        </Container>
    )
}

export default List;