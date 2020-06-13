module.exports = {
    date(timestamp) {
        const date = new Date(timestamp)

       const year = date.getUTCFullYear()  
       const month = `0${date.getUTCMonth() + 1}`.slice(-2)
       const day = `0${date.getUTCDate()}`.slice(-2)

        return  {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format:  `${day}/${month}/${year}`
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