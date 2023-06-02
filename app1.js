const data = new Countries();
const ui = new UI();
const params = new URL(location.href).searchParams;
const back = document.querySelector('.back-arrow').addEventListener('click', backArrow)

function backArrow(e){
    window.history.go(-1)
}

data.moreInfo(params.get("code")).then(data => {
    // console.log(data);
    ui.showData(data.data[0]);
    ui.showBorders(data.data[0],data.allData)
    // data.data[0].borders.forEach(item =>{
    //     const all = data.allData
    //     all.forEach(border =>{
    //         if(item === border.cca3){
    //             console.log(border.name.common)
    //         }

    //     })
    // })
}) 

