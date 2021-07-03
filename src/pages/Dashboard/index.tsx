import React, { useMemo, useState } from "react";

import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

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
        </Container>
    )
}

export default Dashboard;