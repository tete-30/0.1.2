function Mercado(valor, convenio, cartao) {
    if (valor <= 100) {
    
    if (convenio && cartao) {
        let desconto = valor * 0.15

        let compra = valor - desconto
        return compra
    } else {
        if (convenio || cartao) {
            let desconto = valor * 0.10

            let compra = valor - desconto
            return compra
        } else {
            return valor;
        }
    }
} else {
    return valor
}
}
console.log (Mercado(50, true, false));