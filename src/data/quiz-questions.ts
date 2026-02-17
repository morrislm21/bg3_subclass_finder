import type { Question } from "./quiz-data";

export const questions: Question[] = [
  {
    id: "combat-style",
    text: "How do you prefer to deal with enemies? Choose at most 3",
    type: "multi",
    maxSelections: 3,
    answers: [
      { 
        text: "Hit them as hard as possible up close", 
        weights: {
          "barbarian-berserker": 5,
          "barbarian-wildheart": 4,
          "barbarian-wild-magic": 4,
          "barbarian-giant": 5,
          "fighter-champion": 5,
          "fighter-battle-master": 4,
          "paladin-devotion": 4,
          "paladin-vengeance": 5,
          "paladin-ancients": 4,
          "paladin-oathbreaker": 4,
          "paladin-crown": 4,
          "monk-open-hand": 5,
          "monk-drunken-master": 5,
          "monk-shadow": 4,
          "monk-four-elements": 3,
          "warlock-hexblade": 5,
          "cleric-war": 4,
          "cleric-tempest": 4,
          "druid-moon": 5,
          "bard-valour": 3,
          "bard-swords": 4,
          "rogue-swashbuckler": 4,
        }
      },
      { 
        text: "Attack from a distance", 
        weights: {
          "ranger-hunter": 5,
          "ranger-gloom-stalker": 5,
          "ranger-beast-master": 4,
          "ranger-swarmkeeper": 5,
          "fighter-arcane-archer": 5,
          "rogue-assassin": 4,
          "rogue-thief": 3,
          "warlock-fiend": 3,
          "warlock-great-old-one": 3,
          "warlock-archfey": 3,
          "warlock-hexblade": 2,
          "wizard-evocation": 4,
          "wizard-conjuration": 3,
          "sorcerer-draconic": 3,
          "sorcerer-storm": 3,
        }
      },
      { 
        text: "Use magic to destroy them", 
        weights: {
          "wizard-evocation": 5,
          "wizard-necromancy": 4,
          "sorcerer-draconic": 5,
          "sorcerer-wild-magic": 5,
          "sorcerer-storm": 5,
          "sorcerer-shadow": 4,
          "warlock-fiend": 5,
          "cleric-light": 5,
          "cleric-tempest": 5,
          "druid-spores": 3,
          "druid-stars": 4,
          "bard-lore": 3,
        }
      },
      { 
        text: "Use magic to control or weaken them", 
        weights: {
          "wizard-enchantment": 5,
          "wizard-illusion": 5,
          "wizard-divination": 4,
          "wizard-abjuration": 3,
          "wizard-transmutation": 4,
          "warlock-great-old-one": 5,
          "warlock-archfey": 5,
          "bard-lore": 5,
          "bard-glamour": 5,
          "rogue-arcane-trickster": 4,
          "cleric-trickery": 4,
          "cleric-knowledge": 3,
          "druid-land": 4,
          "monk-four-elements": 3,
        }
      },
      { 
        text: "Sneak in and strike before they know I'm there", 
        weights: {
          "rogue-assassin": 5,
          "rogue-thief": 5,
          "rogue-arcane-trickster": 5,
          "rogue-swashbuckler": 3,
          "ranger-gloom-stalker": 5,
          "monk-shadow": 5,
          "cleric-trickery": 4,
          "bard-swords": 2,
        }
      },
      { 
        text: "Support my allies while staying out of danger", 
        weights: {
          "cleric-life": 5,
          "cleric-knowledge": 4,
          "cleric-nature": 3,
          "bard-lore": 5,
          "bard-valour": 4,
          "bard-glamour": 4,
          "druid-land": 4,
          "druid-stars": 5,
          "wizard-abjuration": 4,
          "wizard-divination": 4,
          "paladin-crown": 3,
        }
      },
    ],
  },
  {
    id: "armor-preference",
    text: "What do you value most from these?",
    type: "single",
    answers: [
      { 
        text: "Heavy armor; I want to be in full plate so attacks bounce off", 
        weights: {
          "fighter-champion": 5,
          "fighter-battle-master": 5,
          "fighter-eldritch-knight": 5,
          "fighter-arcane-archer": 4,
          "paladin-devotion": 5,
          "paladin-vengeance": 5,
          "paladin-ancients": 5,
          "paladin-oathbreaker": 5,
          "paladin-crown": 5,
          "cleric-war": 5,
          "cleric-tempest": 5,
          "cleric-life": 4,
          "cleric-forge": 5,
        }
      },
      { 
        text: "I like to wear light armor to be nimble and sneaky", 
        weights: {
          "rogue-assassin": 5,
          "rogue-thief": 5,
          "rogue-arcane-trickster": 5,
          "rogue-swashbuckler": 5,
          "ranger-hunter": 4,
          "ranger-gloom-stalker": 5,
          "ranger-beast-master": 4,
          "ranger-swarmkeeper": 4,
          "monk-shadow": 5,
          "bard-lore": 4,
          "bard-swords": 4,
          "bard-valour": 3,
          "bard-glamour": 4,
          "warlock-archfey": 3,
        }
      },
      { 
        text: "I like magical armors which give me bonus effects", 
        weights: {
          "wizard-abjuration": 5,
          "wizard-bladesinger": 5,
          "sorcerer-draconic": 5,
          "warlock-hexblade": 4,
          "fighter-eldritch-knight": 4,
          "cleric-knowledge": 3,
          "druid-stars": 3,
        }
      },
      { 
        text: "I like natural armor from myself, and I can decide if I want it buffed or not", 
        weights: {
          "barbarian-berserker": 5,
          "barbarian-wildheart": 5,
          "barbarian-wild-magic": 5,
          "barbarian-giant": 5,
          "monk-open-hand": 5,
          "monk-drunken-master": 5,
          "monk-four-elements": 5,
          "druid-moon": 5,
          "druid-spores": 4,
          "sorcerer-draconic": 4,
        }
      },
      { 
        text: "I don't care about armor, I just want to be strong", 
        weights: {
          "barbarian-berserker": 4,
          "barbarian-wild-magic": 3,
          "barbarian-giant": 4,
          "monk-open-hand": 4,
          "sorcerer-wild-magic": 3,
          "warlock-fiend": 3,
        }
      },
    ],
  },
  {
    id: "magic-affinity",
    text: "What magical properties interest you? Choose at most 2",
    type: "multi",
    maxSelections: 2,
    answers: [
      { 
        text: "None, magic is for the weak", 
        weights: {
          "barbarian-berserker": 5,
          "barbarian-wildheart": 4,
          "fighter-champion": 5,
          "fighter-battle-master": 4,
          "monk-open-hand": 4,
          "monk-drunken-master": 4,
          "rogue-thief": 3,
          "rogue-assassin": 3,
          "ranger-hunter": 3,
        }
      },
      { 
        text: "I want my magic to influence the decisions of others", 
        weights: {
          "wizard-enchantment": 5,
          "wizard-illusion": 4,
          "bard-lore": 5,
          "bard-glamour": 5,
          "warlock-great-old-one": 5,
          "warlock-archfey": 5,
          "cleric-trickery": 4,
          "sorcerer-shadow": 3,
        }
      },
      { 
        text: "Magic is meant to be used for offense", 
        weights: {
          "wizard-evocation": 5,
          "wizard-necromancy": 4,
          "sorcerer-wild-magic": 5,
          "sorcerer-draconic": 5,
          "sorcerer-storm": 5,
          "warlock-fiend": 5,
          "cleric-light": 5,
          "cleric-tempest": 5,
          "druid-spores": 3,
          "druid-stars": 4,
        }
      },
      { 
        text: "I like my magic to support my allies", 
        weights: {
          "cleric-life": 5,
          "cleric-knowledge": 5,
          "bard-lore": 5,
          "bard-valour": 5,
          "bard-glamour": 4,
          "druid-land": 5,
          "druid-stars": 5,
          "wizard-abjuration": 5,
          "wizard-divination": 5,
          "paladin-crown": 4,
          "paladin-devotion": 3,
        }
      },
      { 
        text: "I want my enemies to be rendered inhibited by my magic", 
        weights: {
          "wizard-enchantment": 5,
          "wizard-illusion": 5,
          "wizard-transmutation": 4,
          "wizard-necromancy": 4,
          "warlock-great-old-one": 5,
          "warlock-archfey": 5,
          "bard-lore": 4,
          "druid-land": 4,
          "druid-spores": 5,
          "cleric-trickery": 5,
          "monk-four-elements": 3,
        }
      },
      { 
        text: "I just want a little magic to enhance my given weaponry", 
        weights: {
          "fighter-eldritch-knight": 5,
          "fighter-arcane-archer": 5,
          "paladin-devotion": 4,
          "paladin-vengeance": 4,
          "paladin-ancients": 4,
          "paladin-oathbreaker": 4,
          "paladin-crown": 4,
          "ranger-hunter": 4,
          "ranger-gloom-stalker": 4,
          "ranger-beast-master": 4,
          "ranger-swarmkeeper": 4,
          "rogue-arcane-trickster": 5,
          "warlock-hexblade": 5,
          "monk-four-elements": 4,
          "wizard-bladesinger": 5,
        }
      },
    ],
  },
  {
    id: "role-choice",
    text: "What role do you play in your group? Choose at most 2",
    type: "multi",
    maxSelections: 2,
    answers: [
      { 
        text: "I'm a loner, and loners gotta be alone", 
        weights: {
          "rogue-assassin": 5,
          "ranger-gloom-stalker": 5,
          "monk-shadow": 5,
          "warlock-great-old-one": 4,
          "wizard-necromancy": 3,
          "barbarian-berserker": 3,
        }
      },
      { 
        text: "Everyone should know I am here for them and them alone", 
        weights: {
          "cleric-life": 5,
          "bard-lore": 5,
          "bard-valour": 5,
          "paladin-devotion": 5,
          "paladin-crown": 5,
          "druid-stars": 4,
        }
      },
      { 
        text: "I just want to kill things as fast as I can", 
        weights: {
          "barbarian-berserker": 5,
          "barbarian-giant": 5,
          "fighter-champion": 5,
          "rogue-assassin": 5,
          "monk-open-hand": 4,
          "paladin-vengeance": 5,
          "ranger-hunter": 4,
          "wizard-evocation": 5,
          "sorcerer-wild-magic": 4,
          "sorcerer-draconic": 4,
          "warlock-fiend": 4,
        }
      },
      { 
        text: "I fight for my friends, and to protect them", 
        weights: {
          "paladin-devotion": 5,
          "paladin-ancients": 5,
          "paladin-crown": 5,
          "fighter-battle-master": 4,
          "cleric-life": 5,
          "cleric-war": 4,
          "bard-valour": 5,
          "druid-stars": 4,
          "wizard-abjuration": 5,
        }
      },
      { 
        text: "I am focused on talking my way out of problematic situations", 
        weights: {
          "bard-lore": 5,
          "bard-glamour": 5,
          "bard-swords": 3,
          "bard-valour": 3,
          "warlock-archfey": 4,
          "warlock-great-old-one": 3,
          "rogue-swashbuckler": 4,
          "cleric-trickery": 4,
          "cleric-knowledge": 4,
        }
      },
      { 
        text: "I want a little bit of something for everyone", 
        weights: {
          "bard-lore": 5,
          "bard-valour": 4,
          "cleric-knowledge": 5,
          "cleric-nature": 4,
          "ranger-hunter": 3,
          "druid-land": 5,
          "paladin-ancients": 3,
          "wizard-divination": 4,
        }
      },
      { 
        text: "I never want to fail on my abilities", 
        weights: {
          "wizard-divination": 5,
          "bard-lore": 4,
          "cleric-knowledge": 4,
          "rogue-thief": 3,
          "monk-open-hand": 3,
        }
      },
      { 
        text: "I just don't want to die. Ever.", 
        weights: {
          "wizard-abjuration": 5,
          "fighter-champion": 4,
          "paladin-crown": 5,
          "paladin-ancients": 4,
          "cleric-life": 5,
          "barbarian-berserker": 4,
          "barbarian-giant": 4,
          "monk-open-hand": 3,
        }
      },
    ],
  },
  {
    id: "power-source",
    text: "Where do you draw your power from?",
    type: "single",
    answers: [
      { 
        text: "The gods of course", 
        weights: {
          "cleric-life": 5,
          "cleric-light": 5,
          "cleric-trickery": 5,
          "cleric-knowledge": 5,
          "cleric-nature": 5,
          "cleric-tempest": 5,
          "cleric-war": 5,
          "cleric-death": 5,
          "paladin-devotion": 5,
          "paladin-ancients": 4,
          "paladin-vengeance": 4,
          "paladin-crown": 5,
        }
      },
      { 
        text: "Books. Learning. Studying.", 
        weights: {
          "wizard-abjuration": 5,
          "wizard-conjuration": 5,
          "wizard-divination": 5,
          "wizard-enchantment": 5,
          "wizard-evocation": 5,
          "wizard-illusion": 5,
          "wizard-necromancy": 5,
          "wizard-transmutation": 5,
          "wizard-bladesinger": 5,
          "cleric-knowledge": 4,
          "bard-lore": 4,
          "fighter-eldritch-knight": 3,
        }
      },
      { 
        text: "I'm not sure, but it seems quite natural", 
        weights: {
          "sorcerer-wild-magic": 5,
          "sorcerer-draconic": 5,
          "sorcerer-storm": 5,
          "sorcerer-shadow": 5,
          "barbarian-wild-magic": 5,
          "monk-four-elements": 3,
        }
      },
      { 
        text: "I am one with nature", 
        weights: {
          "druid-land": 5,
          "druid-moon": 5,
          "druid-spores": 5,
          "druid-stars": 5,
          "ranger-hunter": 5,
          "ranger-gloom-stalker": 5,
          "ranger-beast-master": 5,
          "ranger-swarmkeeper": 5,
          "barbarian-wildheart": 4,
          "cleric-nature": 5,
          "paladin-ancients": 5,
        }
      },
      { 
        text: "The shadows", 
        weights: {
          "rogue-assassin": 5,
          "rogue-thief": 4,
          "monk-shadow": 5,
          "warlock-great-old-one": 4,
          "sorcerer-shadow": 5,
          "cleric-trickery": 4,
          "ranger-gloom-stalker": 5,
        }
      },
      { 
        text: "If I told you, you wouldn't accept me", 
        weights: {
          "warlock-fiend": 5,
          "warlock-great-old-one": 5,
          "warlock-archfey": 5,
          "warlock-hexblade": 5,
          "paladin-oathbreaker": 5,
          "cleric-death": 5,
          "wizard-necromancy": 4,
          "druid-spores": 3,
        }
      },
      { 
        text: "My muscles", 
        weights: {
          "barbarian-berserker": 5,
          "barbarian-wildheart": 5,
          "barbarian-giant": 5,
          "fighter-champion": 5,
          "fighter-battle-master": 5,
          "monk-open-hand": 5,
          "monk-drunken-master": 5,
          "bard-valour": 3,
          "bard-swords": 3,
        }
      },
    ],
  },
  {
    id: "playstyle-complexity",
    text: "Which playstyle tickles your fancy?",
    type: "single",
    answers: [
      { 
        text: "I don't want to think", 
        weights: {
          "barbarian-berserker": 5,
          "barbarian-wildheart": 4,
          "fighter-champion": 5,
          "monk-open-hand": 4,
          "paladin-devotion": 3,
          "cleric-life": 3,
          "warlock-fiend": 3,
        }
      },
      { 
        text: "Simple, but I like some decisions", 
        weights: {
          "fighter-battle-master": 4,
          "ranger-hunter": 4,
          "ranger-beast-master": 4,
          "paladin-vengeance": 4,
          "paladin-ancients": 4,
          "cleric-war": 4,
          "cleric-tempest": 4,
          "cleric-light": 4,
          "rogue-thief": 4,
          "rogue-assassin": 4,
          "monk-drunken-master": 4,
          "sorcerer-draconic": 3,
        }
      },
      { 
        text: "I'm tactical, but not always", 
        weights: {
          "fighter-eldritch-knight": 4,
          "fighter-arcane-archer": 4,
          "paladin-crown": 4,
          "ranger-gloom-stalker": 4,
          "ranger-swarmkeeper": 4,
          "rogue-arcane-trickster": 4,
          "rogue-swashbuckler": 4,
          "monk-shadow": 4,
          "monk-four-elements": 4,
          "bard-valour": 4,
          "bard-swords": 4,
          "druid-moon": 4,
          "druid-spores": 4,
          "warlock-hexblade": 4,
          "sorcerer-wild-magic": 3,
          "sorcerer-storm": 3,
        }
      },
      { 
        text: "I can finish my opponent in a risk game in under 30 minutes", 
        weights: {
          "wizard-divination": 5,
          "wizard-abjuration": 5,
          "wizard-enchantment": 5,
          "wizard-illusion": 5,
          "wizard-conjuration": 5,
          "wizard-evocation": 4,
          "wizard-necromancy": 5,
          "wizard-transmutation": 5,
          "wizard-bladesinger": 5,
          "bard-lore": 5,
          "bard-glamour": 5,
          "druid-land": 5,
          "druid-stars": 5,
          "cleric-knowledge": 5,
          "warlock-great-old-one": 4,
          "barbarian-wild-magic": 3,
        }
      },
    ],
  },
  {
    id: "moral-alignment",
    text: "A mysterious orb falls into your possession and your party members don't notice. You feel it contain... power. What do you do?",
    type: "single",
    answers: [
      { 
        text: "Throw it over your shoulder and mostly ruin the franchise", 
        weights: {
          "barbarian-berserker": 4,
          "barbarian-wildheart": 3,
          "fighter-champion": 3,
          "monk-open-hand": 3,
          "ranger-hunter": 2,
        }
      },
      { 
        text: "Study it, it must be understood", 
        weights: {
          "wizard-abjuration": 5,
          "wizard-conjuration": 5,
          "wizard-divination": 5,
          "wizard-enchantment": 5,
          "wizard-evocation": 5,
          "wizard-illusion": 5,
          "wizard-necromancy": 5,
          "wizard-transmutation": 5,
          "wizard-bladesinger": 5,
          "cleric-knowledge": 5,
          "bard-lore": 5,
          "warlock-great-old-one": 4,
        }
      },
      { 
        text: "Shout 'Hey guys this is some powerful magic doohicky!'", 
        weights: {
          "paladin-devotion": 5,
          "paladin-crown": 5,
          "cleric-life": 5,
          "cleric-light": 4,
          "bard-valour": 4,
          "fighter-battle-master": 3,
        }
      },
      { 
        text: "Plant it and hope it helps the dying forest you are surrounded by", 
        weights: {
          "druid-land": 5,
          "druid-moon": 5,
          "druid-spores": 4,
          "druid-stars": 5,
          "ranger-beast-master": 5,
          "ranger-swarmkeeper": 5,
          "cleric-nature": 5,
          "paladin-ancients": 5,
        }
      },
      { 
        text: "Stash it in your hidden pocket, no one will ever know", 
        weights: {
          "rogue-thief": 5,
          "rogue-assassin": 5,
          "rogue-arcane-trickster": 5,
          "rogue-swashbuckler": 4,
          "warlock-fiend": 4,
          "warlock-archfey": 3,
          "cleric-trickery": 5,
          "bard-swords": 3,
        }
      },
      { 
        text: "Leave it be, who knows what evil it contains", 
        weights: {
          "paladin-devotion": 4,
          "paladin-ancients": 4,
          "cleric-life": 4,
          "cleric-light": 5,
          "monk-open-hand": 5,
          "druid-land": 3,
        }
      },
    ],
  },
  {
    id: "character-fantasy",
    text: "Which character fantasy appeals to you most?",
    type: "single",
    answers: [
      { 
        text: "The noble protector who stands between evil and the innocent", 
        weights: {
          "paladin-devotion": 5,
          "paladin-ancients": 5,
          "paladin-crown": 5,
          "cleric-life": 5,
          "cleric-light": 5,
          "fighter-battle-master": 4,
          "fighter-champion": 3,
          "wizard-abjuration": 4,
        }
      },
      { 
        text: "The cunning trickster who outsmarts everyone", 
        weights: {
          "rogue-thief": 5,
          "rogue-arcane-trickster": 5,
          "bard-lore": 5,
          "bard-glamour": 5,
          "cleric-trickery": 5,
          "wizard-illusion": 5,
          "wizard-enchantment": 5,
          "warlock-archfey": 5,
        }
      },
      { 
        text: "The unstoppable force of raw power", 
        weights: {
          "barbarian-berserker": 5,
          "barbarian-giant": 5,
          "fighter-champion": 5,
          "paladin-vengeance": 5,
          "sorcerer-draconic": 5,
          "wizard-evocation": 5,
          "monk-open-hand": 4,
          "warlock-fiend": 4,
        }
      },
      { 
        text: "The wise scholar who knows ancient secrets", 
        weights: {
          "wizard-divination": 5,
          "wizard-conjuration": 5,
          "wizard-abjuration": 5,
          "wizard-necromancy": 5,
          "wizard-transmutation": 5,
          "cleric-knowledge": 5,
          "bard-lore": 5,
          "warlock-great-old-one": 5,
          "druid-stars": 4,
        }
      },
      { 
        text: "The mysterious outsider with a dark past", 
        weights: {
          "rogue-assassin": 5,
          "warlock-fiend": 5,
          "warlock-hexblade": 5,
          "warlock-great-old-one": 5,
          "paladin-oathbreaker": 5,
          "monk-shadow": 5,
          "ranger-gloom-stalker": 5,
          "sorcerer-shadow": 5,
          "wizard-necromancy": 4,
          "cleric-death": 5,
        }
      },
      { 
        text: "The charismatic leader who inspires others", 
        weights: {
          "bard-valour": 5,
          "bard-lore": 5,
          "bard-glamour": 5,
          "paladin-devotion": 4,
          "paladin-crown": 5,
          "cleric-war": 3,
          "sorcerer-draconic": 3,
        }
      },
      { 
        text: "The wild warrior who embraces primal instincts", 
        weights: {
          "barbarian-berserker": 5,
          "barbarian-wildheart": 5,
          "barbarian-wild-magic": 5,
          "druid-moon": 5,
          "druid-spores": 4,
          "monk-drunken-master": 4,
          "ranger-beast-master": 4,
        }
      },
    ],
  },
  {
    id: "nature-connection",
    text: "How do you feel about nature and animals?",
    type: "single",
    answers: [
      { 
        text: "I want a loyal animal companion fighting by my side", 
        weights: {
          "ranger-beast-master": 5,
          "ranger-swarmkeeper": 5,
          "druid-moon": 3,
          "druid-land": 2,
        }
      },
      { 
        text: "I want to transform into animals myself", 
        weights: {
          "druid-moon": 5,
          "barbarian-wildheart": 5,
        }
      },
      { 
        text: "Nature is sacred and I'm its protector", 
        weights: {
          "druid-land": 5,
          "druid-moon": 5,
          "druid-spores": 4,
          "druid-stars": 5,
          "ranger-hunter": 5,
          "ranger-gloom-stalker": 4,
          "ranger-beast-master": 5,
          "ranger-swarmkeeper": 5,
          "cleric-nature": 5,
          "paladin-ancients": 5,
        }
      },
      { 
        text: "I respect nature but prefer civilization", 
        weights: {
          "paladin-devotion": 4,
          "paladin-crown": 5,
          "cleric-life": 4,
          "cleric-knowledge": 5,
          "fighter-battle-master": 4,
          "wizard-divination": 4,
          "wizard-abjuration": 4,
          "bard-lore": 4,
        }
      },
      { 
        text: "Nature is just a resource to be used", 
        weights: {
          "wizard-necromancy": 5,
          "wizard-conjuration": 4,
          "warlock-fiend": 5,
          "paladin-oathbreaker": 5,
          "cleric-death": 5,
          "barbarian-berserker": 3,
        }
      },
      { 
        text: "I don't really care either way", 
        weights: {
          "rogue-thief": 4,
          "rogue-assassin": 4,
          "rogue-swashbuckler": 4,
          "monk-shadow": 4,
          "monk-open-hand": 4,
          "fighter-champion": 4,
          "sorcerer-wild-magic": 3,
          "sorcerer-storm": 3,
          "warlock-great-old-one": 3,
        }
      },
    ],
  },
  {
    id: "supernatural-source",
    text: "If you had to make a deal for power, who would you bargain with?",
    type: "single",
    answers: [
      { 
        text: "I wouldn't make a deal, I earn my power through training", 
        weights: {
          "fighter-champion": 5,
          "fighter-battle-master": 5,
          "fighter-arcane-archer": 5,
          "monk-open-hand": 5,
          "monk-shadow": 5,
          "monk-drunken-master": 5,
          "monk-four-elements": 5,
          "rogue-thief": 4,
          "rogue-assassin": 4,
          "rogue-swashbuckler": 4,
          "ranger-hunter": 4,
          "barbarian-berserker": 4,
        }
      },
      { 
        text: "A deity or divine being", 
        weights: {
          "cleric-life": 5,
          "cleric-light": 5,
          "cleric-trickery": 5,
          "cleric-knowledge": 5,
          "cleric-nature": 5,
          "cleric-tempest": 5,
          "cleric-war": 5,
          "paladin-devotion": 5,
          "paladin-ancients": 5,
          "paladin-vengeance": 5,
          "paladin-crown": 5,
        }
      },
      { 
        text: "A fey creature from the fairy realm", 
        weights: {
          "warlock-archfey": 5,
          "bard-glamour": 4,
          "druid-land": 3,
        }
      },
      { 
        text: "A devil or demon", 
        weights: {
          "warlock-fiend": 5,
          "paladin-oathbreaker": 5,
          "cleric-death": 4,
        }
      },
      { 
        text: "An incomprehensible cosmic entity", 
        weights: {
          "warlock-great-old-one": 5,
          "wizard-divination": 3,
          "sorcerer-shadow": 3,
          "druid-stars": 4,
        }
      },
      { 
        text: "The spirits of my ancestors", 
        weights: {
          "barbarian-wildheart": 5,
          "barbarian-giant": 4,
          "monk-four-elements": 4,
          "druid-land": 4,
          "cleric-nature": 3,
        }
      },
      { 
        text: "No deals needed, power is already in my blood", 
        weights: {
          "sorcerer-draconic": 5,
          "sorcerer-wild-magic": 5,
          "sorcerer-storm": 5,
          "sorcerer-shadow": 5,
          "barbarian-wild-magic": 5,
          "wizard-bladesinger": 4,
        }
      },
    ],
  },
  {
    id: "undead-attitude",
    text: "How do you feel about raising or commanding the undead?",
    type: "single",
    answers: [
      { 
        text: "Sounds incredibly powerful, I'm in", 
        weights: {
          "wizard-necromancy": 5,
          "cleric-death": 5,
          "paladin-oathbreaker": 5,
          "warlock-fiend": 3,
          "warlock-great-old-one": 3,
          "druid-spores": 4,
        }
      },
      { 
        text: "It's dark magic but I'd use it if necessary", 
        weights: {
          "wizard-conjuration": 3,
          "wizard-transmutation": 3,
          "warlock-hexblade": 3,
          "cleric-war": 2,
          "fighter-eldritch-knight": 2,
        }
      },
      { 
        text: "It's unnatural and wrong", 
        weights: {
          "paladin-devotion": 5,
          "paladin-ancients": 5,
          "cleric-life": 5,
          "cleric-light": 5,
          "druid-land": 5,
          "druid-moon": 5,
          "monk-open-hand": 5,
          "ranger-beast-master": 4,
        }
      },
      { 
        text: "I don't have strong feelings about it", 
        weights: {
          "rogue-thief": 4,
          "rogue-assassin": 4,
          "rogue-arcane-trickster": 3,
          "fighter-battle-master": 4,
          "fighter-champion": 4,
          "barbarian-berserker": 4,
          "bard-lore": 3,
          "bard-swords": 3,
          "sorcerer-wild-magic": 3,
        }
      },
    ],
  },
];