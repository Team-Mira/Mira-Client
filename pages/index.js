import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />
    </div>
  );
}
