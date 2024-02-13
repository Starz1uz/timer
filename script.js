const trigers = document.querySelectorAll('button[data-func]')
const timeTable = document.querySelectorAll('span[data-t]')

let stopwatch = {
    min: 0,
    sec: 0,
    mlsec: 0
}
let interval

function setTimer(table, timeType) {
    if(++stopwatch[timeType] < 10) {
        timeTable[table].innerHTML = "0" + stopwatch[timeType] 
    } else {
        timeTable[table].innerHTML = stopwatch[timeType]
    }
    // timeTable[table].innerHTML = ++stopwatch[timeType] < 10 ? "0" + stopwatch[timeType] : stopwatch[timeType]
}

trigers.forEach(btn => {
    btn.onclick = () => {
        let action = btn.getAttribute('data-func')

        switch (action) {
            case "start":
                clearInterval(interval)

                interval = setInterval(() => {
                    // 3
                    if (stopwatch['sec'] >= 59) {
                        stopwatch['sec'] = 0
                        setTimer(0, 'min')
                    }
                    // 2
                    if (stopwatch['mlsec'] >= 99) {
                        stopwatch['mlsec'] = 0
                        setTimer(1, 'sec')
                    }
                    // 1
                    setTimer(2, 'mlsec')
                }, 0)
                break;
            case "stop":
                clearInterval(interval)
                break
            case "reset":
                clearInterval(interval)
                stopwatch = {
                    min: 0,
                    sec: 0,
                    mlsec: 0
                }
                timeTable.forEach(el => el.innerHTML = "00")
                break
            default:
                break;
        }
    }
})