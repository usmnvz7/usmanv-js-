  var age = +prompt("Введите ваш возраст");
  if(age <= 18 ){
    alert("Вы еще молоды, Вам нужно учиться");
  } else if(age >18 && age <=50){
    alert("Вам нужно работать");
  } else if (age > 50 && age <=59){
    alert("Вам скоро на пенсию")
  }else if( age >59 && age <=100){
    alert("Вы на пенсии")
  }else{
    alert("Что-то пошло не так")
  }

var time = +prompt("Введите время ");
switch(time ){
    case 0:
    case 1:
    case 2:
      case 3:
     case 4:
  case 5:
 case 6:
     alert(time +  " часа ночи" )
 break;
 case 7:
    case 8:
        case 9:
            case 10:
                alert( time + " часов утра")
            break;
                case 11:
                    alert( " 11 часов дня" )
                    break;
                    case 12:
                        alert( " 12 часов дня")
                        break;
                        case  13:
                            alert( " 1 часа дня")
                            break;
                            case 14:
                                alert( " 2 часа дня")
                            break;
                                case 15:
                                    alert( " 3 часа дня")
                            break;
                                    case 16:
                                        alert( " 4 часа дня")
                            break;
                                        case 17:
                                            alert( " 5 часа дня")
                            break;
                                       
                          case 18:
                            alert(" 6  часов вечера")
                            break;
                             case 19:
                            alert(" 7  часов вечера")
                            break;
                             case 20:
                            alert(" 8  часов вечера")
                            break;
                             case 21:
                            alert(" 9  часов вечера")
                            break;
                             case 22:
                            alert(" 10 часов вечера")
                            break;
                             case 23:
                            alert(" 11 часов вечера")
                            break;
                            default:
                                alert("Такого часа не существует")
}

var x = +prompt("Введите  первое число:");
var y = +prompt("Введите  второе число");
var z = +prompt("Введите  третье число");
var result = (x+y+z)/3
alert("Среднее число: " + result);

 if(x > y && !isNaN(x) && !isNaN(y) && !isNaN(z) && x < z){
    console.log("Первое число больше второго и третьего")
 }else if ( y < x && !isNaN(x) && !isNaN(y) && !isNaN(z) && y < z){
    console.log("Второе число больше первого и третьего")
 } else if ( z < x && !isNaN(x) && !isNaN(y) && !isNaN(z) && z < y){
    console.log("Третье число больше первого и второго")}
   else{
    alert( " Что-то пошло не так")
   }