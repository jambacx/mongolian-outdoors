import otgontenger from "@/public/images/tour/mongolia/otgontenger.jpg";
import kharNuur from "@/public/images/tour/mongolia/nuur.jpeg";
import altaiTavanBogd from "@/public/images/tour/mongolia/altai-tawan.jpg";
import tsambagarav from "@/public/images/tour/mongolia/tsambagarav.jpg";

const TourData = [
  {
    id: 0,
    image: otgontenger,
    country: "MONGOLIA",
    spot: "Otgontenger Mountain",
    price: 450,
    discount: 500,
    day: 6,
    night: 5,
    totalCountry: 1,
    delay: "200",
    destination: "/tour-details/otgontenger",
  },
  {
    id: 1,
    image: kharNuur,
    country: "MONGOLIA",
    spot: "Ulaagchinii Khar Lake",
    price: 380,
    discount: 420,
    day: 5,
    night: 4,
    totalCountry: 1,
    delay: "400",
    destination: "/tour-details/ulaagchinii-khar-nuur",
  },
  {
    id: 2,
    image: altaiTavanBogd,
    country: "MONGOLIA",
    spot: "Altai Tavan Bogd National Park",
    price: 600,
    discount: 650,
    day: 7,
    night: 6,
    totalCountry: 1,
    delay: "600",
    destination: "/tour-details/altai-tavan-bogd",
  },
  {
    id: 3,
    image: tsambagarav,
    country: "MONGOLIA",
    spot: "Tsambagarav Mountain",
    price: 550,
    discount: 600,
    day: 6,
    night: 5,
    totalCountry: 1,
    delay: "800",
    destination: "/tour-details/tsambagarav",
  },
];

export default TourData;
