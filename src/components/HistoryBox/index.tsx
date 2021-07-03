import React from "react";
import {ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip} from "recharts";
import { formatCurrency } from "../../utils/formatCurrency";

import {Container, Header, ChartContainer, LegendContainer, Legend} from "./styles";

interface IHistoryBox {
    data: {
        month: string;
        monthNumber: string | number;
        amountGains: number,
        amountExpenses: number;
    }[];
    lineColorGains: string;
    lineColorExpenses: string;
}

const HistoryBox: React.FC<IHistoryBox> = (props) => (
    <Container>
        <Header>
            <h2>Histórico</h2>
            <LegendContainer>
                <Legend color="#f7931b">
                    <div></div>
                    <span>Receitas</span>
                </Legend>
                <Legend color="#e44c4e">
                    <div></div>
                    <span>Despesas</span>
                </Legend>
            </LegendContainer>
        </Header>
        
        <ChartContainer>
            <ResponsiveContainer>
                <LineChart data={props.data} margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <Tooltip formatter={(value: string) => formatCurrency(Number(value))}/>
                    <Line 
                        type="monotone"
                        dataKey="amountExpenses"
                        name="Despesas"
                        stroke={props.lineColorExpenses}
                        strokeWidth={5}
                        dot={{r: 5}}
                        activeDot={{r: 7}}
                    />
                    <Line 
                        type="monotone"
                        dataKey="amountGains"
                        name="Receitas"
                        stroke={props.lineColorGains}
                        strokeWidth={5}
                        dot={{r: 5}}
                        activeDot={{r: 7}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
)

export default HistoryBox;