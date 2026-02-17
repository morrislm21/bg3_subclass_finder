export interface Answer {
  text: string;
  weights: Partial<Record<string, number>>;
}

export interface Question {
  id: string;
  text: string;
  type: "single" | "multi";
  maxSelections?: number; // only relevant when type is "multi"
  answers: Answer[];
}

export interface Subclass {
  id: string;
  name: string;
  class: string;
  description: string;
}

export const subclasses: Subclass[] = [
  // Barbarian
  { id: "barbarian-berserker", name: "Berserker", class: "Barbarian", description: "Channel your rage into pure frenzied violence, hitting harder the angrier you get." },
  { id: "barbarian-wildheart", name: "Wildheart", class: "Barbarian", description: "Connect with the animal kingdom, taking on bestial traits as you rage." },
  { id: "barbarian-wild-magic", name: "Wild Magic", class: "Barbarian", description: "Your rage unleashes unpredictable bursts of chaotic magic with every fight." },
  { id: "barbarian-giant", name: "Path of the Giant", class: "Barbarian", description: "Tap into the power of giants, growing in size and hurling enemies across the battlefield." },

  // Bard
  { id: "bard-lore", name: "College of Lore", class: "Bard", description: "A master of knowledge and wit who uses sharp words to cut enemies down and boost allies." },
  { id: "bard-valour", name: "College of Valour", class: "Bard", description: "A battle-hardened performer who inspires allies while holding their own on the front line." },
  { id: "bard-swords", name: "College of Swords", class: "Bard", description: "A flashy blade dancer who weaves weapon flourishes into their performance." },
  { id: "bard-glamour", name: "College of Glamour", class: "Bard", description: "A mesmerizing performer who bends minds and commands attention with supernatural charm." },

  // Cleric
  { id: "cleric-life", name: "Life Domain", class: "Cleric", description: "A devoted healer who channels divine power to keep allies alive and fighting." },
  { id: "cleric-light", name: "Light Domain", class: "Cleric", description: "A radiant warrior who smites enemies with holy fire and blazing light." },
  { id: "cleric-trickery", name: "Trickery Domain", class: "Cleric", description: "A mischievous divine agent who uses illusions and deception in service of their god." },
  { id: "cleric-knowledge", name: "Knowledge Domain", class: "Cleric", description: "A scholarly cleric who gains mastery over skills and the minds of others." },
  { id: "cleric-nature", name: "Nature Domain", class: "Cleric", description: "A divine conduit for natural forces who commands animals and the elements." },
  { id: "cleric-tempest", name: "Tempest Domain", class: "Cleric", description: "A storm-caller who channels thunder and lightning to devastate enemies." },
  { id: "cleric-war", name: "War Domain", class: "Cleric", description: "A divine warrior who excels in combat, striking with holy fury on the front lines." },
  { id: "cleric-death", name: "Death Domain", class: "Cleric", description: "A dark cleric who wields necrotic energy and the power of death itself." },

  // Druid
  { id: "druid-land", name: "Circle of the Land", class: "Druid", description: "A nature mystic who draws on the magic of different terrains for a wide spell arsenal." },
  { id: "druid-moon", name: "Circle of the Moon", class: "Druid", description: "A shapeshifter who transforms into powerful beasts to tear enemies apart." },
  { id: "druid-spores", name: "Circle of Spores", class: "Druid", description: "A druid who harnesses the dark side of nature through rot, decay, and fungal magic." },
  { id: "druid-stars", name: "Circle of Stars", class: "Druid", description: "A cosmic druid who draws power from constellations to heal, damage, and divine the future." },

  // Fighter
  { id: "fighter-battle-master", name: "Battle Master", class: "Fighter", description: "A tactical combatant who uses studied maneuvers to control and outmaneuver enemies." },
  { id: "fighter-eldritch-knight", name: "Eldritch Knight", class: "Fighter", description: "A fighter who supplements their martial prowess with a handful of arcane spells." },
  { id: "fighter-champion", name: "Champion", class: "Fighter", description: "A pure martial powerhouse who focuses on hitting hard and landing critical strikes." },
  { id: "fighter-arcane-archer", name: "Arcane Archer", class: "Fighter", description: "A skilled archer who infuses their arrows with magical effects to debilitate foes." },

  // Monk
  { id: "monk-open-hand", name: "Way of the Open Hand", class: "Monk", description: "A martial arts master who uses precise strikes to knock down and incapacitate enemies." },
  { id: "monk-shadow", name: "Way of Shadow", class: "Monk", description: "A ninja-like monk who blends stealth and darkness with lightning-fast unarmed strikes." },
  { id: "monk-four-elements", name: "Way of the Four Elements", class: "Monk", description: "A monk who channels ki into elemental powers, bending fire, water, air, and earth." },
  { id: "monk-drunken-master", name: "Way of the Drunken Master", class: "Monk", description: "An unpredictable fighter whose stumbling, erratic movements make them nearly impossible to pin down." },

  // Paladin
  { id: "paladin-ancients", name: "Oath of the Ancients", class: "Paladin", description: "A nature-bound paladin who protects the light of life and resists dark magic." },
  { id: "paladin-devotion", name: "Oath of Devotion", class: "Paladin", description: "The classic holy warrior, devoted to justice and the protection of the innocent." },
  { id: "paladin-vengeance", name: "Oath of Vengeance", class: "Paladin", description: "A relentless hunter who pursues and destroys evil without mercy." },
  { id: "paladin-oathbreaker", name: "Oathbreaker", class: "Paladin", description: "A fallen paladin who commands undead and wields dark power after breaking their sacred vows." },
  { id: "paladin-crown", name: "Oath of the Crown", class: "Paladin", description: "A stalwart defender of civilization who protects allies and holds the line in battle." },

  // Ranger
  { id: "ranger-beast-master", name: "Beast Master", class: "Ranger", description: "A ranger who forms a deep bond with an animal companion that fights alongside them." },
  { id: "ranger-gloom-stalker", name: "Gloom Stalker", class: "Ranger", description: "A darkness-dwelling hunter who dominates the first moments of combat with devastating ambushes." },
  { id: "ranger-hunter", name: "Hunter", class: "Ranger", description: "A versatile ranger who specializes in tracking and slaying specific types of prey." },
  { id: "ranger-swarmkeeper", name: "Swarmkeeper", class: "Ranger", description: "A ranger bonded with a swarm of creatures that they weaponize to attack and reposition enemies." },

  // Rogue
  { id: "rogue-thief", name: "Thief", class: "Rogue", description: "A nimble opportunist who excels at pilfering, climbing, and getting an extra action in combat." },
  { id: "rogue-arcane-trickster", name: "Arcane Trickster", class: "Rogue", description: "A cunning rogue who uses illusion and enchantment spells to deceive and outmaneuver foes." },
  { id: "rogue-assassin", name: "Assassin", class: "Rogue", description: "A deadly killer who specializes in ambushes and dealing massive damage to unsuspecting targets." },
  { id: "rogue-swashbuckler", name: "Swashbuckler", class: "Rogue", description: "A daring duelist who dances around single opponents with panache and precision." },

  // Sorcerer
  { id: "sorcerer-wild-magic", name: "Wild Magic", class: "Sorcerer", description: "A spellcaster whose power is unstable and chaotic, producing wild and unpredictable magical surges." },
  { id: "sorcerer-draconic", name: "Draconic Bloodline", class: "Sorcerer", description: "A sorcerer with dragon ancestry who gains elemental power and draconic resilience." },
  { id: "sorcerer-storm", name: "Storm Sorcery", class: "Sorcerer", description: "A sorcerer who harnesses the power of storms, riding lightning and commanding thunder." },
  { id: "sorcerer-shadow", name: "Shadow Magic", class: "Sorcerer", description: "A sorcerer born from the Shadowfell who bends darkness and summons a hound of shadow." },

  // Warlock
  { id: "warlock-fiend", name: "The Fiend", class: "Warlock", description: "A warlock who made a pact with a devil, gaining destructive fire magic and infernal resilience." },
  { id: "warlock-great-old-one", name: "The Great Old One", class: "Warlock", description: "A warlock bound to an unknowable entity, gaining telepathy and eldritch mind-bending magic." },
  { id: "warlock-archfey", name: "Archfey", class: "Warlock", description: "A warlock who bargained with a fey lord, wielding charm, fear, and trickery." },
  { id: "warlock-hexblade", name: "Hexblade", class: "Warlock", description: "A warlock who channels their patron's power through a weapon, excelling in melee combat." },

  // Wizard
  { id: "wizard-abjuration", name: "Abjuration", class: "Wizard", description: "A defensive wizard who specializes in protective wards and shielding allies from harm." },
  { id: "wizard-conjuration", name: "Conjuration", class: "Wizard", description: "A wizard who summons creatures and objects from other planes to do their bidding." },
  { id: "wizard-divination", name: "Divination", class: "Wizard", description: "A far-seeing wizard who manipulates fate itself, predicting and altering the outcomes of dice rolls." },
  { id: "wizard-enchantment", name: "Enchantment", class: "Wizard", description: "A wizard who specializes in bending the minds of others through charm and hypnotic magic." },
  { id: "wizard-evocation", name: "Evocation", class: "Wizard", description: "A pure blaster wizard who hurls fireballs and lightning bolts with devastating precision." },
  { id: "wizard-illusion", name: "Illusion", class: "Wizard", description: "A trickster wizard who crafts convincing illusions to deceive enemies and control the battlefield." },
  { id: "wizard-necromancy", name: "Necromancy", class: "Wizard", description: "A dark wizard who raises the dead as an undead army to overwhelm their enemies." },
  { id: "wizard-transmutation", name: "Transmutation", class: "Wizard", description: "A wizard who alters the physical properties of objects and creatures, transforming the battlefield." },
  { id: "wizard-bladesinger", name: "Bladesinger", class: "Wizard", description: "An elven wizard-warrior who combines elegant swordplay with arcane magic in a deadly dance." },
];