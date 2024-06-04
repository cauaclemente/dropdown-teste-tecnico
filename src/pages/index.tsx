import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import City from "@/components/city";

export default function Home() {


  return (
    <>
      <Head>
        <title>Dropdown de endereços</title>
      </Head>
      <form className={styles.container}>
        <h2>Endereço</h2>
        <div className={styles.inputs}>
          <span>Endereço</span>
          <input type="text"/>
        </div>
        <City />
          <div className={styles.inputs}>
            <span>Número</span>
            <input className={styles.inputNumber} type="number"  />
          </div>
      </form>
    </>
  );
}
