var tab=[-2,1,4];
var premier = soustraire(tab[0]);
var dernier = soustraire(tab[tab.length -1]);
function soustraire(X)
{
    if(X >=0)
    {
        return resultat = X-2;
    }else
    {
        return resultat = "Nombre negatif";
    }
    
}

function affiche()
{
    alert(premier);
    alert(dernier);
}