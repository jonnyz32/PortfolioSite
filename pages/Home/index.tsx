import TopBar from "components/TopBar";
import Image from "next/image";
import styles from "./styles.module.scss";
// import Typed from 'typed.js'
import Typical from "react-typical";
import { useState, useEffect } from "react";

interface Props {
  active: string;
}

const HomePage = ({ active }) => {
  // const [val, setVal] = useState("");
  // const [comments, setComments] = useState([]);
  // useEffect(() => {
  //   document.querySelector("#first").innerHTML = val;
  // }, [val]);
  return (
    <>
      <TopBar active={active} />
      <main className={styles.homeWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/meCompressed.jpg"
            width={450}
            height={450}
            layout="intrinsic"
          />
        </div>
        <div className={styles.leftText}>
          <Typical
            loop={1}
            wrapper="h1"
            steps={[
              "Hi, I'm Jonathan. A full stack developer graduating April 2022",
            ]}
          ></Typical>
          {/* <h1>
            Hi, I'm Jonathan. A full stack developer specializing in clean code
            and data security. Click on the links to learn more about me!
          </h1> */}
        </div>

        {/* <input value={val} onChange={(e) => setVal(e.target.value)}></input>
        <button
          onClick={() => {
            setComments([...comments, val]);
          }}
        >
          click me
        </button> */}
        {/* {console.log("Val is", val)}
        <p id="first" style={{ color: "white" }}>
          first
        </p>

        {comments.map((comment) => (
          <a href={comment}>My Website</a>

          // <div dangerouslySetInnerHTML={{ __html: comment }}></div>
        ))} */}

        {/* <Typical
            loop={1}
            wrapper="h1"
            steps={[
              "Hi, I'm Jonathan. A full stack developer specializing in clean" +
                " code and data security. Click on the links to learn more about me!",
            ]}
          ></Typical> */}
      </main>
    </>
  );
};

export default HomePage;
