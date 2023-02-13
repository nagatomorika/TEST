'use client'
import Layout from "./layout";
import Styles from "./page.module.css";
import axios from "axios";

function handleClick() {
  axios.get('http://localhost:3000/api/v1/posts').then(response => {
  console.log(response.data);
  });
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


