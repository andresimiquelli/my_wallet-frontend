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

    const listData = useMemo(() => {
        return type === "income" ? gains : expenses;
    },[type]);

    //Hook UseEffect é disparado, uma única vez se não houver vínculo, quando a tela é carregada.
    useEffect(() => {
        var index = 0;
        const response = listData.map(item => {
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
    },[]);

    return (
        <Container>
            <ContentHeader title={title.text} lineColor={title.color}>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
                <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
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