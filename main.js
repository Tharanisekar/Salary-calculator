const hourlyRateInput= document.getElementById('hourlyRate')
const hoursPerDayInput= document.getElementById('hoursPerDay')
const daysPerWeekInput= document.getElementById('daysPerWeek')



const hoursNumE1 = document.getElementById('hours-num')
const daysNumE1 = document.getElementById('days-num')

hourlyRateInput.addEventListener('input',calculateSalary)
hoursPerDayInput.addEventListener('input',calculateSalary)
daysPerWeekInput.addEventListener('input',calculateSalary)

function calculateSalary(){
     const hourlyRate= parseFloat(hourlyRateInput.value)
     const hoursPerDay= parseFloat(hoursPerDayInput.value)
     const daysPerWeek= parseFloat(daysPerWeekInput.value)



     const hourlyAmount = hourlyRate
     const dailyAmount = hourlyRate*hoursPerDay
     const weeklyAmount = dailyAmount*daysPerWeek
     const montlyAmount = weeklyAmount*4
     const annualAmount= montlyAmount*12


     hoursNumE1.innerHTML = hoursPerDayInput.value
     daysNumE1.innerHTML = daysPerWeekInput.value

     displaAmounts(hourlyAmount,dailyAmount,weeklyAmount,montlyAmount,annualAmount)
}

function displaAmounts(hourlyAmount,dailyAmount,weeklyAmount,montlyAmount,annualAmount){
    document.getElementById('hourlyAmount').textContent =` $${hourlyAmount.toFixed(2)}`
    document.getElementById('dailyAmount').textContent =` $${dailyAmount.toFixed(2)}`
    document.getElementById('weeklyAmount').textContent =` $${weeklyAmount.toFixed(2)}`
    document.getElementById('montlyAmount').textContent =` $${montlyAmount.toFixed(2)}`
    document.getElementById('annualAmount').textContent =` $${annualAmount.toFixed(2)}`
}
calculateSalary()