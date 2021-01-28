function jour_de_la_semaine()
{
    var Day;
    Day = new Date();
    Day.getDay();

    switch(Day.getDay()) 
    {
    case 0:
       alert("on est Dimanche");
      break;
    case 1:
      alert("on est Lundi");
      break;
    case 2:
        alert("on est Mardi");
      break;
    case 3:
        alert("on est Mercredi");
      break;
    case 4:
        alert("on est Jeudi");
      break;
    case 5:
        alert("on est Vendredi");
      break;
    case 6:
        alert("on est Samedi");
      break;
    }
}