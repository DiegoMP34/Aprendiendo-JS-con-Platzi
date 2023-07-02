const regex = /(\d{4})-(\d{2})-(\d{2})/ //-> expresion regular
const matchers = regex.exec('2001-05-15') // devuelve un array con los resultados de la busqueda.
console.table(matchers)
/* 
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2001-05-15' │
│    1    │    '2001'    │
│    2    │     '05'     │
│    3    │     '15'     │
│  index  │      0       │
│  input  │ '2001-05-15' │
│ groups  │  undefined   │
└─────────┴──────────────┘
*/