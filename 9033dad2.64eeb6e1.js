(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return m}));var o=t(1),r=t(9),i=(t(0),t(153)),a={id:"socketing_yml",title:"socketing.yml"},s={id:"socketing_yml",title:"socketing.yml",description:"## Configuration",source:"@site/../docs/socketing_yml.md",permalink:"/MythicDrops/docs/socketing_yml",sidebar:"docs",previous:{title:"socketGems.yml",permalink:"/MythicDrops/docs/socketGems_yml"},next:{title:"Aura Gems",permalink:"/MythicDrops/docs/aura_gems"}},l=[{value:"Configuration",id:"configuration",children:[]}],c={rightToc:l};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"MythicDrops has a lot of configuration options. Below is the shortened contents of the\nsocketing.yml with inline explanations of what each configuration option does."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.1.0\noptions:\n  ## Should gems be prevented from being used in crafting? true is a recommended default.\n  prevent-crafting-with-gems: true\n  ## Should gems be prevented from adding prefixes/suffixes if an item already has one?\n  prevent-multiple-name-changes-from-sockets: false\n  ## When applying ON_HIT/ON_HIT_AND_WHEN_HIT gems, use the attacker\'s items in their hands?\n  use-attacker-item-in-hand: true\n  ## When applying ON_HIT/ON_HIT_AND_WHEN_HIT gems, use the attacker\'s equipped armor?\n  use-attacker-armor-equipped: false\n  ## When applying WHEN_HIT/ON_HIT_AND_WHEN_HIT gems, use the defender\'s items in their hands?\n  use-defender-item-in-hand: false\n  ## When applying WHEN_HIT/ON_HIT_AND_WHEN_HIT gems, use the defender\'s equipped armor?\n  use-defender-armor-equipped: true\n  ## Materials that can be used as socket gems.\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  socket-gem-material-ids:\n    - DIAMOND\n    - EMERALD\n    - NETHER_STAR\n  ## Default color for socket gem names when applied to items.\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html\n  default-socket-name-color-on-items: GOLD\n  ## Should socket gem names on items attempt to use the display color\n  ## from a tier before falling back to default-socket-name-color-on-items?\n  use-tier-color-for-socket-name: true\nitems:\n  socketed-item:\n    ## Text to display for an open socket.\n    ## %tiercolor% will use the display color of the tier of the item\n    ## if available and default-socket-name-color-on-items if not.\n    socket: "%tiercolor%(Socket)"\n    ## Text to add to an item with an open socket.\n    lore:\n      - "&7Find a &6Socket Gem&7 to fill a &F%tiercolor%(Socket)&7"\n  socket-gem:\n    ## Display name of a socket gem.\n    name: "&6Socket Gem - %socketgem%"\n    ## Lore/description of a socket gem.\n    ## Available placeholders:\n    ## - %sockettypelore% - combination of all-of, any-of, none-of item group lore\n    ## - %socketfamilylore% - shows gem family and level\n    ## - %socketgemlore% - lore from the socket gem\'s configuration\n    lore:\n      - "%sockettypelore%"\n      - "%socketfamilylore%"\n      - ""\n      - "&7Right-click while holding this gem"\n      - "&7over another item in"\n      - "&7your inventory to socket it!"\n      - ""\n      - "%socketgemlore%"\n    ## Customize %socketfamilylore%\n    family-lore:\n      - "&7Family: &F%family% &7(&F%level%&7)"\n    ## Customize prefix of %sockettypelore%\n    socket-type-lore:\n      - "&7Type(s): &F%type%"\n    ## Customize second part of %sockettypelore%\n    any-of-socket-type-lore:\n      - "  &7Requires One Of: &F%type%"\n    ## Customize first part of %sockettypelore%\n    all-of-socket-type-lore:\n      - "  &7Requires All: &F%type%"\n    ## Customize third part of %sockettypelore%\n    none-of-socket-type-lore:\n      - "  &7Requires None: &F%type%"\n  socket-gem-combiner:\n    ## Name displayed in socket gem combiner GUI\n    name: "&4Socket Gem Combiner"\n    ## Item to show in non-clickable spots in socket gem combiner GUI\n    buffer:\n      name: "&aClick a &6Socket Gem &ato begin!"\n      material: "IRON_BARS"\n      lore: []\n    ## Item to show when socket gems are able to be combined in GUI\n    click-to-combine:\n      name: "&E&LClick to combine!"\n      material: "NETHER_STAR"\n      lore: []\n    ## Item to show when socket gems are not able to be combined in GUI\n    ineligible-to-combine:\n      name: "&C&LIneligible to combine!"\n      material: "BARRIER"\n      ## Message to show when unable to be combined due to not being in\n      ## same socket gem family\n      same-family-lore:\n        - "&7You need to have four &6Socket Gems"\n        - "&7from the same family"\n        - "&7in order to combine them!"\n      ## Message to show when unable to be combined due to not being in\n      ## same socket gem level\n      same-level-lore:\n        - "&7You need to have four &6Socket Gems"\n        - "&7from the same level"\n        - "&7in order to combine them!"\n      ## Message to show when unable to be combined due to not being in\n      ## same socket gem family and level\n      same-family-and-level-lore:\n        - "&7You need to have four &6Socket Gems"\n        - "&7from the same family and level"\n        - "&7in order to combine them!"\n      ## Message to show when unable to be combined due to not being able\n      ## to find a gem based on the gems available.\n      no-gem-found-lore:\n        - "&7Unable to find a gem for that"\n        - "&7combination of gems!"\ncombining:\n  ## Do gems being combined require the same gem family?\n  require-same-family: false\n  ## Do gems being combined require the same gem level?\n  require-same-level: false\n')))}m.isMDXComponent=!0},153:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),m=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},u=function(e){var n=m(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(t),p=o,d=u["".concat(a,".").concat(p)]||u[p]||f[p]||i;return t?r.a.createElement(d,s({ref:n},c,{components:t})):r.a.createElement(d,s({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);