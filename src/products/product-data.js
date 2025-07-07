import polyEdge550Img from "../assets/item1.png";
import polyEdgeE320Img from "../assets/item2.png";
import nokia3210Img from "../assets/item4.png";
import polyEdgeB30Img from "../assets/item3.png";
import blackwire52xxImg from "../assets/item5.png";
import voyager43xxImg from "../assets/item6.png";
import savi72xxImg from "../assets/item7.png";
import voyagerFree60Img from "../assets/item8.png";

export const PRODUCT_DATA = {
  products: [
    {
      name: "Poly Edge 550",
      price: 30,
      imageUrl: polyEdge550Img,
      hoverInfo: {
        description:
          "Durable desk phone with essential calling features for small offices.",
        features: {
          build: "Plastic",
          bluetooth: "5.0",
          batteryLife: "18 h",
          display: '2.4" LCD',
          port: "USB-C",
          charging: "15 W",
        },
      },
    },
    {
      name: "Poly Edge E320",
      price: 30,
      imageUrl: polyEdgeE320Img,
      hoverInfo: {
        description: "Entry-level IP phone with built-in Wi-Fi and HD audio.",
        features: {
          build: "Polycarbonate",
          wifi: "802.11ac",
          speaker: "HD Voice",
          os: "Linux-based",
          port: "RJ-45 + USB-C",
          charging: "PoE only",
        },
      },
    },
    {
      name: "Poly Edge B30",
      price: 210,
      imageUrl: polyEdgeB30Img,
      hoverInfo: {
        description:
          "Professional-grade VoIP phone with security and headset support.",
        features: {
          screen: "Color display",
          headsetSupport: "DECT",
          encryption: "TLS/SRTP",
          mic: "Noise canceling",
          port: "Ethernet + USB-A",
          charging: "PoE/USB",
        },
      },
    },
    {
      name: "Nokia 3210",
      price: 2010,
      imageUrl: nokia3210Img,
      hoverInfo: {
        description: "Classic mobile phone known for its legendary durability.",
        features: {
          releaseYear: "1999",
          battery: "1250 mAh",
          storage: "None",
          os: "Nokia OS",
          port: "2 mm pin",
          charging: "Proprietary",
        },
      },
    },
    {
      name: "Blackwire 52xx",
      price: 29,
      imageUrl: blackwire52xxImg,
      hoverInfo: {
        description:
          "Wired USB headset ideal for office calls and virtual meetings.",
        features: {
          type: "Headset",
          connector: "USB-A",
          microphone: "Boom mic",
          controls: "Inline call",
          weight: "96 g",
          compatibility: "MS Teams",
        },
      },
    },
    {
      name: "Voyager 43xx",
      price: 29,
      imageUrl: voyager43xxImg,
      hoverInfo: {
        description:
          "Wireless Bluetooth headset with long range and dual connectivity.",
        features: {
          type: "Headset",
          range: "50 m",
          talkTime: "24 h",
          multipoint: "Yes",
          port: "USB-C",
          noiseCanceling: "Active",
        },
      },
    },
    {
      name: "Savi 72xx",
      price: 29,
      imageUrl: savi72xxImg,
      hoverInfo: {
        description:
          "DECT wireless headset for office professionals needing secure calls.",
        features: {
          connectivity: "Wireless",
          range: "180 m",
          talkTime: "12 h",
          baseUnit: "Included",
          encryption: "256-bit AES",
          charging: "Dock",
        },
      },
    },
    {
      name: "Voyager Free 60",
      price: 29,
      imageUrl: voyagerFree60Img,
      hoverInfo: {
        description:
          "Premium true wireless earbuds with smart touch controls and ANC.",
        features: {
          formFactor: "Wireless",
          batteryLife: "24 h",
          touchControls: "Yes",
          voiceAssistant: "Yes",
          charging: "Wireless",
          port: "USB-C",
        },
      },
    },
  ],
};
