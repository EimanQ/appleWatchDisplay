const dynamicDateInClock = () => {
    const dateNow = new Date();
    let hours = dateNow.getHours(),
        minutes = dateNow.getMinutes(),
        year = dateNow.getFullYear();

    if (hours < 10) {
        hours = `0` + hours;
    };
    if (minutes < 10) {
        minutes = `0` + minutes;
    }
    const fullTime = hours + `:` + minutes;
    const yearToQuery = `since.` + year;
    document.querySelector(`.timeText`).innerHTML = fullTime;
    document.querySelector(`.dateText`).innerHTML = yearToQuery;
    setTimeout("dynamicDateInClock()", 1000);
};
dynamicDateInClock();