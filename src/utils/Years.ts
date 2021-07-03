var years = [2020,2021,2022];

export default years;

export const listOfYears = years.map(year => {
    return {value: year, label: year}
})