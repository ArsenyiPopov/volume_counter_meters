let place = +prompt('Укажите ко-во мест')

let sumcub = 0
for (let index = 0; index < place; index++) {
    
    let length = +prompt(`${index+1} место, введите ДЛИНУ в см`)
    let width = +prompt(`${index+1} место, введите ШИРИНУ в см`)
    let height = +prompt(`${index+1} место, введите ВЫСОТУ в см`)


    let cub = length * width * height / 1000000
    alert(`Обьем ${index+1} места, в м/куб ${cub}`)
     sumcub = cub + sumcub
}
alert(`Общий обьем ${sumcub} м3`)