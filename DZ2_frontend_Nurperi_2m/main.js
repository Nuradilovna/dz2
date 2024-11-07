var arr = [10,20,30,50,235,1000]
let num;
for (let num of arr){
    if(num.toString()[0] === '1' || num.toString()[0] === '2' || num.toString()[0] === '5'){
        console.log(num)
    }
}




for(var i = 20; i >= 0; i--) {
     console.log(i);
}


var traffic_light = prompt("Выбирите цвет : красный, желтый и зеленый")
switch(traffic_light) {
    case "красный".toLowerCase().trim():
        alert("stop")
        break;
    case "желтый".toLowerCase().trim():
        alert("wait")
        break;
    case "зеленый".toLowerCase().trim():
        alert("go")
        break;
    default:
        alert("напишите цвет : красный , желтый или зеленый");

}