console.log("Hello World! This code runs immediately when the file is loaded.");

/*Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins it's initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});*/


var fleurs = [
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Absinthe'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Achillée'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Plaines', 'Loot': 'Aconit'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Lacs et rivières', 'Loot': 'Aer-tubae'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Plages', 'Loot': 'Agrumâcre'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Aigremoine'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Ail des ours'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Forêts', 'Loot': 'Akebia'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Alchemille pourpre'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Lacs et rivières', 'Loot': 'Algua bulla'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Algue amarum'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Lacs et rivières', 'Loot': 'Algues manibus'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Alysson piquante'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Amande (Amandier)'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Amanite du diable'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Amanite panthère'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Amanite phalloïde'},
	{'Climats': 'Tous', 'Raretés': 'Commun', 'Milieux': 'Grottes', 'Loot': 'Amanygdale'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Forêts', 'Loot': 'Amoris'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Amour'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Androsace cristaline'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Anémone'},
	{'Climats': 'Chaud', 'Raretés': 'Très rare', 'Milieux': 'Montagnes', 'Loot': 'Anemone lapis'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Anis'},
	{'Climats': 'Froid', 'Raretés': 'Rarissime', 'Milieux': 'Plaines', 'Loot': 'Antigonon gelata'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Aoneas'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Armoise'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Arnica'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Arundo cibum'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Asarum extenuo'},
	{'Climats': 'Chaud', 'Raretés': 'Très rare', 'Milieux': 'Forêts', 'Loot': 'Aspyrodèle'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Basilic'},
	{'Climats': 'Tous', 'Raretés': 'Peu commun', 'Milieux': 'Montagnes', 'Loot': 'Belladone'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Berce du caucase'},
	{'Climats': 'Chaud', 'Raretés': 'Rare', 'Milieux': 'Montagnes', 'Loot': 'Betula crepitus'},
	{'Climats': 'Tempéré', 'Raretés': 'Très rare', 'Milieux': 'Forêts', 'Loot': 'Beurnoute'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Bladellia'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Bolet sorcier'},
	{'Climats': 'Tempéré', 'Raretés': 'Rarissime', 'Milieux': 'Marais', 'Loot': 'Brachium vera'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Montagnes', 'Loot': 'Bruyère'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Montagnes', 'Loot': 'Busserole satis'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Cactus gelidus canis'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Cardamome'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Montagnes', 'Loot': 'Carex sèche'},
	{'Climats': 'Tempéré', 'Raretés': 'Très rare', 'Milieux': 'Forêts', 'Loot': 'Cassissier'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Centaurea lac'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Cèpe transi'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Champurgeur'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Chanvre'},
	{'Climats': 'Chaud', 'Raretés': 'Rare', 'Milieux': 'Plaines', 'Loot': 'Chanvre orque'},
	{'Climats': 'Tempéré', 'Raretés': 'Très rare', 'Milieux': 'Montagnes', 'Loot': 'Chardon chétif'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Marais', 'Loot': "Cheveux d'elfe"},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Chèvrefeuille'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Chicorée sauvage'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Ciguë'},
	{'Climats': 'Chaud', 'Raretés': 'Rarissime', 'Milieux': 'Volcans', 'Loot': 'Coeur de phoénix'},
	{'Climats': 'Chaud', 'Raretés': 'Rarissime', 'Milieux': 'Marais', 'Loot': 'Coprin bicéphale'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Coquelicot'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Mer', 'Loot': 'Corail azur'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Coton'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Marais', 'Loot': 'Coton saurien'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Cranson'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Montagnes', 'Loot': 'Crocus éternel'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Cynorrhodon'},
	{'Climats': 'Tempéré', 'Raretés': 'Très rare', 'Milieux': 'Forêts', 'Loot': 'Dame venin'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Datura'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Dentelaire'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Disanthus foetor'},
	{'Climats': 'Froid', 'Raretés': 'Rarissime', 'Milieux': 'Montagnes', 'Loot': 'Dobbelt testikler'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Dodrio rosea'},
	{'Climats': 'Chaud', 'Raretés': 'Rare', 'Milieux': 'Forêts', 'Loot': 'Dragon serpentaire'},
	{'Climats': 'Froid', 'Raretés': 'Rare', 'Milieux': 'Forêts', 'Loot': 'Drosera timor'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Échinacée'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Mer', 'Loot': 'Éponge de sang'},
	{'Climats': 'Froid', 'Raretés': 'Rare', 'Milieux': 'Montagnes', 'Loot': 'Espektro'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Estragon'},
	{'Climats': 'Froid', 'Raretés': 'Rare', 'Milieux': 'Plaines', 'Loot': 'Evolvulus furorem'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Faetan'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Falussa'},
	{'Climats': 'Froid', 'Raretés': 'Rare', 'Milieux': 'Montagnes', 'Loot': 'Féerite'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Fenouil'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Déserts', 'Loot': 'Fleur de feu'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Plaines', 'Loot': 'Fougère aigrette'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Fougère bleue'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Fructis armor'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Gentiane'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Geumignon'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Ginseng'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Giroflée odola'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Giroflier'},
	{'Climats': 'Tempéré', 'Raretés': 'Rarissime', 'Milieux': 'Montagnes', 'Loot': 'Girolle perse'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Griffe de chat'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Guarana'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Hedychium'},
	{'Climats': 'Tempéré', 'Raretés': 'Très rare', 'Milieux': 'Forêts', 'Loot': 'Hellébore'},
	{'Climats': 'Tous', 'Raretés': 'Rare', 'Milieux': 'Grottes', 'Loot': 'Helxine'},
	{'Climats': 'Tous', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Houx'},
	{'Climats': 'Tempéré', 'Raretés': 'Très rare', 'Milieux': 'Plaines', 'Loot': 'Hyacinthum skewer '},
	{'Climats': 'Tempéré', 'Raretés': 'Très rare', 'Milieux': 'Marais', 'Loot': 'Hydra ceterum'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Montagnes', 'Loot': 'Iris alpin'},
	{'Climats': 'Froid', 'Raretés': 'Rare', 'Milieux': 'Montagnes', 'Loot': 'Joffrite'},
	{'Climats': 'Tous', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Joubarbe'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Plaines', 'Loot': 'Jusquiame'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Jute'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Kalopanax mutum'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Forêts', 'Loot': 'Larme sublime'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Lavande'},
	{'Climats': 'Tous', 'Raretés': 'Commun', 'Milieux': 'Grottes', 'Loot': 'Lépiote voilée'},
	{'Climats': 'Froid', 'Raretés': 'Très rare', 'Milieux': 'Plaines', 'Loot': 'Liatris voudouh'},
	{'Climats': 'Tous', 'Raretés': 'Commun', 'Milieux': 'Grottes', 'Loot': 'Lichen vipère'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Lierre'},
	{'Climats': 'Froid', 'Raretés': 'Rarissime', 'Milieux': 'Forêts', 'Loot': 'Lilium mutatis'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Lin halfelin'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Marais', 'Loot': 'Linaigrette'},
	{'Climats': 'Chaud', 'Raretés': 'Rarissime', 'Milieux': 'Déserts', 'Loot': 'Lotus doré'},
	{'Climats': 'Froid', 'Raretés': 'Très rare', 'Milieux': 'Forêts', 'Loot': 'Ludwigia sterilis'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Lycopode'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Montagnes', 'Loot': 'Lys arc-en-ciel'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Lacs et rivières', 'Loot': "Lys d'eau"},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Maclura flammabiles'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Mahonia fumus'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Main de Sassoiko'},
	{'Climats': 'Chaud', 'Raretés': 'Rare', 'Milieux': 'Déserts', 'Loot': 'Manibus ambrée'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Médusa caeli'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Mélilot'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Menthe'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Marais', 'Loot': 'Millepertuis'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Mousse de Sphaigne'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Marais', 'Loot': 'Mousse des brumes'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Montagnes', 'Loot': 'Muguet chanteur'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Muguet gelida'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Myosotis'},
	{'Climats': 'Tous', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Myosotis erlea'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Marais', 'Loot': 'Myosotis vaseux'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Montagnes', 'Loot': 'Myrtille amère'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Narcisse glutinum'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Narcisse glutinum'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Niaouli'},
	{'Climats': 'Tous', 'Raretés': 'Peu commun', 'Milieux': 'Grottes', 'Loot': 'Nicotiana iridescente'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Nigritelle sanglante'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Nix ajourée'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Plages', 'Loot': 'Noix azeria'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Plages', 'Loot': 'Noix de coco'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Opuntia'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Ortie'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Ortie agressive'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Plaines', 'Loot': 'Pavot somnifère'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Petite centaurée'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Montagnes', 'Loot': 'Phellodendron adolebitque'},
	{'Climats': 'Chaud', 'Raretés': 'Rare', 'Milieux': 'Plaines', 'Loot': 'Piment viper'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Pissenlit'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Pissenlit opalin'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Plantain'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Pointe de lance'},
	{'Climats': 'Tous', 'Raretés': 'Très rare', 'Milieux': 'Grottes', 'Loot': 'Polytric caverneux'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Populage rose'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Mer', 'Loot': 'Posidonie piment'},
	{'Climats': 'Chaud', 'Raretés': 'Rare', 'Milieux': 'Marais', 'Loot': 'Potentille élégante'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Poterium kline'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Pseudolarix rouge'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Pteridium capillum'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Quassia'},
	{'Climats': 'Tempéré', 'Raretés': 'Très rare', 'Milieux': 'Mer', 'Loot': 'Queue de sirène'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Plaines', 'Loot': 'Raifort'},
	{'Climats': 'Tous', 'Raretés': 'Peu commun', 'Milieux': 'Grottes', 'Loot': 'Raoulia toxique'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Réglisse'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Renoncule des glaciers'},
	{'Climats': 'Chaud', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Romarin'},
	{'Climats': 'Tous', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Ronces'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Forêts', 'Loot': 'Rose lorem'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Déserts', 'Loot': 'Rose salbia'},
	{'Climats': 'Chaud', 'Raretés': 'Très rare', 'Milieux': 'Marais', 'Loot': 'Russule des marais'},
	{'Climats': 'Chaud', 'Raretés': 'Rare', 'Milieux': 'Forêts', 'Loot': 'Sanguina'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Sarriette'},
	{'Climats': 'Tous', 'Raretés': 'Commun', 'Milieux': 'Grottes', 'Loot': 'Satyre puant'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Sauge'},
	{'Climats': 'Tous', 'Raretés': 'Peu commun', 'Milieux': 'Grottes', 'Loot': 'Saxifrage'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Scabiosa anoest'},
	{'Climats': 'Froid', 'Raretés': 'Rare', 'Milieux': 'Montagnes', 'Loot': 'Schisandra'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Montagnes', 'Loot': 'Séneçon doré'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Montagnes', 'Loot': 'Sonchus infantem'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Forêts', 'Loot': 'Tentacle'},
	{'Climats': 'Froid', 'Raretés': 'Commun', 'Milieux': 'Plaines', 'Loot': 'Thunbergia manducare'},
	{'Climats': 'Chaud', 'Raretés': 'Peu commun', 'Milieux': 'Plaines', 'Loot': 'Thym'},
	{'Climats': 'Tempéré', 'Raretés': 'Peu commun', 'Milieux': 'Lacs et rivières', 'Loot': 'Tiarelle'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Tragopogon capulus'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Tres occulis'},
	{'Climats': 'Tempéré', 'Raretés': 'Commun', 'Milieux': 'Marais', 'Loot': 'Trichoshante papillon'},
	{'Climats': 'Froid', 'Raretés': 'Peu commun', 'Milieux': 'Forêts', 'Loot': 'Trifolium gustum'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Forêts', 'Loot': 'Trompette de braise'},
	{'Climats': 'Tempéré', 'Raretés': 'Rare', 'Milieux': 'Marais', 'Loot': 'Trompette des anges'},
	{'Climats': 'Tous', 'Raretés': 'Rare', 'Milieux': 'Grottes', 'Loot': 'Tulipe obsidienne'},
	{'Climats': 'Tous', 'Raretés': 'Commun', 'Milieux': 'Forêts', 'Loot': 'Violette'},
	{'Climats': 'Chaud', 'Raretés': 'Rarissime', 'Milieux': 'Montagnes', 'Loot': 'Yucca aureum'}
];

Echelle_de_rareté = {		
	"Commun": 50,
	"Peu commun": 35,
	"Rare": 10,
	"Très rare": 4,
	"Rarissime": 1
}


listeuh = {'fleur': fleurs};

function generateDynamicTable(type, climat){
		console.log("Hello World!");
		var zone = document.getElementById('milieux').value;
		var climat = document.getElementById('climats').value;
		var myItems =  listeuh[document.getElementById('objet').value];
		var nbOfItems = myItems.length;

		var increment = 1;
		
		if(nbOfItems>0){ 
			// CREATE DYNAMIC TABLE.
			var table = document.createElement("table");
			
			// retrieve column header ('Name', 'Email', and 'Mobile')
 
			var col = []; // define an empty array
			for (var i = 0; i < nbOfItems; i++) {
				for (var key in myItems[i]) {
					if (col.indexOf(key) === -1) {
						col.push(key);
					}
				}
			}
			
			// CREATE TABLE HEAD .
			var tHead = document.createElement("thead");	
				
			
			// CREATE ROW FOR TABLE HEAD .
			var hRow = document.createElement("tr");
			
			// ADD COLUMN HEADER TO ROW OF TABLE HEAD.
			var th = document.createElement("th");
			th.innerHTML = "Objet";
			hRow.appendChild(th);
			var th = document.createElement("th");
			th.innerHTML = "Intervalle";
			hRow.appendChild(th);
			tHead.appendChild(hRow);
			table.appendChild(tHead);
			
			// CREATE TABLE BODY .
			var tBody = document.createElement("tbody");


			
			// ADD COLUMN HEADER TO ROW OF TABLE HEAD.
			for (var i = 0; i < nbOfItems; i++) {
				if(myItems[i].Milieux.toLowerCase() == zone && (myItems[i].Climats.toLowerCase() == climat || myItems[i].Climats.toLowerCase() == "tous")) {
					var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
					bRow.classList.add(myItems[i].Raretés.replace(' ', '-'));
					var td = document.createElement("td");
					td.innerHTML = myItems[i].Loot;
					bRow.appendChild(td);
					var td = document.createElement("td");
					var lol = increment+Echelle_de_rareté[myItems[i].Raretés]-1;
					td.innerHTML = increment + " - " + lol;
					bRow.appendChild(td);
					tBody.appendChild(bRow)
					increment = lol+1;
 				}
			}
			table.appendChild(tBody);	
			
			
			// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
			var divContainer = document.getElementById("myItems");
			divContainer.innerHTML = "";
			divContainer.appendChild(table);
			
		}	
	}