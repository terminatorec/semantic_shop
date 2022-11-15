const credit = (sum:number) =>{
    let percent = 120
    let finalSum = sum * (percent/100)
    let sumPerMonth = Math.round(finalSum/12)
    return sumPerMonth
}

export default credit