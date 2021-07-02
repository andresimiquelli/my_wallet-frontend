export const formatDate = (date: string): string => {
    const fDate = new Date(date);
    const day = fDate.getDay();
    const month = fDate.getMonth()+1;
    const year = fDate.getFullYear();

    return `${day < 10 ? "0"+day: day}/${month < 10 ? "0"+month: month}/${year}`;
}