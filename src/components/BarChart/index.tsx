import React from "react";
import { ResponsiveContainer , BarChart as Chart, Bar, Cell, Tooltip } from "recharts";
import { formatCurrency } from "../../utils/formatCurrency";

import {Container, SideLeft, SideRight, LegendContainer, Legend} from "./styles";

interface IBarChart {
    title: string;
    data: {
        title: string;
        amount: number;
        percent: number;
        color: string;
    }[]
}

const BarChart: React.FC<IBarChart> = (props) => {
    return (
        <Container>
            <SideLeft>
                <h2>{props.title}</h2>
                <LegendContainer>
                    {
                        props.data.map((item, index) => (
                            <Legend color={item.color} key={index}>
                                <div>{item.percent.toFixed(0)}%</div>
                                <span>{item.title}</span>
                            </Legend> 
                        ))
                    }                                       
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <Chart data={props.data}>
                        <Tooltip cursor={{fill: 'none'}} formatter={(value: string) => formatCurrency(Number(value))}/>
                        <Bar dataKey="amount" name="Valor">
                            {
                                props.data.map((item) => (
                                    <Cell 
                                        key={item.title}
                                        fill={item.color}
                                    />
                                ))
                            }
                        </Bar>
                        
                    </Chart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    )
}

export default BarChart;