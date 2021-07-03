import React from "react";
import {PieChart as Chart, Pie, Cell, ResponsiveContainer} from "recharts";

import { Container, SideLeft, SideRight, LegendContainer, Legend } from "./styles";

interface IPieChart {
    data: {
        title: string;
        value: number;
        percent: number;
        color: string;  
    }[];
    title: string;
}

const PieChart: React.FC<IPieChart> = (props) => (
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
                <ResponsiveContainer width="100%" height="100%">
                    <Chart>
                        <Pie data={props.data} dataKey="percent">
                            {
                                props.data.map((item) => (
                                    <Cell key={item.title} fill={item.color}/>
                                ))
                            }
                        </Pie>
                    </Chart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
);

export default PieChart;