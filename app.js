const data = new Countries()
const ui = new UI()
data.getData()
.then(data => {
    data.forEach(item => {
        if(item.name.common === "Belgium"){
for(let key in item.currencies){
    console.log(item.currencies[key].name)
}
        }
    })
    ui.show(data)

}
    )

document.querySelector('.list-main').addEventListener('click',function(e){
document.querySelector('.list-main .list').classList.toggle('show')

})
