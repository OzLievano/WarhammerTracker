import { AllArmyData } from "./constants";

const battleTactics = ['Bait and Trap', 'Endless Expropriation', 'Intimidate the Invaders', 'Led into the Maelstrom', 'Magical Dominance', 'Magical Mayhem', 'Reprisal', 'Surround and Destroy'];
const grandStrategies = ['Barren Icescape', 'Control the Nexus', 'Magic Made Manifest', 'Overshadow', 'Slaughter of Sorcery', 'Spellcasting Savant'];

export const allArmyAOSData:AllArmyData = {
  "Chaos": {
   "Beasts of Chaos":{
    "subfactions": ["Allherd", "Darkwalkers", "Gavespawn", "Quakefray"],
    "battleTactics": [...battleTactics,'In the Shadow of the Herdstone', 'Bestial Wrath', 'Rampaging Beastherd', 'Reduced to Savagery', 'Trampled to Mulch', 'Aid of the Wilderness'],
    "Grandstrategies": [...grandStrategies,'Protect the Herdstone', 'Desecrating Brayherd', 'Flanking Warherd', 'Age of the Beast']
   },
   "Blades of Khorne": {
    "subfactions": ["Reapers of Vengeance", 'Bloodlords', 'Baleful Lords', 'Goretide', 'Skullfiend Tribe', 'The Flayed'],
    battleTactics: [...battleTactics, "Blood for the Altar", 'Slay the Sorcerer', 'The Trial of Skulls', 'No Cowards Among Us', 'Leave None Standing', 'The Battlefield Runs Red'],
    "Grandstrategies": [...grandStrategies, "The Blood Legions", "Bring Me A Worthy Skull", "Reap the Blood Tithe", "Disciples of Carnage"]
   },
   "Disciples of Tzeentch": {
    "subfactions": ["The Eternal Conflagration", "The Hosts Duplicitous", "The Hosts Arcanum", "The Cult of the Transient Form", "The Pyrofane Cult", "The Guild of Summoners"],
    battleTactics: [...battleTactics, "Call for Change", "Mass Conjuration", "Ninefold Dismantlement", "Reckless Abandon", "Tides of Anarchy"],
    "Grandstrategies": [...grandStrategies, "Dominate Arcane Nexus", "Master of Destiny", "Preponderance of Fate", "Realm of Magic"]
   },
   "Hedonites of Slaanesh": {
    "subfactions": ["Pretenders", "Godseekers", "Invaders"],
    battleTactics: [...battleTactics,"Death by a Thousand Cuts", "An Enrapturing Blur", "The Grand Feast", "Excessive Carnage", "Realm-racers", "Depraved Unity"],
    "Grandstrategies": [...grandStrategies, "Coveted Riches", "Arch-tempter", "Selfish Desire", "Glutton for Depravity"]
   },
   "Maggotkin of Nurgle": {
    "subfactions": ["The Munificent Wanderers", "Befouling Host", "Droning Guard", "Droning Guard", "Blessed Sons", "Drowned Men", "Filthbringers"],
    battleTactics: [...battleTactics,"Feed the Maggots", "Nurture the Gnarlmaw", "GIfts of Nurgle", "Glory to the Grandfather!", "The Droning", "Sudden Domination", "Don't Squabble, Children"],
    "Grandstrategies": [...grandStrategies,"Corrupt Arcane Nexus", "Tend the Garden", "Spread Rampant Disease", "Blessed Desecration"]
   },
   "Skaven": {
    "subfactions": ["Masterclan","Clans Moulder", "Clans Eshin", "Clans Verminus", "Clans Skryre", "Clans Pestilens"],
    battleTactics: [...battleTactics,"Restore the Beast", "Deathmark", "Fire-fire! More-more!", "Crescendo of the Diseased Choir", "Flee-flee!"],
    "Grandstrategies": [...grandStrategies, "Shapers of Beast-flesh", "Masters of Execution", "Clawmasters", "Warpstone Weaponmasters", "Arch-corruptors of the Mortal Realms"]
   },
   "Slaves of Darkness": {
      "subfactions": ["Hosts of the Everchosen", "Legion of the First Prince", "Cabalists", "Despoilers", "Ravagers", "Knights of the Empty Throne"],
      battleTactics: [...battleTactics,"In Thrall to Chaos", "Lust for Power", "The March of Ruin", "Iconoclasts", "Champions of Chaos", "Run Them Down"],
      "Grandstrategies": [...grandStrategies, "Dominating Presence", "Follow the Path to Glory", "Bring Ruin to the Realms", "Masters of Dark Ritual"]
   }, 
  },
  "Death": {
    "Flesh-eater Courts": {
      "subfactions": ["Blisterskin", "Gristlegore", "Hollowmourne", "Morgaunt"],
      battleTactics: [...battleTactics, "Screamed to Death", "The Royal Hunt", "United Court"],
      "Grandstrategies": [...grandStrategies, "Growing Kingdom"]
    },
    "Nighthaunt":{
      "subfactions": ["The Emerald Host", "The Scarlet Doom", "The Quicksilver Dead", "The Grieving Legion"],
      battleTactics: [...battleTactics, "Overwhelmed with Dread", "Tides of Terror", "Mass Panic", "Death by a Thousand Cuts", "One Stop, No Return", "Ceaseless Nightmares"],
      "Grandstrategies": [...grandStrategies, "A Soul to Claim", "Fright or Flight", "Feed on Terror", "Dismantle the Brave"]
    },
    "Ossiarch Bonereapers": {
      "subfactions": ["Mortis Praetorians", "Petrifex Elite", "Stalliarch Lords", "Ivory Host", "Null Myriad", "Crematorians"],
      battleTactics: [...battleTactics, "Trample the Defiant", "The Sculptor's Entourage", "Remorseless Bombardment", "The Tithe Demands", "The Edge of Obliteration", "Unfeeling Recursion"],
      "Grandstrategies": [...grandStrategies, "The Scales Balanced", "A Textbook Conquest", "Creation and Termination" , "The Pride of Ossia"]
    },
    "Soulblight Gravelords": {
      "subfactions": ["Legion of Blood", "Legion of Night", "Vyrkos Dynasty", "Kastelai Dynasty", "Avengorii Dynasty"],
      battleTactics: [...battleTactics, "Callous Overlord", "Cursed Unlife", "The Grasping Dead" , "The Choicest Vintage", "Expand the Grave-empires", "Endless Nightmare"],
      "Grandstrategies": [...grandStrategies, "Lust for Domination", "Empire of Corpses", "The Danse Macabre", "Crimson Larder"]
    },
  },
  "Destruction": {
    "Gloomspite Gitz": {
      "subfactions": ["Da King's Gitz", "Badsnatchers", "Jaws of Mork", "Glogg's Megamob" , "Grimscuttle"],
      battleTactics: [...battleTactics, "Follow da Moon", "Glory Grabbers", "Venomous Assualt", "Stab 'Em in the Dark", "Moonlight Raid", "You Ain't So Big"],
      "Grandstrategies": [...grandStrategies, "A Scheme for Every Occasion", "Cashing the Moon", "Protect da Shrine!", "Superior Spell-flinger"]
    },
    "Ogor Mawtribes": {
      "subfactions": ["Meatfist", "Bloodgullet", "Underguts" , "Boulderhead", "Thunderbellies", "Winterbite"],
      battleTactics: [...battleTactics, "Eat Your Fill" , "Savour the Taste", "Avalanche of Flesh", "Winter Take Thee", "Let them Loose", "Boil their Bones"],
      "Grandstrategies": [...grandStrategies, "Ready for Plunder", "Saga of the Monster Hunter", "On the Mawpath" , "Enough Grub For All"]
    },
    "Kruleboyz": {
      "subfactions": ["Grinnin' Blades", "Big Yellers", "Skulbugz"],
      battleTactics: [...battleTactics, "Time to Get Stuck In!", "Wait For It, Laz...", "Squish Da Puny Gitz", "Kill Da Big 'Un!", "Kill Da Big 'Un!", "Take Dat, Ya Suckers!", "Destroyer Empires", "Sneak Up", "Dat's Our Turf Now!"],
      "Grandstrategies": [...grandStrategies, "In and Out, Ladz", "Show 'Em Who's Boss!", "Get Dem Bones!", "Waaagh!", " Krump 'Em All!"]
    },
    "Ironjaws": {
      "subfactions": ["Ironsunz", "Bloodtoofs", "Da Choppas"],
      battleTactics: [...battleTactics, "Time to Get Stuck In!", "Wait For It, Laz...", "Squish Da Puny Gitz", "Kill Da Big 'Un!", "Kill Da Big 'Un!", "Take Dat, Ya Suckers!", "Destroyer Empires", "Sneak Up", "Dat's Our Turf Now!"],
      "Grandstrategies": [...grandStrategies, "In and Out, Ladz", "Show 'Em Who's Boss!", "Get Dem Bones!", "Waaagh!", " Krump 'Em All!"]
    },
    "Bonesplitters": {
      "subfactions": ["Savage Warlords", "Shamanistic Quirks"],
      battleTactics: [...battleTactics, "Time to Get Stuck In!", "Wait For It, Laz...", "Squish Da Puny Gitz", "Kill Da Big 'Un!", "Kill Da Big 'Un!", "Take Dat, Ya Suckers!", "Destroyer Empires", "Sneak Up", "Dat's Our Turf Now!"],
      "Grandstrategies": [...grandStrategies, "In and Out, Ladz", "Show 'Em Who's Boss!", "Get Dem Bones!", "Waaagh!", " Krump 'Em All!"]
    },
    "Big Waaagh!": {
      "subfactions": ["Kunnin', Brutal and Savage", "'Ere We Go, 'Ere We Go, 'Ere We Go!", "The Power of the Waaagh!"],
      battleTactics: [...battleTactics, "Time to Get Stuck In!", "Wait For It, Laz...", "Squish Da Puny Gitz", "Kill Da Big 'Un!", "Kill Da Big 'Un!", "Take Dat, Ya Suckers!", "Destroyer Empires", "Sneak Up", "Dat's Our Turf Now!"],
      "Grandstrategies": [...grandStrategies, "In and Out, Ladz", "Show 'Em Who's Boss!", "Get Dem Bones!", "Waaagh!", " Krump 'Em All!"]
    },
    "Sons of Behemat": {
      "subfactions": ["Taker Tribe", "Breaker Tribe", "Smasher Tribe", "Stomper Tribe"],
      battleTactics: [...battleTactics, "That's Mine!", "Wrecking Crew", "Man-skittles", "Fury of Titans", "Splat!", "Colossal Violence"],
      "Grandstrategies": [...grandStrategies,"Brodd's Revenge" , "Make the Land Tremble!", "On the Warpath", "Show 'Em Who's Boss"]
    },
  },
  "Order": {
    "Cities of Sigmar": {
      "subfactions": ["Hammerhal Aqsha", "Tempest's Eye", 'Hallowheart', "Hammerhal Ghyra", "The Living City", "Greywater Fastness", "Lethis", "Vindicarum" , "Excelsis", "Settler's Gain", "Misthavn"],
      battleTactics: [...battleTactics,"Bring Full Arms to Bear", "Raise the banner", "Blackpower Bombardment", "Mount the Charge", "Strike Without Warning", "Iron Might"],
      "Grandstrategies": [...grandStrategies, "Exemplar of the Academae Martial", "Reclaim for Sigmar!", "Hold the High Ground", "Banners Held High"]
    },
    "Daughters of Khaine": {
      "subfactions": ["Hagg Nar", "Draichi Ganeth" , "Khelt Nar", "Kailebron", "The Kraith", "Zainthar Kai"],
      battleTactics: [...battleTactics, "Clash of Arms", "Cruel Delight", "Tide of Blades", "Executioner's Cult", "Hatred of Chaos", "Unexpected Attack"],
      "Grandstrategies": [...grandStrategies, "Bloodbath", "Conquered in the Name of Khaine", "Bloodthirsty Zealots", "Naught But Destruction"]
    },
    "Fyreslayers": {
      "subfactions": ["Vostarg", "Greyfyrd", "Hermdar", "Lofnir"],
      battleTactics: [...battleTactics, "Settle a Grudge", "Beastslayer", "Grimnir Knows No Mercy", "An Honourable Death", "Seize by Force", "An Ignominious Death"],
      "Grandstrategies": [...grandStrategies, "Guarded Lineage", "Defend the Lodge", "Oath-takers and Skull-breakers", "Masters of the Forge"]
    },
    "Idoneth Deepkin": {
      "subfactions": ["Ionrach", "Nautilar", "Mor'phann", "Fuethan", "Dhom-hain", "Briomdar"],
      battleTactics: [...battleTactics, "Assasins of the High Tide", "Predators of the Deep", "Revenge of the Namarti", "Deny Trespassers", "Trapped in the Undercurrents", "Isharann Defiance"],
      "Grandstrategies": [...grandStrategies, "Akhelian Pursuit", "The Creeping Gloomtide", "Dominion of the Deep Ones", "Namarti Assault"]
    },
    "Kharadron Overlords": {
      "subfactions": ["Barak-Nar, City of the First Sunrise", "Barak-Zilfin, the Windswept City", "Barak-Zon, City of the Sun", "Barak-Urbaz, the Market City", "Barak-Mhornar, The City of Shadow", "Barak-Thryng, City of the Ancestors"],
      battleTactics: [...battleTactics, "Bombing Run", "Mobilise the Fleet", "Boots on the Ground", "Opening Salvo", "Blast 'em to Smithereens", "Stake a Claim"],
      "Grandstrategies": [...grandStrategies, "Rules the Skies", "Defend the Flagship", "Prospector Fleet", "Guided by the Code"]
    },
    "Lumineth Realm-Lords": {
      "subfactions": ["Great Nation Of Ymetrica", "Great Nation of Syar", "Great Nation of Iliatha", "Great Nation of Zaitrec", "Great Nation of Alumnia", "Great Nation of Helon"],
      battleTactics: [...battleTactics, "Vanari Assault","Scinari Illumination","Alarith Aftershock", "Hurakan Cyclone"],
      "Grandstrategies": [...grandStrategies, "Priority Target","Conserve Aetherquarts","Blind the Enemy","Elemental Supremacy", "Hysh Made Manifest", "Ignore the Odds"]
    },
    "Seraphon": {
      "subfactions": ["Starborne", "Coalesced"],
      battleTactics: [...battleTactics, "Stamped of Scales", "Celestial Obliteration" , "Overwhelming Numbers", "Apex Predator", "Cold-blooded Resilience", "Pack Hunters"],
      "Grandstrategies": [...grandStrategies, "Realmshaper Guardians", "Repel Corruption", "Continuous Expansion","Further the Great Plan"],
    },
    "Stormcast Eternals": {
      "subfactions": ["Hammers of Sigmar", "Hallowed Knights", "Celestial Vindicators", "Anvils of the Heldenhammer", "Knights Excelsior", "Celestial Warbringers", "Tempest Lords", "Astral Templars"],
      battleTactics: [...battleTactics, "Pioneers of the Realms", "No Challenge Too Great", "Hammerstrike Assault", "Lightning-shattered Morale", "Draconith Destruction", "A Matter of Honour", " Secure the Battlefield"],
      "Grandstrategies": [...grandStrategies, "Draconith Defiance", "Pillars of Victory", "Sacred Charge"]
    },
    "Sylvaneth": {
      "subfactions": ["Gnarlroot", "Heartwood", "Ironbark", "Winterleaf", "Dreadwood", "Harvestboon"],
      battleTactics: [...battleTactics, "Eradicate Trespassers","Harness the Spirit Paths","Balance the Cycle","March of the Forest Lords", "Unleash Ghyran's Wrath"],
      "Grandstrategies": [...grandStrategies, "Chorus of the Woodlands", "Vengeance and Spite", "The Roots of Victory"]
    },
}
}
