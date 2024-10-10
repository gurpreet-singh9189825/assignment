import nobel from "/public/nobel.webp";
import Image from "next/image";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <div className="main flex ">
      <div className="sidebar basis-1/4  h-52 pt-7 ">sidebar</div>
      <div className={`basis-4/6  pt-7 ${styles.aside}`}>
        <div className={styles.heroImage}>
          <Image
            src={nobel}
            quality={100}
            objectFit="cover"
            fill
            objectPosition="50% 85%"
            style={{ borderRadius: "10px 10px 10px 10px" }}
          />
        </div>

        <div className="content flex ">
          <div className="main-content basis-4/6 ">
            <h1 className="text-4xl pt-5 font-semibold">
              Ben Franklin 200 Years Trust Experiment
            </h1>
            <div className="cont mt-5">
              <span className="text-4xl font-bold ">L</span>orem ipsum dolor sit
              amet, consectetur adipisicing elit. Quaerat placeat nobis iure
              excepturi aliquam fuga, vel amet voluptates veniam corrupti! Ea
              quaerat a ducimus hic praesentium eum. Saepe, commodi aut!Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              placeat nobis iure excepturi aliquam fuga, vel amet voluptates
              veniam corrupti! Ea quaerat a ducimus hic praesentium eum. Saepe,
              commodi aut!
            </div>

            <div className="secondPost flex flex-col ">
              <div className="heading">
                <h1 className="text-4xl pt-5 font-semibold">
                  Ben Franklin 200 Years Trust Experiment
                </h1>
              </div>
              <div className={`mt-3 ${styles.postImage}`}>
                <Image
                  src={nobel}
                  quality={100}
                  objectFit="cover"
                  fill
                  objectPosition="50% 85%"
                  style={{ borderRadius: "10px 10px 10px 10px" }}
                />
              </div>
              <div className="text mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat placeat nobis iure excepturi aliquam fuga, vel amet
                voluptates veniam corrupti! Ea quaerat a ducimus hic praesentium
                eum. Saepe, commodi aut!Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quaerat placeat nobis iure excepturi aliquam
                fuga, vel amet voluptates veniam corrupti! Ea quaerat a ducimus
                hic praesentium eum. Saepe, commodi aut!
              </div>
            </div>
          </div>
          <div className="lists basis-1/4 ">
            introduction
            <ul>
              <li>Lorem ipsum, dolor sit amet </li>
              <li>Lorem ipsum, dolor sit amet </li>
              <li>Lorem ipsum, dolor sit amet </li>
              <li>Lorem ipsum, dolor sit amet </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
