import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Subtitle from '../components/Subtitle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Video Editor Portfolio</title>
        <meta name="description" content="Video Editor Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.heading}>
          <h1>Heesun</h1>
          <p>Video Editor/Videographer/Icons/Design artwork/Content Creator</p>
        </div>
        <div>
            {/* <Card2
              class="tiktok-embed"
              cite="https://www.tiktok.com/@harmonycmovement/video/6903933265099427077"
              data-video-id="6903933265099427077"
              style={{maxWidth: "605px", minWidth: "325px"}}
              src="https://www.tiktok.com/embed.js"
            >
            </Card2> */}
            <Subtitle title = "Video Editing"/> 
          <div className={styles.cards}>
            {/* <p className={styles.layeredCard__content}>hey</p> */}
            <Card title2="test"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HaTgMEJgzzI"
              title="Promo gig"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Card>
            <Card title2="test"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ufIeb74jVik"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Card>
            <Card title2="test"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tMrTEuvJQP0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Card>

            
          </div>

            <Subtitle title = "Videography"/>           
            {/* Youtube card section using embedded iFrame, the above method was more convuluted
            and didn't work well*/}
          <div className={styles.cards}>
            {/* <p className={styles.layeredCard__content}>hey</p> */}
            <Card title2="test"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/J_xSG0Fq9NE?start=10"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Card>
            <Card title2="test"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nGCRxSmG1Ck?start=9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Card>
            <Card title2="test"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/u-q2wEIZobE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Card>
          </div>

          <Subtitle title = "Artwork/Icons/Design"/>
            {/* Tiktok card section using embedded iFrame, the above method was more convuluted
            and didn't work well*/}
            <div className={styles.iframe_container}>
              <div className={styles.grid}>
              <Card3
                // className={styles.iframe}
                src="/1.png"
                alt='perfume'
                width="560"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/2.png"
                alt='makeup'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/3.png"
                alt='meditation'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/4.png"
                alt='nose_breathing'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/5.png"
                alt='waist_stretch'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/6.png"
                alt='back_stretch'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/7.png"
                alt='person_walking'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/8.png"
                alt='svg_portrait'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/9-1.png"
                alt='comic_1'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/9-2.png"
                alt='comic_2'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/11.png"
                alt='fox_icon'
                width="460"
                height="560"
              >
              </Card3>
              <Card3
                // className={styles.iframe}
                src="/12.png"
                alt='lady_sketch'
                width="460"
                height="560"
              >
              </Card3>
              </div>

            </div>
        </div>
      </main>
    </>
  )
}
