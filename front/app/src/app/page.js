import Layout from "./layout";
import Styles from "./page.module.css";

export default function Home() {
  return <Layout>
    <div className={Styles.button}>
    <button>Get Response</button>
    </div>
  </Layout>;
}
