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
                type: "Tranchant",
                weight: 1000,
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
                weight: 2000
            },
            {
                id: 9,
                name: "Massue",
                dice: 1,
                dammage: 8,
                type: "Contondant",
                weight: 5000,
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
                property: [
                    {
                        name: "Munition",
                        range: "9m/36m"
                    }
                ]
            }
        ]
    }
]