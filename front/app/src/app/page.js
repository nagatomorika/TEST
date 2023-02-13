'use client'
import Layout from "./layout";
import Styles from "./page.module.css";
import axios from "axios";

function handleClick() {
  console.log("increment like count")
 }

export default function Home() {
  return(
    <Layout>
      <div  className={Styles.button}>
        <button onClick={handleClick}>
          Get Response
        </button>
      </div>
    </Layout>
  );
}


