const Mask = {
    apply(input, func){
        setTimeout(function(){
            input.value = Mask[func](input.value)
        }, 1)
    },
    formatUSD(value){
        value = value.replace(/\D/g,"")

        return value = new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD'
        }).format(value/100)

    }
}