import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [response, setResponse] = useState('');

  const askAI = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Tell me something dark and poetic' }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Safewørd</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Safewørd</h1>
        <p className={styles.description}>Dark. Clean. Real.</p>

        <button className={styles.button} onClick={askAI}>
          Ask the AI
        </button>

        {response && <p className={styles.response}>{response}</p>}

        <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.button}>
          Follow on Instagram
        </a>
      </main>
    </div>
  );
}
