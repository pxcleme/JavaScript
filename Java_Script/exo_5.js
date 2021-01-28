function boucle()
{
    var tab= new Array(3);
    for(var i=0; i < tab.length; i ++)
    {
        tab[i]=i*i;
    }
    alert(tab);
}
function boucle2()
{
    var longueur=prompt("veillez saisir une longueur");
    var tab=new Array;

    for(var i = 0; i < longueur; i++){
        tab[i] = i*i;
    }
    alert(tab);
}