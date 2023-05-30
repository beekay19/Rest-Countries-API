const data = new Countries();
let dic = {};
let dic2 = {};
let dic3 = {};

// data.getData().then((data) => {
//   data.forEach(function (item, index) {
//     if (item.borders !== undefined) {
//         list = []
//       item.borders.forEach(function(border){
//         data.forEach(function(mini){
//             if(border === mini.cca3){
//                 list.push(mini.name.common)
//             }
//         })
//         dic[item.name.common] = list
//     })
//     }
// });
// console.log(dic);

// });

data.getData().then(data => {
    data[0].borders.forEach(function(item){
        data.forEach(function(get){
            if(item === get.cca3){
                console.log(get.cca3,get.name.common)
            }
        })
    })
})