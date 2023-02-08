const handleYear = () => {
    var date = new Date();
    var cur_year = date.getFullYear();
    const all_year = [];

    for (var i = cur_year; i >= 1905; i--) {
        all_year.push(i);
    }
    return all_year.map((item, index) => (
        <option value={item} key={index}>
            {item}
        </option>
    ));
};

const handleMonth = () => {
    return month.map((item, index) => (
        <option value={item} key={index}>
            {`Tháng ${item}`}
        </option>
    ));
};

const handleDay = (month, year) => {
    var day = new Date(year, month, 0);
    var day_full = day.getDate();
    var array_day = [];

    for (let i = 1; i <= day_full; i++) {
        array_day.push(i);
    }

    return array_day.map((item, index) => (
        <option value={item} key={index}>
            {item}
        </option>
    ));
};

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export { month, handleYear, handleMonth, handleDay };
