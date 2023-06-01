const data = new Countries();
const ui = new UI();
const params = new URL(location.href).searchParams;
const back = document.querySelector('.back-arrow').addEventListener('click', backArrow)


data.moreInfo(params.get("code")).then(data => {
    // console.log(data);
    ui.showData(data[0]);
}) 

function backArrow(e){
    window.history.go(-1)
}