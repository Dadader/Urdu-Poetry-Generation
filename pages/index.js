import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Poem from '../components/Poem'
import {SliderData} from '../components/SliderData';


export default function Home() {
  const poemData = {
    lines: [
      "چلتے چلتے کچھ تھم جانا پھر",
      "بوجھل قدموں سے چلنا",
      "یہ کیسی کسک سی باقی ہے",
      "جب پاؤں میں وہ کانٹا بھی نہیں"
    ],
    poet: "فہمیدہ ریاض"
  };
  
  return (
    <div>
      <Head>
        <title>Raqeeb</title>
        <meta name='description' content='Poetry Generation using AI' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Hero heading='Poetry Generation' message='Generate poetry using AI' />
      {/* <Slider slides={SliderData} />
      <Poem poemData={poemData} /> */}
    </div>
  );
}
