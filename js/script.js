import fetchData from './fetchData.js'

const data = await fetchData()

const optionDaily = document.querySelector('.daily-report')
const optionWeekly = document.querySelector('.weekly-report')
const optionMonthly = document.querySelector('.monthly-report')

const cards = document.querySelectorAll('.category-card')
const currentData = document.querySelectorAll('.current-data')
const previousData = document.querySelectorAll('.previous-data')

optionDaily.addEventListener('click', showDailyData)
optionWeekly.addEventListener('click', showWeeklyData)
optionMonthly.addEventListener('click', showMonthlyData)

function status(element, previous1, previous2) {
  previous1.classList.remove('option-active')
  previous2.classList.remove('option-active')
  element.classList.add('option-active')
}
function showDailyData() {
  cards.forEach((card) => {
    for (let i = 0; i < data.length; i++) {
      currentData[i].textContent =
        data[i].timeframes.daily.current +
        (data[i].timeframes.daily.current > 1 ? 'hrs' : 'hr')
      previousData[i].textContent =
        'Yesterday ' +
        '- ' +
        data[i].timeframes.daily.previous +
        (data[i].timeframes.daily.current > 1 ? 'hrs' : 'hr')
    }
  })
  status(optionDaily, optionMonthly, optionWeekly)
}

showDailyData()
function showWeeklyData() {
  cards.forEach((card) => {
    for (let i = 0; i < data.length; i++) {
      currentData[i].textContent =
        data[i].timeframes.weekly.current +
        (data[i].timeframes.weekly.current > 1 ? 'hrs' : 'hr')
      previousData[i].textContent =
        'Last Week ' +
        '- ' +
        data[i].timeframes.weekly.previous +
        (data[i].timeframes.weekly.current > 1 ? 'hrs' : 'hr')
    }
  })
  status(optionWeekly, optionMonthly, optionDaily)
}

function showMonthlyData() {
  cards.forEach((card) => {
    for (let i = 0; i < data.length; i++) {
      currentData[i].textContent =
        data[i].timeframes.monthly.current +
        (data[i].timeframes.monthly.current > 1 ? 'hrs' : 'hr')
      previousData[i].textContent =
        'Last Week ' +
        '- ' +
        data[i].timeframes.monthly.previous +
        (data[i].timeframes.monthly.current > 1 ? 'hrs' : 'hr')
    }
  })
  status(optionMonthly, optionDaily, optionWeekly)
}
