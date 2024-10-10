import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card({ image, heading, description, id }) {
  return (
    <Link
      href={{
        pathname: `/blog/${id}`,
      }}
      className={styles.card}
    >
      <div>
        <div className="maincard-container flex flex-col">
          <div className={styles.imageContainer}>
            <Image
              src={image}
              quality={100}
              objectFit="cover"
              fill
              objectPosition="50% 85%"
              style={{ borderRadius: "10px 10px 0px 0px" }}
            />
          </div>
          <div
            className={`headings-container px-4 ${styles.headingsContainer}`}
          >
            <div className={styles.mainHeading}>{heading}</div>
            <div className={styles.desc}>{description}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
