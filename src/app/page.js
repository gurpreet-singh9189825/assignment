import Card from "@/components/Card";
import nobel from "/public/nobel.webp";
import portrait from "/public/Portrait.jpg";
import taiwan from "/public/Taiwan.jpg";
import vaccine from "/public/vaccine.jpg";
import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  const cardsData = [
    {
      id: 1,
      image: vaccine,
      mainHeading: "World-first Ovarian Cancer Vaccine",
      mainDesc:
        "Kyoto, Japan: Known for its stunning temples, traditional wooden houses, and beautiful gardens. Don’t miss the Arashiyama Bamboo Grove and the iconic Fushimi Inari Shrine with ...",
    },
    {
      id: 2,
      image: nobel,
      mainHeading: "Human Authored Book label",
      mainDesc: "Kyoto, Japan: Known for its stunning temples.",
    },
    {
      id: 3,
      image: portrait,
      mainHeading: "Hopfield and Hinton win Nobel for AI Work",
      mainDesc: "Kyoto, Japan: Known for its stunning temples.",
    },
    {
      id: 4,
      image: taiwan,
      mainHeading: "Taiwan faces and Energy Crunch",
      mainDesc: "Kyoto, Japan: Known for its stunning temples.",
    },
    {
      id: 5,
      image: vaccine,
      mainHeading: "World-first Ovarian Cancer Vaccine",
      mainDesc:
        "Kyoto, Japan: Known for its stunning temples, traditional wooden houses, and beautiful gardens. Don’t miss the Arashiyama Bamboo Grove and the iconic Fushimi Inari Shrine with its thousands of red torii gates.",
    },
    {
      id: 6,
      image: nobel,
      mainHeading: "Human Authored Book label",
      mainDesc: "Kyoto, Japan: Known for its stunning temples.",
    },
    {
      id: 7,
      image: portrait,
      mainHeading: "Hopfield and Hinton win Nobel for AI Work",
      mainDesc: "Kyoto, Japan: Known for its stunning temples.",
    },
    {
      id: 8,
      image: taiwan,
      mainHeading: "Taiwan faces and Energy Crunch",
      mainDesc: "Kyoto, Japan: Known for its stunning temples.",
    },
  ];

  const renderedCards = cardsData.map((cardData) => {
    return (
      <Card
        key={cardData.id}
        image={cardData.image}
        heading={cardData.mainHeading}
        description={cardData.mainDesc}
        id={cardData.id.toString()}
      />
    );
  });

  return (
    <div className="lg:flex justify-center">
      <div className="basis-7/12">
        <div className={styles.container}>{renderedCards}</div>
      </div>
    </div>
  );
}
