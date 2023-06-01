const data = new Countries()
const ui = new UI()
data.getData()
.then(data => {
    data.forEach(item => {
        if(item.name.common === "Belgium"){
            console.log(item)
    }
    })
    ui.show(data)

}
    )

document.querySelector('.list-main').addEventListener('click',function(e){
document.querySelector('.list-main .list').classList.toggle('show')

})


function currency(data){
    for (let item in data){
        return data[item].name
    }
}