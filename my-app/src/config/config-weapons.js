//melee-weapons
import pictureStick from "../assets/melee-weapons/stick.png";
import pictureDagger from "../assets/melee-weapons/dagger.png";
import pictureCudgel from "../assets/melee-weapons/cudgel.jpg";
import pictureHatchet from "../assets/melee-weapons/hatchet.jpeg";
import pictureJavelin from "../assets/melee-weapons/javelin.png";
import pictureSpear from "../assets/melee-weapons/spear.png";
import pictureLightHammer from "../assets/melee-weapons/light-hammer.jpeg";
import pictureMace from "../assets/melee-weapons/mace.jpeg";
import pictureSerpe from "../assets/melee-weapons/serpe.jpeg";
import pictureMassue from "../assets/melee-weapons/massue.jpeg";

//range-weapons
import pictureLigthCrossbow from "../assets/range-weapons/light-crossbow.png";
import pictureShortBow from "../assets/range-weapons/short-bow.jpg";
import pictureDart from "../assets/range-weapons/dart.jpg";
import pictureSling from "../assets/range-weapons/sling.jpg";

//melee-warfare-weapons
import pictutreScimitar from "../assets/melee-warfare-weapons/scimitar.png";
import pictureTick from "../assets/melee-warfare-weapons/tick.jpg";
import PictureTwoHandleSword from "../assets/melee-warfare-weapons/two-handle-sword.jpg";
import pictureShortSword from "../assets/melee-warfare-weapons/short-sword.jpg";
import pictureLongSword from "../assets/melee-warfare-weapons/long-sword.jpg";
import pictureWeaponFlail from "../assets/melee-warfare-weapons/weapon-flail.jpg";
import pictureWhip from "../assets/melee-warfare-weapons/whip.jpg";
import pictureTwoHandedAxe from "../assets/melee-warfare-weapons/two-handed-axe.jpg";
import pictureBattleAxe from "../assets/melee-warfare-weapons/battle-axe.jpg";
import pictureHallberd from "../assets/melee-warfare-weapons/hallberd.png";
import picturePommelSpear from "../assets/melee-warfare-weapons/pommel-spear.jpg";
import pictureMallet from "../assets/melee-warfare-weapons/mallet.jpg";
import pictureWarHammer from "../assets/melee-warfare-weapons/war-hammer.jpg";
import pictureMorgenstern from "../assets/melee-warfare-weapons/morgenstern.png";
import pictureWarPeak from "../assets/melee-warfare-weapons/war-peak.png";
import picturePeak from "../assets/melee-warfare-weapons/peak.png";
import pictureRapier from "../assets/melee-warfare-weapons/rapier.jpg";
import pictureTrident from "../assets/melee-warfare-weapons/trident.png";

//range-warfare-weapons
import pictureHandCrossbow from "../assets/range-warfare-weapons/hand-crossbow.png";
import pictureHeavyCrossbow from "../assets/range-warfare-weapons/heavy-crossbow.png";
import pictureLongBow from "../assets/range-warfare-weapons/longbow.png";
import pictureNet from "../assets/range-warfare-weapons/net.png";
import pictureBlowpipe from "../assets/range-warfare-weapons/blowpipe.jpg";

export const items = [
    {
        typeWeapon: "Armes courantes de corps ?? corps",
        weapons: [
            {
                id: 1,
                name: "B??ton",
                dice: 1, 
                dammage: 6,
                type: "Contondant",
                weight: 2000,
                picture: pictureStick,
                property: [
                    {
                        type: [
                            {
                                name: "Polyvalente",
                                dice: 1,
                                dammage: 8
                            }
                        ],
                    }
                ]
            },
            {
                id: 2,
                name: "Dague",
                dice: 1,
                dammage: 4,
                type: "Perforant",
                weight: 500,
                picture: pictureDagger,
                property: [
                    {
                        type: [
                            {
                                name: "Finesse",
                            },
                            {
                                name: "L??g??re"
                            },
                            {
                                name: "Lancer",
                                range: "6m/18m"
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: "Gourdin",
                dice: 1,
                dammage: 4,
                type: "Contondant",
                weight: 1000,
                picture: pictureCudgel,
                property: [
                    {
                        type: [
                            {
                                name: "L??g??re"
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                name: "Hachette",
                dice: 1,
                dammage: 6,
                type: "Tranchant",
                weight: 1000,
                picture: pictureHatchet,
                property: [
                    {
                        type: [
                            {
                                name: "L??g??re"
                            },
                            {
                                name: "Lancer",
                                range: "6m/18m"
                            }
                        ]
                    }
                ]
            },
            {
                id: 5,
                name: "Javeline",
                dice: 1,
                dammage: 6,
                type: "Perforant",
                weight: 1000,
                picture: pictureJavelin,
                property: [
                    {
                        type: [
                            {
                                name: "Lancer",
                                range: "9m/36m"
                            }
                        ]
                    }
                ]
            },
            {
                id: 6,
                name: "Lance",
                dice: 1,
                dammage: 6,
                type: "Perforant",
                weight: 1500,
                picture: pictureSpear,
                property: [
                    {
                        type: [
                            {
                                name: "Lancer",
                                range: "6m/18m"
                            },
                            {
                                name: "Polyvalente",
                                dice: 1,
                                dammage: 8
                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                name: "Marteau l??ger",
                dice: 1,
                dammage: 4,
                type: "Contondant",
                weight: 1000,
                picture: pictureLightHammer,
                property: [
                    {
                        name: "L??g??re",
                    },
                    {
                        name: "Lancer",
                        range: "6m/18m"
                    },
                ]
            },
            {
                id: 8,
                name: "Masse d'armes",
                dice: 1,
                dammage: 6,
                type: "Contondant",
                weight: 2000,
                picture: pictureMace,
                property: [
                    ""
                ]
            },
            {
                id: 9,
                name: "Massue",
                dice: 1,
                dammage: 8,
                type: "Contondant",
                weight: 5000,
                picture: pictureMassue,
                property: [
                    {
                        hands: "Deux mains"
                    }
                ]
            },
            {
                id: 10,
                name: "Serpe",
                dice: 1,
                dammage: 4,
                type: "Tranchant",
                weight: 1000,
                picture: pictureSerpe,
                property: [
                    {
                        name: "L??g??re"
                    }
                ]
            }
        ]
    },
    {
        typeWeapon: "Armes courante ?? distance",
        weapons: [
            {
                id: 11,
                name: "Arbal??te l??g??re",
                dice: 1,
                dammage: 8,
                type: "Perforant",
                weight: 2500,
                picture: pictureLigthCrossbow,
                property: [
                    {
                        name: "Munition",
                        range: "24m/96m",
                        loading: "Chargement",
                        hands: "Deux mains"
                    }
                ]
            },
            {
                id: 12,
                name: "Arc court",
                dice: 1,
                dammage: 6,
                type: "Perforant",
                weight: 1000,
                picture: pictureShortBow,
                property: [
                    {
                        name: "Munitions",
                        range: "24m/96m",
                        loading: "chargement",
                        hands: "Deux mains"
                    }
                ]
            },
            {
                id: 13,
                name: "Fl??chette",
                dice: 1,
                dammage: 4,
                type: "Perforant",
                weight: 100,
                picture: pictureDart,
                property: [
                    {
                        name: "Finesse"
                    },
                    {
                        name: "Lancer",
                        range: "6m/18m"
                    }
                ]
            },
            {
                id: 14,
                name: "Fronde",
                dice: 1,
                dammage: 4,
                type: "Contondant",
                weight: 0,
                picture: pictureSling,
                property: [
                    {
                        name: "Munition",
                        range: "9m/36m"
                    }
                ]
            }
        ]
    },
    {
        typeWeapon: "Arme de guerre de corps ?? corps",
        weapons: [
            {
                id: 15,
                name: "Cimeterre",
                dice: 1,
                dammage: 6,
                type: "Tranchant",
                weight: 1500,
                picture: pictutreScimitar,
                property: [
                    {
                        name: "Finesse"
                    },
                    {
                        name: "L??g??re"
                    }
                ]
            },
            {
                id: 16,
                name: "Coutille",
                dice: 1,
                dammage: 10,
                type: "Tranchant",
                weight: 3000,
                picture: pictureTick,
                property: [
                    {
                        name: "Lourde",
                        hands: "Deux mains"
                    },
                    {
                        name: "Allonge"
                    }
                ]
            },
            {
                id: 17,
                name: "Ep??e ?? deux mains",
                dice: 2,
                dammage: 6,
                type: "Tranchant",
                weight: 3000,
                picture: PictureTwoHandleSword,
                property: [
                    {
                        name: "Lourde",
                        hands: "Deux mains"
                    }
                ]
            },
            {
                id: 18,
                name: "Ep??e courte",
                dice: 1,
                dammage: 6,
                weight: 1000,
                picture: pictureShortSword,
                property: [
                    {
                        name: "Finesse"
                    },
                    {
                        name: "L??g??re"
                    }
                ]
            },
            {
                id: 19,
                name: "Ep??e longue",
                dice: 1,
                dammage: 8,
                type: "Tranchant",
                weight: 1500,
                picture: pictureLongSword,
                property: [
                    {
                        name: "Polyvalente",
                        dice: 1,
                        dammage: 10
                    }
                ]
            },
            {
                id: 20,
                name: "Fl??au d'arme",
                dice: 1,
                dammage: 8,
                type: "Tranchant",
                weight: 1500,
                picture: pictureWeaponFlail,
                property: [
                    "-"
                ]
            },
            {
                id: 21,
                name: "Fouet",
                dice: 1,
                dammage: 4,
                type: "Tranchant",
                weight: 1500,
                picture: pictureWhip,
                property: [
                    {
                        name: "Finesse",
                    },
                    {
                        name: "Allonge"
                    }
                ]
            },
            {
                id: 22,
                name: "Hache ?? deux mains",
                dice: 1,
                dammage: 12,
                type: "Tranchant",
                weight: 3500,
                picture: pictureTwoHandedAxe,
                property: [
                    {
                        name: "Lourde",
                        hands: "Deux mains"
                    }
                ]
            },
            {
                id: 23,
                name: "Hache d'arme",
                dice: 1,
                dammage: 8,
                type: "Tranchant",
                weight: 2000,
                picture: pictureBattleAxe,
                property: [
                    {
                        name: "Polyvalente",
                        dice: 1,
                        dammage: 10
                    }
                ]
            },
            {
                id: 24,
                name: "Hallebarde",
                dice: 1,
                dammage: 10,
                type: "Tranchant",
                weight: 3000,
                picture: pictureHallberd,
                property: [
                    {
                        name: "Lourde",
                        hands: "Deux mains"
                    },
                    {
                        name: "Allonge"
                    }
                ]
            },
            {
                id: 25,
                name: "Lance d'ar??on",
                dice: 1,
                dammage: 12,
                type: "Perforant",
                weight: 3000,
                picture: picturePommelSpear,
                property: [
                    {
                        name: "Allonge",
                        specials: "Special"
                    }
                ]
            },
            {
                id: 26,
                name: "Maillet",
                dice: 2,
                dammage: 6,
                type: "Contondant",
                weight: 5000,
                picture: pictureMallet,
                property: [
                    {
                        name: "Lourde",
                        hands: "Deux mains"
                    }
                ]
            },
            {
                id: 27,
                name: "Marteau de guerre",
                dice: 1,
                dammage: 8,
                type: "Contondant",
                weight: 1000,
                picture: pictureWarHammer,
                property: [
                    {
                        name: "Polyvalente",
                        dice: 1,
                        dammage: 10
                    }
                ]
            },
            {
                id: 28,
                name: "Morgenster",
                dice: 1,
                dammage: 8,
                type: "Perforant",
                weight: 2000,
                picture: pictureMorgenstern,
                property: [
                    "-"
                ]
            },
            {
                id: 29,
                name: "Pic de guerre",
                dice: 1,
                dammage: 8,
                type: "Perforant",
                weight: 1000,
                picture: pictureWarPeak,
                property: [
                    "-"
                ]
            },
            {
                id: 30,
                name: "Pique",
                dice: 1,
                dammage: 10,
                type: "Perforant",
                weight: 9000,
                picture: picturePeak,
                property: [
                    {
                        name: "Lourde",
                        hands: "Deux mains",
                        weight: "Lourde"
                    }
                ]
            },
            {
                id: 31,
                name: "Rapi??re",
                dice: 1,
                dammage: 8,
                type: "Perforant",
                weight: 1000,
                picture: pictureRapier,
                property: [
                    {
                        name: "Finesse"
                    }
                ]
            },
            {
                id: 32,
                name: "Trident",
                dice: 1,
                dammage: 6,
                type: "Perforant",
                weight: 2000,
                picture: pictureTrident,
                property: [
                    {
                        name: "Lancer",
                        range: "Port??e 6m/18m",
                    },
                    {
                        name: "Polyvalente",
                        dice: 1,
                        dammage: 8
                    }
                ]
            }  
        ]
    },
    {
        typeWeapon: "Armes de guerre ?? distance",
        weapons: [
            {
                id: 33,
                name: "Arbal??te de poing",
                dice: 1,
                dammage: 6,
                type: "Perforant",
                weight: 1500,
                picture: pictureHandCrossbow,
                property: [
                    {
                        name: "Munition",
                        range: "9m/36m",
                        loading: "Chargement"
                    },
                    {
                        name: "L??g??re",
                    }
                ]
            },
            {
                id: 34,
                name: "Arbal??te lourde",
                dice: 1,
                dammage: 10,
                type: "Perforant",
                weight: 9000,
                picture: pictureHeavyCrossbow,
                property: [
                    {
                        name: "Munition",
                        range: "30m/120m",
                        weight: "Lourde",
                        loading: "Chargement",
                        hands: "Deux mains"
                    }
                ]
            },
            {
                id: 35,
                name: "Arc long",
                dice: 1,
                dammage: 8,
                type: "Perforant",
                weight: 1000,
                picture: pictureLongBow,
                property: [
                    {
                        name: "Munition",
                        range: "30m/120m",
                        loading: "chargement",
                        hands: "Deux mains"
                    }
                ]
            },
            {
                id: 36,
                name: "Filet",
                dice: 0,
                dammage: 0,
                type: "",
                weight: 1500,
                picture: pictureNet,
                property: [
                    {
                        name: "Sp??cial",
                    },
                    {
                        name: "Lancer",
                        range: "1m50/4m50"
                    }
                ]
            },
            {
                id: 37,
                name: "Sarbacane",
                dice: 0,
                dammage: 1,
                type: "Perforant",
                weight: 5000,
                picture: pictureBlowpipe,
                property: [
                    {
                        name: "Munition",
                        range: "7m50/30m",
                        loading: "Chargement"
                    }
                ]
            }
        ]
    }
]