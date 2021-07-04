import React, { useMemo, useState } from "react";

import { Container, Content } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import WalletCard from "../../components/WalletCard";
import MessageBox from "../../components/MessageBox";
import PieChart from "../../components/PieChart";
import HistoryBox from "../../components/HistoryBox";
import BarChart from "../../components/BarChart";

import {listOfMonths} from "../../utils/Months";
import {listOfYears} from "../../utils/Years";
import expenses from "../../repository/expenses";
import gains from "../../repository/gains";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import grinning from "../../assets/grinning.svg";

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth()+1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth()+1;

            if(month === monthSelected && year === yearSelected){
                total += Number(item.amount);
            }
        });

        return total;
    },[monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth()+1;

            if(month === monthSelected && year === yearSelected){
                total += Number(item.amount);
            }
        });

        return total;
    },[monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains-totalExpenses;
    },[totalGains, totalExpenses]);

    const message = useMemo(() => {
        let result = {
            title: "",
            description: "",
            icon: "",
            footerText: ""
        }

        if(totalBalance < 0){
            result.title = "Cuidado!";
            result.icon = sadImg;
            result.description = "Infelizmente, você não se saiu bem este mês."
            result.footerText = "Mantenha controle sobre seus gastos. O endividamento é uma das maiores causas de sucídio.";
        }else{
            if(totalBalance < (totalGains*0.30)){
                result.title = "Ufa!";
                result.icon = grinning;
                result.description = "Sua carteira está com saldo positivo, mas foi raspando."
                result.footerText = "Não relaxe tanto assim, estude como pode aprimorar seu controle de gastos para sobrar mais no fim do mês.";
            }else{
                result.title = "Parabéns!";
                result.icon = happyImg;
                result.description = "Você está fazendo um ótimo trabalho."
                result.footerText = "Continue assim e sua vida financeira ficará cada vez melhor. Já pode planejar aquela viagem do fim do ano.";
            }
        }
        return result
    },[totalBalance, totalGains]);

    const relationExpensesPerGains = useMemo(() => {
        const total = totalGains+totalExpenses;
        const percentGains = (totalGains/total)*100;
        const percentExpenses = (totalExpenses/total)*100;

        const data = [
            {
                title: "Receitas",
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: "#f7931b"
            },
            {
                title: "Despesas",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0,
                color: "#e44c4e"
            },
        ]

        return data
    }, [totalExpenses, totalGains]);

    const relationExpensesRecurrentPerEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth()+1;

            return month === monthSelected && year === yearSelected;
        }).forEach((expense) => {
            if(expense.frequency === "recorrente"){
                return amountRecurrent += Number(expense.amount);
            }

            if(expense.frequency === "eventual"){
                return amountEventual += Number(expense.amount);
            }
        })

        let total = amountRecurrent+amountEventual;
        let percentEventual = Number(((amountEventual/total)*100).toFixed(0));
        let percentRecurrent = Number(((amountRecurrent/total)*100).toFixed(0));

        return [
            {
                title: "Recorrentes",
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: "#f7931b"
            },
            {
                title: "Eventuais",
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: "#4e41f0"
            }
        ]
    },[monthSelected, yearSelected]);

    const relationGainsRecurrentPerEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth()+1;

            return month === monthSelected && year === yearSelected;
        }).forEach((gain) => {
            if(gain.frequency === "recorrente"){
                return amountRecurrent += Number(gain.amount);
            }

            if(gain.frequency === "eventual"){
                return amountEventual += Number(gain.amount);
            }
        })

        let total = amountRecurrent+amountEventual;
        let percentEventual = Number(((amountEventual/total)*100).toFixed(0));
        let percentRecurrent = Number(((amountRecurrent/total)*100).toFixed(0));
        return [
            {
                title: "Recorrentes",
                amount: amountRecurrent,
                percent: percentRecurrent? percentRecurrent : 0,
                color: "#f7931b"
            },
            {
                title: "Eventuais",
                amount: amountEventual,
                percent: percentEventual? percentEventual : 0,
                color: "#4e41f0"
            }
        ]
    },[monthSelected, yearSelected]);

    const historyData = useMemo(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();


        return listOfMonths.map((month,index) => {            
            let amountGains: number = 0;
            gains.forEach((item) => {
                let date = new Date(item.date);
                let month = date.getMonth();
                let year = date.getFullYear();

                if(month === index && year === yearSelected){
                    amountGains += Number(item.amount);
                }
            });

            let amountExpenses: number = 0;
            expenses.forEach((item) => {
                let date = new Date(item.date);
                let month = date.getMonth();
                let year = date.getFullYear();

                if(month === index && year === yearSelected){
                    amountExpenses += Number(item.amount);
                }
            });

            return {
                month: month.label.substring(0,3),
                monthNumber: month.value,
                amountGains: amountGains,
                amountExpenses: amountExpenses
            }
        }).filter(item => {
            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        })
    },[yearSelected]);

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
                    amount={totalBalance}
                    footerLabel="Atualizado com base nas receitas e despesas"
                    icon="dollarSign"
                    color="#4e41f0"
                />

                <WalletCard 
                    title="Receitas"
                    amount={totalGains}
                    footerLabel="Atualizado com base nas receitas e despesas"
                    icon="arrowUp"
                    color="#f7931b"
                />

                <WalletCard 
                    title="Despesas"
                    amount={totalExpenses}
                    footerLabel="Atualizado com base nas receitas e despesas"
                    icon="arrowDown"
                    color="#e44c4e"
                />

                <MessageBox 
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChart 
                    title={"Relação"}
                    data={relationExpensesPerGains}
                />

                <HistoryBox data={historyData} lineColorExpenses="#e44c4e" lineColorGains="#f7931b"/>

                <BarChart title="Receitas" data={relationGainsRecurrentPerEventual}/>
                <BarChart title="Despesas" data={relationExpensesRecurrentPerEventual}/>
                
            </Content>
        </Container>
    )
}

export default Dashboard;