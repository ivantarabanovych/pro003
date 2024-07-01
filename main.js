let code = "BC";

switch (code) {
  case "BC":
    console.log("Львівська область");
    break;
  case "AA":
    console.log("Київська облість");
    break;
  case "AC":
    console.log("Волинська область");
    break;
  case "BO":
    console.log("Тернопільська область");
    break;
  case "AE":
    console.log("Дніпропетровська область");
    break;
  default:
    console.log("Такої області не існує");
}

// тест на випадок якщо такого коду не існує зі списку

code = "AE";

switch (code) {
    case "BC":
        console.log("Львівська область");
        break;
    case "AA":
        console.log("Київська облість");
        break;
    case "AC":
        console.log("Волинська область");
        break;
        default:
        console.log("Такої області не існує");
}

