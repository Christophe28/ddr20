import pictureBreastplate from "../assets/armor/breastplate.png";
import pictureChainMail from "../assets/armor/chain-mail.png";
import pictureHalfPlate from "../assets/armor/half-plate.png";
import pictureHide from "../assets/armor/hide.png";
import picturePadded from "../assets/armor/padded.png";
import pictureRingMail from "../assets/armor/ring-mail.png";
import pictureScaleMail from "../assets/armor/scale-mail.png";
import pictureSplint from "../assets/armor/splint.png";
import pictureStuddedLeather from "../assets/armor/studded-leather.png";
import pictureShield from "../assets/armor/shield.png";

export const armor = [
    {
        typeArmor: "Armures légères",
        armor: [
            {
                id: 1,
                name: "Armure matelassée",
                ca: 11,
                modificator: "Modificateur DEX",
                discretion: "Désavantage",
                weight: 4000,
                picture: picturePadded
            },
            {
                id: 2,
                name: "Armure de cuir",
                ca: 11,
                modificator: "Modificateur DEX",
                discretion: "",
                weight: 5000,
                picture: picturePadded
            },
            {
                id: 3,
                name: "Armure de cuir clouté",
                ca: 12,
                modificator: "Modificateur DEX",
                discretion: "",
                weight: 6500,
                picture: pictureStuddedLeather
            },
        ]
    },
    {
        typeArmor: "Armures intermédiaire",
        armor: [
            {
                id: 4,
                name: "Peaux",
                ca: 12,
                modificator: "Modificateur DEX (max +2)",
                discretion: "",
                weight: 6000,
                picture: pictureHide
            },
            {
                id: 5,
                name: "Chemise de mailles",
                ca: 13,
                modificator: "Modificateur DEX (max +2)",
                discretion: "",
                weight: 10000,
                picture: pictureHide
            },
            {
                id: 6,
                name: "Ecailles",
                ca: 14,
                modificator: "Modificateur DEX (max +2)",
                discretion: "Désavantage",
                weight: 22500,
                picture: pictureScaleMail
            },
            {
                id: 7,
                name: "Cuirasse",
                ca: 14,
                modificator: "Modificateur DEX (max +2)",
                discretion: "",
                weight: 10000,
                picture: pictureBreastplate
            },
            {
                id: 8,
                name: "Demi-plate",
                ca: 15,
                modificator: "Modificateur DEX (max +2)",
                discretion: "Désavantage",
                weight: 20000,
                picture: pictureHalfPlate
            }
        ]
    },
    {
        typeArmor: "Armures lourdes",
        armor: [
            {
                id: 9,
                name: "Broigne",
                ca: 14,
                modificator: "",
                strength: "",
                discretion: "Désavantage",
                weight: 20000,
                picture: pictureRingMail
            },
            {
                id: 10,
                name: "Cotte de maille",
                ca: 16,
                modificator: "",
                strength: "For 13",
                discretion: "Désavantage",
                weight: 27500,
                picture: pictureChainMail
            },
            {
                id: 11,
                name: "Clibanion",
                ca: 17,
                modificator: "",
                strength: "For 15",
                discretion: "Désavantage",
                weight: 30000,
                picture: pictureSplint
            },
            {
                id: 12,
                name: "Harnois",
                ca: 18,
                modificator: "",
                strength: "For 15",
                discretion: "Désavantage",
                weight: 32500,
                picture: picturePadded
            }
        ]
    },
    {
        typeArmor: "Bouclié",
        armor: [
            {
                id: 13,
                name: "Bouclié",
                ca: +2,
                modificator: "",
                strength: "",
                discretion: "",
                weight: 3000,
                picture: pictureShield
            }
        ]
    }
]