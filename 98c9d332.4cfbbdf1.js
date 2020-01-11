/*! For license information please see 98c9d332.4cfbbdf1.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return l}));var o=t(1),i=t(9),r=(t(0),t(153)),s=t(168),a=t(169),c={id:"language_yml",title:"language.yml"},u={id:"language_yml",title:"language.yml",description:"import Tabs from '@theme/Tabs';",source:"@site/../docs/language_yml.md",permalink:"/MythicDrops/docs/language_yml",sidebar:"docs",previous:{title:"itemGroups.yml",permalink:"/MythicDrops/docs/itemGroups_yml"},next:{title:"relation.yml",permalink:"/MythicDrops/docs/relation_yml"}},m=[{value:"Configuration",id:"configuration",children:[]}],d={rightToc:m};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"MythicDrops has a lot of configuration options. Below is the contents of the\nlanguage.yml. Most of the options are just used for various command outputs\nand the names of the keys are fairly self explanatory."),Object(r.b)("p",null,"There are a couple of explanations below, but most options are self-explanatory."),Object(r.b)(s.a,{defaultValue:"3.5.0",values:[{label:"3.5.0",value:"3.5.0"},{label:"3.2.0",value:"3.2.0"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"3.5.0",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 3.5.0\n# A bunch of different and modifiable messages\n#   used in the "/md" commands.\ngeneral:\n  found-item-broadcast: "&6[MythicDrops] &F%receiver%&A has found a %item%!"\ncommand:\n  only-players: "&6[MythicDrops] &COnly players can run this command."\n  no-access: "&6[MythicDrops] &CYou don\'t have permission to do that."\n  reload-config: "&6[MythicDrops] &AMythicDrops configs reloaded."\n  reload-plugin: "&6[MythicDrops] &AMythicDrops reloaded."\n  save-config: "&6[MythicDrops] &AMythicDrops configs saved."\n  tier-does-not-exist: "&6[MythicDrops] &CThat tier does not exist."\n  custom-item-does-not-exist: "&6[MythicDrops] &CThat custom item does not exist."\n  player-does-not-exist: "&6[MythicDrops] &CThat player does not exist or is not online."\n  world-does-not-exist: "&6[MythicDrops] &CThat world does not exist."\n  socket-gem-does-not-exist: "&6[MythicDrops] &CThat Socket Gem does not exist."\n  item-group-does-not-exist: "&6[MythicDrops] &CThat item group does not exist."\n  unknown-player: "unknown player"\n  custom-item-list: "&6[MythicDrops] &CCustom Items: &F%customitems%"\n  socket-gem-list: "&6[MythicDrops] &6Socket Gems: &F%socketgems%"\n  item-groups-list: "&6[MythicDrops] &6Item Groups: &F%itemgroups%"\n  item-groups-materials-list: "&6[MythicDrops] &6Item Group (&F%itemgroup%&6) materials: &F%materials%"\n  tier-list: "&6[MythicDrops] &7Tiers: &F%tiers%"\n  debug: "&6[MythicDrops] &7Debug printed."\n  help: "&7/%command% &F- &7%help%"\n  custom-create:\n    success: "&6[MythicDrops] &ACreated a custom item with id &F%name%&A."\n    failure: "&6[MythicDrops] &CUnable to create custom item."\n  drop-custom:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A custom MythicDrops item(s)."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C custom MythicDrops item(s)."\n  drop-gem:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A &6Socket Gem(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C &6Socket Gem(s)&C."\n  drop-random:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A MythicDrops item(s)."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C MythicDrops item(s)."\n  drop-tome:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A &5Identity Tome(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C &5Identity Tome(s)&C."\n  drop-unidentified:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A &DUnidentified Item(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C &DUnidentified Item(s)&C."\n  give-custom:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A custom MythicDrops item(s)."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C custom MythicDrops item(s)."\n    receiver-success: "&6[MythicDrops] &AYou have recieved &F%amount%&A MythicDrops item(s)!"\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C custom MythicDrops item(s)."\n  give-gem:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A &6Socket Gem(s)&A."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C &6Socket Gem(s)&C."\n    receiver-success: "&6[MythicDrops] &AYou have recieved &F%amount%&A &6Socket Gem(s)&A!"\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &6Socket Gem(s)&C."\n  give-random:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A MythicDrops item(s)."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C MythicDrops item(s)."\n    receiver-success: "&6[MythicDrops] &AYou were given &F%amount%&A MythicDrops item(s)."\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C MythicDrops item(s)."\n  give-tome:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A &5Identity Tome(s)&A."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C &5Identity Tome(s)&C."\n    receiver-success: "&6[MythicDrops] &AYou have recieved &F%amount%&A &5Identity Tome(s)&A!"\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &5Identity Tome(s)&C."\n  give-unidentified:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A &DUnidentified Item(s)&A."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C &DUnidentified Item(s)&C."\n    receiver-success: "&6[MythicDrops] &AYou have recieved &F%amount%&A &DUnidentified Item(s)&A!"\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &DUnidentified Item(s)&C."\n  modify:\n    failure: "&6[MythicDrops] &CCannot modify this item!"\n    name: "&6[MythicDrops] &ASuccessfully modified the name of the item in your hand!"\n    lore:\n      add: "&6[MythicDrops] &ASuccessfully added lore to the item in your hand!"\n      remove: "&6[MythicDrops] &ASuccessfully removed lore from the item in your hand!"\n      insert: "&6[MythicDrops] &ASuccessfully inserted lore on the item in your hand!"\n      set: "&6[MythicDrops] &ASuccessfully set lore on the item in your hand!"\n    enchantment:\n      add: "&6[MythicDrops] &ASuccessfully added an enchantment to the item in your hand!"\n      remove: "&6[MythicDrops] &ASuccessfully removed an enchantment from the item in your hand!"\n  spawn-custom:\n    success: "&6[MythicDrops] &AYou have received &F%amount%&A custom MythicDrops item(s)."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C custom MythicDrops item(s)."\n  spawn-gem:\n    success: "&6[MythicDrops] &AYou have received &F%amount%&A &6Socket Gem(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &6Socket Gem(s)&C."\n  spawn-random:\n    success: "&6[MythicDrops] &AYou were given &F%amount%&A MythicDrops item(s)."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C MythicDrops item(s)."\n  spawn-tome:\n    success: "&6[MythicDrops] &AYou have received &F%amount%&A &5Identity Tome(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &5Identity Tome(s)&C."\n  spawn-unidentified:\n    success: "&6[MythicDrops] &AYou have received &F%amount%&A &DUnidentified Item(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &DUnidentified Item(s)&C."\n  socket-gem-combiner-add:\n    success: "&6[MythicDrops] &AYou successfully added a socket gem combiner!"\n    failure: "&6[MythicDrops] &CYou failed to add a socket gem combiner!"\n  socket-gem-combiner-remove:\n    success: "&6[MythicDrops] &AYou successfully removed a &4Socket Gem Combiner&A!"\n    failure: "&6[MythicDrops] &CYou failed to remove a socket gem combiner!"\n  socket-gem-combiner-open: "&6[MythicDrops] &AOpened socket gem combiner GUI for &F%player%&A."\nsocketing:\n  success: "&6[MythicDrops] &AYou successfully socketted your item!"\n  not-in-item-group: "&6[MythicDrops] &CYou cannot use that gem on that type of item!"\n  no-open-sockets: "&6[MythicDrops] &CThat item does not have any open sockets!"\n  prevented-crafting: "&6[MythicDrops] &CYou cannot craft items with &6Socket Gems&C!"\n  combiner-must-be-gem: "&6[MythicDrops] &CYou can only put &6Socket Gems &Cinside the combiner!"\n  combiner-claim-output: "&6[MythicDrops] &CPlease claim your combined gem before adding more gems!"\nidentification:\n  success: "&6[MythicDrops] &AYou successfully identified your item!"\n  failure: "&6[MythicDrops] &CYou cannot identify that item!"\n  not-unidentified-item: "&6[MythicDrops] &CYou cannot identify an already identified item!"\nrepairing:\n  cannot-use: "&6[MythicDrops] &CYou cannot repair that item!"\n  do-not-have: "&6[MythicDrops] &CYou do not have enough materials to repair that item!"\n  success: "&6[MythicDrops] &AYou successfully repaired your item!"\n  instructions: "&6[MythicDrops] &ASmack this item on an anvil again to repair it!"\n# Various display names that are used for\n#   different itemNameFormat variables\ndisplay-names:\n  IRON_SHOVEL: Iron Shovel\n  IRON_PICKAXE: Iron Pickaxe\n  IRON_AXE: Iron Axe\n  BOW: Bow\n  IRON_SWORD: Iron Sword\n  WOOD_SWORD: Wood Sword\n  WOOD_SHOVEL: Wooden Shovel\n  WOOD_PICKAXE: Wood Pickaxe\n  WOOD_AXE: Wood Axe\n  STONE_SWORD: Stone Sword\n  STONE_SHOVEL: Stone Shovel\n  STONE_PICKAXE: Stone Pickaxe\n  STONE_AXE: Stone Axe\n  DIAMOND_SWORD: Diamond Sword\n  DIAMOND_SHOVEL: Diamond Shovel\n  DIAMOND_PICKAXE: Diamond Pickaxe\n  DIAMOND_AXE: Diamond Axe\n  GOLD_SWORD: Gold Sword\n  GOLD_SHOVEL: Gold Shovel\n  GOLD_PICKAXE: Gold Pickaxe\n  GOLD_AXE: Gold Axe\n  WOOD_HOE: Wooden Hoe\n  STONE_HOE: Stone Hoe\n  IRON_HOE: Iron Hoe\n  DIAMOND_HOE: Diamond Hoe\n  GOLD_HOE: Gold Hoe\n  LEATHER_HELMET: Leather Cap\n  LEATHER_CHESTPLATE: Leather Tunic\n  LEATHER_LEGGINGS: Leather Pants\n  LEATHER_BOOTS: Leather Boots\n  CHAINMAIL_HELMET: Chainmail Helmet\n  CHAINMAIL_CHESTPLATE: Chainmail Chestplate\n  CHAINMAIL_LEGGINGS: Chainmail Leggings\n  CHAINMAIL_BOOTS: Chainmail Boots\n  IRON_HELMET: Iron Helmet\n  IRON_CHESTPLATE: Iron Chestplate\n  IRON_LEGGINGS: Iron Leggings\n  IRON_BOOTS: Iron Boots\n  DIAMOND_HELMET: Diamond Helmet\n  DIAMOND_CHESTPLATE: Diamond Chestplate\n  DIAMOND_LEGGINGS: Diamond Leggings\n  DIAMOND_BOOTS: Diamond Boots\n  GOLD_HELMET: Gold Helmet\n  GOLD_CHESTPLATE: Gold Chestplate\n  GOLD_LEGGINGS: Gold Leggings\n  GOLD_BOOTS: Gold Boots\n  FISHING_ROD: Fishing Rod\n  SHEARS: Shears\n  BOOK: Book\n  ELYTRA: Elytra\n  TRIDENT: Trident\n  CROSSBOW: Crossbow\n  ARROW: Arrow\n  TIPPED_ARROW: Tipped Arrow\n  SPECTRAL_ARROW: Spectral Arrow\n  Ordinary: Ordinary\n  DURABILITY: Durable\n  PROTECTION_ENVIRONMENTAL: Safe\n  LOOT_BONUS_BLOCKS: Fortunate\n  PROTECTION_FIRE: Fireproof\n  DIG_SPEED: Miner\'s\n  PROTECTION_FALL: Feathery\n  SILK_TOUCH: Careful\n  PROTECTION_EXPLOSIONS: Wary\n  PROTECTION_PROJECTILE: Dodger\'s\n  OXYGEN: Merman\'s\n  WATER_WORKER: Atlantean\n  THORNS: Prickly\n  ARROW_INFINITE: Quivered\n  DAMAGE_UNDEAD: Holy\n  ARROW_FIRE: Flaming\n  DAMAGE_ALL: Sharp\n  ARROW_KNOCKBACK: Broadhead\n  KNOCKBACK: Heavy\n  ARROW_DAMAGE: Sharpened\n  DAMAGE_ARTHROPODS: Squisher\'s\n  LOOT_BONUS_MOBS: Looter\'s\n  FIRE_ASPECT: Burning\n  CREEPER: Creeper\n  ZOMBIE: Zombie\n'))),Object(r.b)(a.a,{value:"3.2.0",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 3.2.0\ngeneral:\n  found-item-broadcast: "&6[MythicDrops] &F%receiver%&A has found a %item%!"\ncommand:\n  only-players: "&6[MythicDrops] &COnly players can run this command."\n  no-access: "&6[MythicDrops] &CYou don\'t have permission to do that."\n  reload-config: "&6[MythicDrops] &AMythicDrops configs reloaded."\n  reload-plugin: "&6[MythicDrops] &AMythicDrops reloaded."\n  save-config: "&6[MythicDrops] &AMythicDrops configs saved."\n  tier-does-not-exist: "&6[MythicDrops] &CThat tier does not exist."\n  custom-item-does-not-exist: "&6[MythicDrops] &CThat custom item does not exist."\n  player-does-not-exist: "&6[MythicDrops] &CThat player does not exist or is not online."\n  world-does-not-exist: "&6[MythicDrops] &CThat world does not exist."\n  socket-gem-does-not-exist: "&6[MythicDrops] &CThat Socket Gem does not exist."\n  unknown-player: "unknown player"\n  custom-item-list: "&6[MythicDrops] &CCustom Items: &F%customitems%"\n  socket-gem-list: "&6[MythicDrops] &6Socket Gems: &F%socketgems%"\n  tier-list: "&6[MythicDrops] &7Tiers: &F%tiers%"\n  debug: "&6[MythicDrops] &7Debug printed."\n  help: "&7/%command% &F- &7%help%"\n  custom-create:\n    success: "&6[MythicDrops] &ACreated a custom item with id &F%name%&A."\n    failure: "&6[MythicDrops] &CUnable to create custom item."\n  drop-custom:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A custom MythicDrops item(s)."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C custom MythicDrops item(s)."\n  drop-gem:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A &6Socket Gem(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C &6Socket Gem(s)&C."\n  drop-random:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A MythicDrops item(s)."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C MythicDrops item(s)."\n  drop-tome:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A &5Identity Tome(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C &5Identity Tome(s)&C."\n  drop-unidentified:\n    success: "&6[MythicDrops] &AYou dropped &F%amount%&A &DUnidentified Item(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to drop &F%amount%&C &DUnidentified Item(s)&C."\n  give-custom:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A custom MythicDrops item(s)."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C custom MythicDrops item(s)."\n    receiver-success: "&6[MythicDrops] &AYou have recieved &F%amount%&A MythicDrops item(s)!"\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C custom MythicDrops item(s)."\n  give-gem:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A &6Socket Gem(s)&A."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C &6Socket Gem(s)&C."\n    receiver-success: "&6[MythicDrops] &AYou have recieved &F%amount%&A &6Socket Gem(s)&A!"\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &6Socket Gem(s)&C."\n  give-random:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A MythicDrops item(s)."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C MythicDrops item(s)."\n    receiver-success: "&6[MythicDrops] &AYou were given &F%amount%&A MythicDrops item(s)."\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C MythicDrops item(s)."\n  give-tome:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A &5Identity Tome(s)&A."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C &5Identity Tome(s)&C."\n    receiver-success: "&6[MythicDrops] &AYou have recieved &F%amount%&A &5Identity Tome(s)&A!"\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &5Identity Tome(s)&C."\n  give-unidentified:\n    sender-success: "&6[MythicDrops] &F%receiver%&A was given &F%amount%&A &DUnidentified Item(s)&A."\n    sender-failure: "&6[MythicDrops] &F%receiver%&C was unable to be given &F%amount%&C &DUnidentified Item(s)&C."\n    receiver-success: "&6[MythicDrops] &AYou have recieved &F%amount%&A &DUnidentified Item(s)&A!"\n    receiver-failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &DUnidentified Item(s)&C."\n  modify:\n    failure: "&6[MythicDrops] &CCannot modify this item!"\n    name: "&6[MythicDrops] &ASuccessfully modified the name of the item in your hand!"\n    lore:\n      add: "&6[MythicDrops] &ASuccessfully added lore to the item in your hand!"\n      remove: "&6[MythicDrops] &ASuccessfully removed lore from the item in your hand!"\n      insert: "&6[MythicDrops] &ASuccessfully inserted lore on the item in your hand!"\n      set: "&6[MythicDrops] &ASuccessfully set lore on the item in your hand!"\n    enchantment:\n      add: "&6[MythicDrops] &ASuccessfully added an enchantment to the item in your hand!"\n      remove: "&6[MythicDrops] &ASuccessfully removed an enchantment from the item in your hand!"\n  spawn-custom:\n    success: "&6[MythicDrops] &AYou have received &F%amount%&A custom MythicDrops item(s)."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C custom MythicDrops item(s)."\n  spawn-gem:\n    success: "&6[MythicDrops] &AYou have received &F%amount%&A &6Socket Gem(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &6Socket Gem(s)&C."\n  spawn-random:\n    success: "&6[MythicDrops] &AYou were given &F%amount%&A MythicDrops item(s)."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C MythicDrops item(s)."\n  spawn-tome:\n    success: "&6[MythicDrops] &AYou have received &F%amount%&A &5Identity Tome(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &5Identity Tome(s)&C."\n  spawn-unidentified:\n    success: "&6[MythicDrops] &AYou have received &F%amount%&A &DUnidentified Item(s)&A."\n    failure: "&6[MythicDrops] &CYou were unable to be given &F%amount%&C &DUnidentified Item(s)&C."\n  socket-gem-combiner-add:\n    success: "&6[MythicDrops] &AYou successfully added a socket gem combiner!"\n    failure: "&6[MythicDrops] &CYou failed to add a socket gem combiner!"\n  socket-gem-combiner-remove:\n    success: "&6[MythicDrops] &AYou successfully removed a &4Socket Gem Combiner&A!"\n    failure: "&6[MythicDrops] &CYou failed to remove a socket gem combiner!"\nsocketing:\n  success: "&6[MythicDrops] &AYou successfully socketted your item!"\n  not-in-item-group: "&6[MythicDrops] &CYou cannot use that gem on that type of item!"\n  no-open-sockets: "&6[MythicDrops] &CThat item does not have any open sockets!"\n  prevented-crafting: "&6[MythicDrops] &CYou cannot craft items with &6Socket Gems&C!"\n  combiner-must-be-gem: "&6[MythicDrops] &CYou can only put &6Socket Gems &Cinside the combiner!"\n  combiner-claim-output: "&6[MythicDrops] &CPlease claim your combined gem before adding more gems!"\nidentification:\n  success: "&6[MythicDrops] &AYou successfully identified your item!"\n  failure: "&6[MythicDrops] &CYou cannot identify that item!"\n  not-unidentified-item: "&6[MythicDrops] &CYou cannot identify an already identified item!"\nrepairing:\n  cannot-use: "&6[MythicDrops] &CYou cannot repair that item!"\n  do-not-have: "&6[MythicDrops] &CYou do not have enough materials to repair that item!"\n  success: "&6[MythicDrops] &AYou successfully repaired your item!"\n  instructions: "&6[MythicDrops] &ASmack this item on an anvil again to repair it!"\n## Various display names that are used for different item-display-name-format\n## variables from config.yml and variables.txt.\n## Primarily used for %materialtype%, %enchantment%, %mythicmaterial%.\ndisplay-names:\n  IRON_SHOVEL: Iron Shovel\n  IRON_PICKAXE: Iron Pickaxe\n  IRON_AXE: Iron Axe\n  BOW: Bow\n  IRON_SWORD: Iron Sword\n  WOOD_SWORD: Wood Sword\n  WOOD_SHOVEL: Wooden Shovel\n  WOOD_PICKAXE: Wood Pickaxe\n  WOOD_AXE: Wood Axe\n  STONE_SWORD: Stone Sword\n  STONE_SHOVEL: Stone Shovel\n  STONE_PICKAXE: Stone Pickaxe\n  STONE_AXE: Stone Axe\n  DIAMOND_SWORD: Diamond Sword\n  DIAMOND_SHOVEL: Diamond Shovel\n  DIAMOND_PICKAXE: Diamond Pickaxe\n  DIAMOND_AXE: Diamond Axe\n  GOLD_SWORD: Gold Sword\n  GOLD_SHOVEL: Gold Shovel\n  GOLD_PICKAXE: Gold Pickaxe\n  GOLD_AXE: Gold Axe\n  WOOD_HOE: Wooden Hoe\n  STONE_HOE: Stone Hoe\n  IRON_HOE: Iron Hoe\n  DIAMOND_HOE: Diamond Hoe\n  GOLD_HOE: Gold Hoe\n  LEATHER_HELMET: Leather Cap\n  LEATHER_CHESTPLATE: Leather Tunic\n  LEATHER_LEGGINGS: Leather Pants\n  LEATHER_BOOTS: Leather Boots\n  CHAINMAIL_HELMET: Chainmail Helmet\n  CHAINMAIL_CHESTPLATE: Chainmail Chestplate\n  CHAINMAIL_LEGGINGS: Chainmail Leggings\n  CHAINMAIL_BOOTS: Chainmail Boots\n  IRON_HELMET: Iron Helmet\n  IRON_CHESTPLATE: Iron Chestplate\n  IRON_LEGGINGS: Iron Leggings\n  IRON_BOOTS: Iron Boots\n  DIAMOND_HELMET: Diamond Helmet\n  DIAMOND_CHESTPLATE: Diamond Chestplate\n  DIAMOND_LEGGINGS: Diamond Leggings\n  DIAMOND_BOOTS: Diamond Boots\n  GOLD_HELMET: Gold Helmet\n  GOLD_CHESTPLATE: Gold Chestplate\n  GOLD_LEGGINGS: Gold Leggings\n  GOLD_BOOTS: Gold Boots\n  FISHING_ROD: Fishing Rod\n  SHEARS: Shears\n  BOOK: Book\n  ELYTRA: Elytra\n  TRIDENT: Trident\n  CROSSBOW: Crossbow\n  ARROW: Arrow\n  TIPPED_ARROW: Tipped Arrow\n  SPECTRAL_ARROW: Spectral Arrow\n  Ordinary: Ordinary\n  DURABILITY: Durable\n  PROTECTION_ENVIRONMENTAL: Safe\n  LOOT_BONUS_BLOCKS: Fortunate\n  PROTECTION_FIRE: Fireproof\n  DIG_SPEED: Miner\'s\n  PROTECTION_FALL: Feathery\n  SILK_TOUCH: Careful\n  PROTECTION_EXPLOSIONS: Wary\n  PROTECTION_PROJECTILE: Dodger\'s\n  OXYGEN: Merman\'s\n  WATER_WORKER: Atlantean\n  THORNS: Prickly\n  ARROW_INFINITE: Quivered\n  DAMAGE_UNDEAD: Holy\n  ARROW_FIRE: Flaming\n  DAMAGE_ALL: Sharp\n  ARROW_KNOCKBACK: Broadhead\n  KNOCKBACK: Heavy\n  ARROW_DAMAGE: Sharpened\n  DAMAGE_ARTHROPODS: Squisher\'s\n  LOOT_BONUS_MOBS: Looter\'s\n  FIRE_ASPECT: Burning\n')))))}l.isMDXComponent=!0},153:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),m=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},d=function(e){var n=m(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=m(t),p=o,h=d["".concat(s,".").concat(p)]||d[p]||l[p]||r;return t?i.a.createElement(h,a({ref:n},u,{components:t})):i.a.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<r;u++)s[u]=t[u];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},154:function(e,n,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var s=i.apply(null,o);s&&e.push(s)}else if("object"===r)for(var a in o)t.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(n,[]))||(e.exports=o)}()},168:function(e,n,t){"use strict";t(24),t(18),t(19);var o=t(0),i=t.n(o),r=t(154),s=t.n(r),a=t(122),c=t.n(a),u=37,m=39;n.a=function(e){var n=e.block,t=e.children,r=e.defaultValue,a=e.values,d=Object(o.useState)(r),l=d[0],p=d[1],h=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":n})},a.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":l===n,className:s()("tab-item",c.a.tabItem,{"tab-item--active":l===n}),key:n,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case m:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(h,e.target,e)},onFocus:function(){return p(n)},onClick:function(){return p(n)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(t).filter((function(e){return e.props.value===l}))[0]))}},169:function(e,n,t){"use strict";var o=t(0),i=t.n(o);n.a=function(e){return i.a.createElement("div",null,e.children)}}}]);