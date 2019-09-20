 ## Introduction

### Architecture de Von Neumann
La quasi totalité des ordinateurs actuels, du smartphone au serveur, suivent le modèle de l'architecture de Von Neumann.

```mermaid
graph LR
A[I/O] --> B[CPU] 
B --> A
B --> C[Mémoire]
C --> B
````

> (Si le schéma précédent ne s'affiche pas, vous pouvez copier le script
> dans cet éditeur : https://mermaidjs.github.io/mermaid-live-editor )

I/O : entrées/sorties. Par exemple : clavier, souris, écran, autres périphériques, ...
CPU : le microprocesseur
Mémoire : elle contient à la fois les données et les programmes les manipulant.

Cette architecture se distingue des précédentes en utilisant une mémoire unique partagée entre les données et les programmes.

### Représentation des données en mémoire
La mémoire ne contient qu'une suite de 0 et de 1.
Une valeur (0 ou 1) est nommé un "bit", aussi bien en français qu'en anglais. Un regroupement de 8 valeurs est nommé "octet" en français et "byte" en anglais.

Pour répondre à nos besoins, il est nécessaire de représenter des données plus complexes sous la forme de suite de 0 et de 1, comme par exemple des nombres ou des chaînes de caractères.

#### Les nombres
Pour les nombres, une conversion existe entre ce que l'on nomme la base dix et la base deux.
La base 10 utilise les chiffres de 0 à 9. Un nombre n'est autre que l'addition de multiples de puissances de 10 :
	146 = 1*10² + 4*10¹ + 6*10º

La base 2 utilise les chiffres 0 et 1. Un nombre est alors l'addition de multiples de puissances de 2 :
	46 = 32 + 8 + 4 + 2 = 1*2^5 + 0*2 ^4 + 1*2³ + 1*2² + 1*2¹ + 0*2º
	soit en binaire 101110
	
En développement, on utilisera de temps à autre les nombres hexadécimaux. Il s'agit de la base 16, où les chiffres sont 0 à 9 et les lettres A à F (A = 10, B = 11, ... , F = 15). Cette fois un nombre est l'addition de multiples de puissances de 16.
Le calcul étant légèrement plus difficile, une astuce est utilisée pour convertir un nombre binaire en nombre hexadécimal :

 - On écrit le nombre binaire par groupe de 4 chiffres : 101110 -> 0010 1110
 - Chaque groupe de 4 est alors traduit en chiffre hexadécimal : 0010 -> 2 , 1110 -> E
 - Le nombre 46 s'écrit donc 00101110 en binaire et 2E en hexadécimal.

#### Les chaînes de caractères
Pour représenter les chaînes de caractères en mémoire, chaque caractère est associé à un code unique. Plusieurs tables de codage de caractères existent. Les systèmes modernes utilisent Unicode qui permet de représenter les caractères de nombreux langages et non uniquement les caractères de l'alphabet latin.

Les tables de codage de caractères Unicode souvent utilisées sont UTF8 et UTF16.

Une ancienne table de codage non Unicode très répandue est ASCII.

#### Les langages de programmation
Ils existent de très nombreux langages de programmations, du plus proche de la machine au plus éloignés :

 - Langage machine : instructions compréhensible par le CPU sous forme binaire.
 - Assembleur : représente le langage machine d'un façon plus lisible pour les humains.
 - Langages plus évolués, appelés de troisième et quatrième génération.

Un outil nommé compilateur traduit les langages autres que le langage machine en langage machine.
Parmi les langages évolués, on pourra citer :
 
 - C
 - C++
 - Java / C# / Python / JavaScript

Ces 4 derniers ont la particularité d'être compilés vers un langage intermédiaire ( bytecode ) qui sera interprété ou compilé à la volée ( JIT : Just In Time) par une machine virtuelle.

Une machine virtuelle offre des avantages tels que la gestion automatique de la mémoire, au prix souvent de performances légèrement moindre. Un élément nommé Garbage Collector libère la mémoire lorsqu'elle n'est plus utilisée. Cette libération doit être effectuée par le développeur dans des langages tels que C et C++.

#### Algorithmie
Deux écoles existent pour l'enseignement de l'algorithmie : utiliser du pseudo code ou utiliser un langage de programmation réel. Je m'inscris dans ce second choix et nous utiliserons JavaScript pour les différents exercices.
	 
## Fondamentaux JavaScript

> Remarque : ceci n'est pas un cours de JavaScript. Nous utiliserons uniquement les éléments nécessaires pour enseigner les bases de
> l'algorithmie. JavaScript est un langage bien plus riche que ce que
> vous verrez dans le cadre de ce cours.

Les énoncés des exercices sont disponibles ici : https://github.com/smallbard/Algorithmic-course/blob/master/Enonces.txt
Les corrections ici : https://github.com/smallbard/Algorithmic-course/tree/master/Corrections

### Variables
Une variable est une zone de mémoire à laquelle un nom est donné. Cette zone va nous permettre de stocker des valeurs.
#### Déclaration
La déclaration d'une variable s'effectue ainsi en JavaScript :

    var maVariable = 55;

Le nom d'une variable doit commencer par une lettre ou bien le caractère _ . Le reste du nom doit être des lettres et/ou des chiffres. Les espaces ne sont pas autorisés dans un nom.
L'opérateur = est ici l'opérateur d'affectation : il a pour effet de stocker son opérande de droite (55 dans notre exemple) dans son opérande de gauche (maVariable dans notre exemple).

> Remarque : On veillera dès maintenant à correctement nommer les
> variables. Cela facilitera grandement la lecture et la compréhension
> des programmes. Il est important de penser à la maintenabilité des
> programmes, c'est à dire la facilité de les faire évoluer et de les
> corriger par la suite. Un programme est plus souvent lu qu'écrit!

Le nommage est également une histoire de style. Ici maVariable est écris sous la forme camelCase : la première lettre est en minuscule et chaque mot distinct ensuite commence par une majuscule.
Il était également possible de l'écrire en PascalCase : MaVariable, où chaque mot comment par une majuscule.
Bien souvent les équipes de développement s'accorde sur le format utilisé et celui-ci sera toujours appliqué. Un style uniforme favorise la maintenabilité du programme.

#### Utilisation
La variable ainsi déclarée peut ensuit être utilisée dans le reste du programme. Par exemple pour initialiser une seconde variable :

    var total = maVariable + 10;

On notera que le mot clé var est utilisé uniquement pour les déclarations et non répété pour l'utilisation de la variable.

#### Types de données
Une variable peut accepter différents types de données :

 - des nombres entiers, par exemple 55
 - des nombres à virgules, par exemple : 3.14 (on notera l'usage du point et non de la virgule comme en français)
 - des chaînes de caractères : "bonjour", 'bonjour'. Délimitées par des guillemets simples ou doubles au choix.
 - les valeurs vrai ou faux que l'on nomme booléen. Ces valeurs sont notés true et false en JavaScript.
 - d'autres types que nous détaillerons plus tard.

### Entrées / sorties
Pour les premiers exercices, deux fonctions sont utilisées :

 - prompt : pour demander une saisie à l'utilisateur.
 - alert : pour afficher un message à l'utilisateur.

Une fonction est un morceaux de programme réutilisable. On appelle une fonction pour qu'elle s'exécute. Elle peut attendre des paramètres ( c'est à dire des données en entrée ) et elle peut retourner une valeur si nécessaire à la fin de son exécution.

Demander une valeur à l'utilisateur s'effectue ainsi :

    var saisie = prompt('Veuillez saisir une valeur');

Les parenthèses sont ici l'opérateur d'appel. Les valeurs des paramètres attendues par la fonction sont placées entre ces parenthèses.

Afficher une valeur s'effectue comme ceci :

    alert('Le résultat est ' + resultat);

La fonction alert ne retourne aucune valeur, contrairement à prompt.

### Fonctions de conversion
JavaScript réalise implicitement des conversions entre les différents types de données lorsque nécessaire. Malheureusement ce n'est pas toujours le comportement attendu qui se produit. Il est donc souvent nécessaire d'effectuer des conversions explicitement.
Pour cela différentes fonctions existent :

    var unNombre = 55;
    var uneChaine == unNombre.toString();
    var unAutreNombre = parseFloat("3.14");
    var encoreUnNombre = parseInt("444");

La fonction toString convertit l'élément sur lequel elle s'applique en chaîne de caractères.
La fonction parseFloat convertit une chaîne de caractères en nombre à virgule ou non.
La fonction parseInt convertit une chaîne de caractères en nombre entier.

*Effectuer les exercices 2.1 et 2.2*

### Fonctions personnalisées
Il est tout à fait possible de définir nos propres fonctions pour réutiliser plusieurs fois le même code. La syntaxe est la suivante :

    function maFonctionAddition(premierNombre, secondNombre)
    {
	    var total = premierNombre + secondNombre;
	    return total;
    }
Le nombre de paramètres est libre. Une fonction peut n'avoir aucun paramètre, dans ce cas les parenthèses restent obligatoires mais sont vides.

Le mot clé return a pour effet de terminer la fonction et de retourner une valeur, ici la valeur de la variable total.

Le code précédent définit la fonction, il ne l'exécute pas. Pour qu'elle soit exécutée, il faut l'appelée :

    var resultat = maFonctionAddition(4, 5);

> Remarque : Définir des fonctions personnalisées est très important
> pour la maintenabilité d'un programme. Il est très mauvais de
> copier/coller du code : imaginez suite à une évolution ou une
> correction, devoir modifier du code qui a été dupliqué à plusieurs
> endroits dans un programme de plusieurs milliers de lignes... Outre le
> côté fastidieux de la tâche, le risque de bug est important si une
> partie du code dupliqué est oubliée et non modifiée. Ce principe se
> nomme DRY : Don't Repeat Yourself.

*Effectuer l'exercice 2.3*
