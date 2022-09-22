import picture from "../assets/icon-classic-pkb-128px.png";
import pictureStick from "../assets/stick.png";
import pictureDagger from "../assets/dagger.png";
import pictureCudgel from "../assets/cudgel.jpg";
import pictureHatchet from "../assets/hatchet.jpeg";
import pictureJavelin from "../assets/javelin.png";
import pictureSpear from "../assets/spear.png";
import pictureLightHammer from "../assets/light-hammer.jpeg";
import pictureMace from "../assets/mace.jpeg";
import pictureSerpe from "../assets/serpe.jpeg";
import pictureMassue from "../assets/massue.jpeg";

export const items = [
    {
        typeWeapon: "Armes courantes de corps à corps",
        weapons: [
            {
                id: 1,
                name: "Bâton",
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
                                name: "Légère"
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
                                name: "Légère"
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
                                name: "Légère"
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
                name: "Marteau léger",
                dice: 1,
                dammage: 4,
                type: "Contondant",
                weight: 1000,
                picture: pictureLightHammer,
                property: [
                    {
                        name: "Légère",
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
                        name: "Légère"
                    }
                ]
            }
        ]
    },
    {
        typeWeapon: "Armes courante à distance",
        weapons: [
            {
                id: 11,
                name: "Arbalète légère",
                dice: 1,
                dammage: 8,
                type: "Perforant",
                weight: 2500,
                picture: picture,
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
                picture: picture,
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
                name: "Fléchette",
                dice: 1,
                dammage: 4,
                type: "Perforant",
                weight: 100,
                picture: picture,
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
                picture: picture,
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
        typeWeapon: "Arme de guerre de corps à corps",
        weapons: [
            {
                id: 15,
                name: "Cimeterre",
                dice: 1,
                dammage: 6,
                type: "Tranchant",
                weight: 1500,
                picture: picture,
                property: [
                    {
                        name: "Finesse"
                    },
                    {
                        name: "Légère"
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
                picture: picture,
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
                name: "Epée à deux mains",
                dice: 2,
                dammage: 6,
                type: "Tranchant",
                weight: 3000,
                picture: picture,
                property: [
                    {
                        name: "Lourde",
                        hands: "Deux mains"
                    }
                ]
            },
            {
                id: 18,
                name: "Epée courte",
                dice: 1,
                dammage: 6,
                weight: 1000,
                picture: picture,
                property: [
                    {
                        name: "Finesse"
                    },
                    {
                        name: "Légère"
                    }
                ]
            },
            {
                id: 19,
                name: "Epée longue",
                dice: 1,
                dammage: 8,
                type: "Tranchant",
                weight: 1500,
                picture: picture,
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
                name: "Fléau d'arme",
                dice: 1,
                dammage: 8,
                type: "Tranchant",
                weight: 1500,
                picture: picture,
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
                picture: picture,
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
                name: "Hace à deux mains",
                dice: 1,
                dammage: 12,
                type: "Tranchant",
                weight: 3500,
                picture: picture,
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
                picture: picture,
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
                picture: picture,
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
                name: "Lance d'arçon",
                dice: 1,
                dammage: 12,
                type: "Perforant",
                weight: 3000,
                picture: picture,
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
                picture: picture,
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
                picture: picture,
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
                picture: picture,
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
                picture: picture,
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
                picture: picture,
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
                name: "Rapière",
                dice: 1,
                dammage: 8,
                type: "Perforant",
                weight: 1000,
                picture: picture,
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
                picture: picture,
                property: [
                    {
                        name: "Lancer",
                        range: "Portée 6m/18m",
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
        typeWeapon: "Armes de guerre à distance",
        weapons: [
            {
                id: 33,
                name: "Arbalète de poing",
                dice: 1,
                dammage: 6,
                type: "Perforant",
                weight: 1500,
                picture: picture,
                property: [
                    {
                        name: "Munition",
                        range: "9m/36m",
                        loading: "Chargement"
                    },
                    {
                        name: "Légère",
                    }
                ]
            },
            {
                id: 34,
                name: "Arbalète lourde",
                dice: 1,
                dammage: 10,
                type: "Perforant",
                weight: 9000,
                picture: picture,
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
                picture: picture,
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
                picture: picture,
                property: [
                    {
                        name: "Spécial",
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
                picture: picture,
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