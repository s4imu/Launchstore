module.exports = {
    date(timestamp) {
        const date = new Date(timestamp)

       const year = date.getFullYear()  
       const month = `0${date.getMonth() + 1}`.slice(-2)
       const day = `0${date.getDate()}`.slice(-2)
       let hour = date.getHours()
       let minutes = date.getMinutes()

       if(minutes < 10){
           minutes = `0` + minutes
       }

       if(hour > 12){
           hour -= 12
           hour = `${hour}:${minutes} PM`
       } else if(hour === 0){
           hour = `12:${minutes} AM`
       } else {
           hour = `${hour}:${minutes} AM`
        }
       
        return  {
            day,
            month,
            year,
            hour,
            minutes,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format:  `${day}/${month}/${year}`,
            formatUS:  `${month}/${day}/${year}`
        }
    }, 
    price(value){
        return value = value.replace(/\D/g,"")
    },
    formatPrice(value){
        return value = new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD'
        }).format(value/100)
    }
}