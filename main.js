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

var num1 = +prompt("Введите 1-число: например 3")
var num2 = +prompt("Введите 2-число: например 2")
var num3 = +prompt("Введите 3-число: например 1")

if(num2 < num1 && num1 < num3){          //num2 < num1 < num3
    alert("Это " + num1)
} else if (num1 < num2  && num2 < num3){ //num1 < num2 < num3
    alert("Это " + num2)
}else if(num1 < num3 && num3 < num2) { //num1 < num3 < num2
    alert("Это " + num3)
}else if(num3 < num1 && num1 < num2){ //num2 > num1 > num3
    alert("Это " + num1)
}else if(num3 < num2 && num2 < num1){ //num1 > num2 > num3
    alert("Это " + num2)
}else if(num2 < num3 && num3 < num1){ //num1 > num3 > num2
    alert("Это " + num3)
}else if(num1 == num2 || num1 == num3 || num2 == num3){
    alert("Нужно ввести разные числа..!")
}else {
    alert("ЧТо-то пошло не так..")
}
