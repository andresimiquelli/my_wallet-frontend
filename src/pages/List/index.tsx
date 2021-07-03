import React, {useEffect, useMemo} from "react";

import {Container, Content, Filters} from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from "../../repository/gains";
import expenses from "../../repository/expenses";
import { useState } from "react";

import {formatCurrency} from "../../utils/formatCurrency";
import {formatDate} from "../../utils/formatDate";
import listOfMonths from "../../utils/Months";

interface IData{
    id: number,
    description: string;
    amountFormatted: string;
    dateFormatted: string;
    frequency: string;
    tagColor: string;
};

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
};

const List: React.FC<IRouteParams> = ({match}) => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth()+1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [frequencySelected, setFrequencySelected] = useState<string[]>(['recorrente','eventual']);

    const {type} = match.params;
    const title = useMemo(() => {
        return type === "income" ? {
            text: "Receitas",
            color: "#F7931B"
        } : {
            text: "Despesas",
            color: "#E44C4E"
        };
    }, [type]);

    const years = [
        {value: 2020, label: "2020"},
        {value: 2021, label: "2021"},
        {value: 2022, label: "2022"},
        {value: 2023, label: "2023"}
    ];

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {value: index+1, label: month}
        });
    },[]);

    const listData = useMemo(() => {
        return type === "income" ? gains : expenses;
    },[type]);

    const filterByFrequency = (frequency: string) => {
        const alreadySelected = frequencySelected.findIndex(item => item === frequency);
        if(alreadySelected >= 0){
            const filtered = frequencySelected.filter(item => item != frequency);
            setFrequencySelected(filtered);
        }else{
            setFrequencySelected((prev) => [...prev, frequency]);
        }
    }

    //Hook UseEffect é disparado, uma única vez se não houver vínculo, quando a tela é carregada.
    useEffect(() => {

        const filtered = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth()+1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected && frequencySelected.includes(item.frequency)
        });

        var index = 0;
        const response = filtered.map(item => {
             index++;
            return {
                id: index,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                dateFormatted: formatDate(item.date),
                frequency: item.frequency,
                tagColor: item.frequency === "recorrente"? "#4E41F0" : "#E44C4E"
            }
        });

        setData(response);
    },[monthSelected, yearSelected, frequencySelected]);

    return (
        <Container>
            <ContentHeader title={title.text} lineColor={title.color}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>

            <Filters>
                <button 
                    type="button" 
                    className={`tag-filter tag-filter-recurrent
                                ${frequencySelected.includes('recorrente') && 'tag-active'}`}
                    onClick={()=> filterByFrequency('recorrente')}
                >Recorrentes</button>
                <button 
                    type="button" 
                    className={`tag-filter tag-filter-eventual
                    ${frequencySelected.includes('eventual') && 'tag-active'}`}
                    onClick={()=> filterByFrequency('eventual')}
                >Eventuais</button>
            </Filters>

            <Content>
                {
                    data.map(item => {
                        return (
                            <HistoryFinanceCard 
                                key={item.id}
                                tagColor={item.tagColor}
                                title={item.description}
                                subtitle={item.dateFormatted}
                                amount={item.amountFormatted}
                            />
                        )
                    })
                }
                
            </Content>
        </Container>
    )
}

export default List;