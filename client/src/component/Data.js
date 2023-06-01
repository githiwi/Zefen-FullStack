import teddy from "../audio/teddy.mp3";
import TeddyAfro from "../artist/TeddyAfro.jpg";
import mulatu from "../artist/mulatu.jpg";
import mehamud from "../artist/mehamud.jpg";
import maritu from "../artist/maritu.jpeg";
import gigi from "../artist/gigi.jpeg";
import gashaberamola from "../artist/gashaberamola.jpg";
import kukusebsebe from "../artist/kukusebsebe.jpg";
import aster from "../artist/aster.jpg";
import asterewedalew from "../audio/asterewedalew.mp3";
import gigiabayie from "../audio/gigiabayie.mp3";
import kukumotihen from "../audio/kukumotihen.mp3";
import mahmoudegdayenesh from "../audio/mahmoudegdayenesh.mp3";
import tizita from "../audio/tizita.mp3";

const musicalGenre = {
  bati: {
    title: " ባቲ",
    description:
      "The Bati scale belongs to the group of Ethiopian scales because of the geographical location where it was born and its typical sound. ",
    songs: [
      {
        title: "Hagere ",
        artist: "Tedrose Kasahun ",
        image: TeddyAfro,
        music: teddy,
      },
      {
        title: "Nalegn",
        artist: "Aster Aweke",
        image: aster,
        music: asterewedalew,
      },
    ],
  },
  ambasel: {
    title: " አምባሰል",
    description:
      "Ambassel ( Amharic አምባሰል ), also ambasäl , is a pentatonic tonal system used mainly in the historical regions of Begemder , Shewa and Wällo in the highlands of Ethiopia in the secular music of the Amhara .",
    songs: [
      {
        title: "Abay",
        artist: "Egegayew shibabaw",
        image: gigi,
        music: gigiabayie,
      },
      {
        title: "kuku",
        artist: "Kuku sebsebe",
        image: kukusebsebe,
        music: kukumotihen,
      },
    ],
  },
  tizita: {
    title: " ትዝታ",
    description:
      "Tizita songs are a popular music genre in Ethiopia and Eritrea. It's named after the Tizita Qañat mode/scale used in such songs. Tizita is known for strongly moving listener's feelings not only among the Amhara, but a large number of Ethiopians, in general.",
    songs: [
      {
        title: "engedaye nesh",
        artist: "Mehamud ahmed 1",
        image: mehamud,
        music: mahmoudegdayenesh,
      },
      {
        title: "Tizita",
        artist: "Maritu",
        image: maritu,
        music: tizita,
      },
    ],
  },
  anchihoye: {
    title: " አንቺሆዬ",
    description:
      "Anchihoye kignt start with a free style introduction played by bass and Begena accompany the Masinqo which helps the singer in the tune.",
    songs: [
      {
        title: "Abay",
        artist: "Egegayew Shibabaw",
        image: gigi,
        music: gigiabayie,
      },
      {
        title: "Checheho",
        artist: "Aster Aweke",
        image: aster,
        music: asterewedalew,
      },
    ],
  },
};
export default musicalGenre;
