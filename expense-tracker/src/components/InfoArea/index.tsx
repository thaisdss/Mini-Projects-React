import { formCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
import * as C from "./styles";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export function InfoArea({ currentMonth, onMonthChange, income, expense }: Props) {
    function handlePrevMonth() {
        let [year, month] = currentMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);

        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    function handleNextMonth() {
        let [year, month] = currentMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);

        currentDate.setMonth( currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem  title="Receita"  value={income} />
                <ResumeItem  title="Despesa" value={expense} />
                <ResumeItem  
                title="Balanço"  
                value={income - expense} 
                color={(income - expense) < 0 ? "red" : "green"}
                />
            </C.ResumeArea>
        </C.Container>
    );
}