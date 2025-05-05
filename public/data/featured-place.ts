import otgontenger from "@/public/images/tour/mongolia/otgontenger.jpg";
import ulaagchiniiKharNuur from "@/public/images/tour/mongolia/nuur.jpeg";
import telmenLake from "@/public/images/tour/mongolia/altai-tawan.jpg";

const FeaturedPlaceData = [
  {
    id: 0,
    image: otgontenger,
    country: "MONGOLIA",
    spot: "Otgontenger Mountain",
    location: "Zavkhan Province, Mongolia",
    price: 450,
    day: 6,
    night: 5,
    review: 45,
    delay: "100",
    destination: "/tour-details/otgontenger",
    description:
      "Ascend Mongolia's sacred peak, Otgontenger, and experience panoramic views of the Khangai Mountains.",
  },
  {
    id: 1,
    image: ulaagchiniiKharNuur,
    country: "MONGOLIA",
    spot: "Ulaagchinii Khar Lake",
    location: "Zavkhan Province, Mongolia",
    price: 380,
    day: 5,
    night: 4,
    review: 38,
    delay: "200",
    destination: "/tour-details/ulaagchinii-khar-nuur",
    description:
      "Discover the serene beauty of Ulaagchinii Khar Lake, nestled amidst sand dunes and mountains.",
  },
  {
    id: 2,
    image: telmenLake,
    country: "MONGOLIA",
    spot: "Telmen Lake",
    location: "Zavkhan Province, Mongolia",
    price: 400,
    day: 5,
    night: 4,
    review: 40,
    delay: "300",
    destination: "/tour-details/telmen-lake",
    description:
      "Explore the tranquil shores of Telmen Lake, a haven for migratory birds and nature enthusiasts.",
  },
];

export default FeaturedPlaceData;
