export const Iphones = [

    {id:1, product:'iPhone 8', img:'img/Iphone/8.png', value:'100 USD'},
    {id:2, product:'iPhone 8 Plus', img:'img/Iphone/8plus.png', value:'100 USD'},
    {id:3, product:'iPhone X', img:'img/Iphone/X.png', value:'100 USD'},
    {id:4, product:'iPhone Xs', img:'img/Iphone/Xs.png', value:'100 USD'},
    {id:5, product:'iPhone Xs Max', img:'img/Iphone/XsMax.png', value:'100 USD'},
    {id:6, product:'iPhone Xr', img:'img/Iphone/Xr.png', value:'100 USD'},
    {id:7, product:'iPhone 11', img:'img/Iphone/11.png', value:'100 USD'},
    {id:8, product:'iPhone 11 Pro', img:'img/Iphone/11pro-11promax.png', value:'100 USD'},
    {id:9, product:'iPhone 11 Pro Max', img:'img/Iphone/11pro-11promax.png', value:'100 USD'},
    {id:10, product:'iPhone SE 2020', img:'img/Iphone/SE2020.png', value:'100 USD'},
    {id:11, product:'iPhone 12', img:'img/Iphone/12-12mini.png', value:'100 USD'},
    {id:12, product:'iPhone 12 Mini', img:'img/Iphone/12-12mini.png', value:'100 USD'},
    {id:13, product:'iPhone 12 Pro', img:'img/Iphone/12pro-12promax.png', value:'100 USD'},
    {id:14, product:'iPhone 12 Pro Max', img:'img/Iphone/12pro-12promax.png', value:'100 USD'},
    {id:15, product:'iPhone SE 2022', img:'img/Iphone/SE2022.png', value:'100 USD'},
    {id:16, product:'iPhone 13', img:'img/Iphone/13-13mini.png', value:'100 USD'},
    {id:17, product:'iPhone 13 Mini', img:'img/Iphone/13-13mini.png', value:'100 USD'},
    {id:18, product:'iPhone 13 Pro', img:'img/Iphone/13pro-13promax.png', value:'100 USD'},
    {id:19, product:'iPhone 13 Pro Max', img:'img/Iphone/13pro-13promax.png', value:'100 USD'},
    {id:20, product:'iPhone 14', img:'img/Iphone/14-14plus.png', value:'100 USD'},
    {id:21, product:'iPhone 14 Plus', img:'img/Iphone/14-14plus.png', value:'100 USD'},
    {id:22, product:'iPhone 14 Pro', img:'img/Iphone/14pro.png', value:'100 USD'},
    {id:23, product:'iPhone 14 Pro Max', img:'img/Iphone/14promax.png', value:'100 USD'},


]

const Questions = [
    {id:1, question: 'Selecciona la memoria de tu celular', 
    answers:[
        '64GB', '128GB', '256GB']},
    {id:2, question: '¿En que condicion se encuentra la Pantalla?',
    answers:[
        'Mala', 'Buena', 'Excelente' 
    ]},
    {id:3, question: '¿En que condicion se encuentran los latarales y el vidrio trasero?',
    answers:[
        'Mala', 'Buena', 'Excelente'
    ]},
    {id:4, question: '¿Cual es la condicion de la bateria?',
    answers:[
        'Superior a 85%', 'Inferior a 85%'
    ]},
    {id:5, question: '¿Esta funcional totalmente?',
    answers:[
        'Si', 'No'
    ]}
]


export const getProducts = () => {
    return new Promise((resolve) => {
            resolve(Iphones)
    })
}

export default Questions;
