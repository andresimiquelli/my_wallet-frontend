import React, { useMemo, useState } from "react";

import { Container, Content } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import WalletCard from "../../components/WalletCard";

import {listOfMonths} from "../../utils/Months";
import {listOfYears} from "../../utils/Years";
import expenses from "../../repository/expenses";
import gains from "../../repository/gains";

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth()+1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#f7931b">
                <SelectInput 
                    options={listOfMonths} 
                    onChange={(e) => {setMonthSelected(Number(e.target.value))}}
                    defaultValue={monthSelected}/>
                <SelectInput 
                    options={listOfYears} 
                    onChange={(e) => {setYearSelected(Number(e.target.value))}}
                    defaultValue={yearSelected}/>
            </ContentHeader>

            <Content>
                <WalletCard 
                    title="Saldo"
                    amount={150.5}
                    footerLabel="Atualizado com base nas receitas e despesas"
                    icon="dollarSign"
                    color="#4e41f0"
                />

                <WalletCard 
                    title="Receitas"
                    amount={5000.0}
                    footerLabel="Atualizado com base nas receitas e despesas"
                    icon="arrowUp"
                    color="#f7931b"
                />

                <WalletCard 
                    title="Despesas"
                    amount={4850.0}
                    footerLabel="Atualizado com base nas receitas e despesas"
                    icon="arrowDown"
                    color="#e44c4e"
                />
            </Content>
        </Container>
    )
}

export default Dashboard;