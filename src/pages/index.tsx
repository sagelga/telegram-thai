import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="/icon/android-chrome-192x192.png"
          alt="Telegram Thai Translation"
          className={styles.heroLogo}
          width={192}
          height={192}
          fetchPriority="high"
        />
        <h1 className="hero__title">กลุ่มการแปล Telegram</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" href="https://bit.ly/3mjFu1d">
            ช่วยเราแปล Telegram ให้เป็นภาษาไทย
          </Link>
          <Link className="button button--secondary button--lg" href="https://bit.ly/3J5DAtV">
            วิธีใช้ Telegram ในภาษาไทย
          </Link>
          <Link className="button button--secondary button--lg" href="https://bit.ly/3xDcmrv">
            เข้าร่วมกลุ่ม Telegram ภาษาไทย
          </Link>
          <Link className="button button--secondary button--lg" to="/guideline/">
            แนวทางในการแปล
          </Link>
          <Link className="button button--secondary button--lg" to="/community/">
            ข้อกำหนดกลุ่ม Telegram
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/sagelga/telegram-thai/issues/"
          >
            🎉 ช่วยเราพัฒนาเว็บไซต์นี้!
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://bit.ly/3kZOeJD"
          >
            ดาวน์โหลดแอพฯ Telegram
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent(): React.JSX.Element {
  return (
    <section className={styles.content}>
      <div className="container">
        <h2>ยินดีต้อนรับทุกคน</h2>
        <p>
          ขอต้อนรับทุกคนเข้าสู่เว็บไซต์{' '}
          <a href="http://bit.ly/41zEDJU">กลุ่มการแปล Telegram ภาษาไทย</a>{' '}
          พวกเรายินดีเป็นอย่างยิ่งที่เพื่อน ๆ
          จะได้มาเป็นส่วนหนึ่งในการเปลี่ยนแปลง Telegram ในประเทศไทยไปด้วยกัน เพียงใช้งาน Telegram ในภาษาไทย
          พร้อมทั้งให้คำแนะนำกับพวกเราใน{' '}
          <a href="http://bit.ly/41zEDJU">กลุ่มการแปล Telegram ภาษาไทย</a>{' '}
          เท่านี้เพื่อน ๆ ก็มีส่วนร่วมกับกลุ่มการแปลภาษา Telegram แล้วหล่ะครับ
        </p>
        <p>
          เป้าหมายของกลุ่มแปลภาษา Telegram ของพวกเราคืออยากให้เพื่อน ๆ ได้ใช้งานแอพฯ แชท Telegram
          ได้แม้ว่าเพื่อน ๆ จะไม่เก่งภาษาอังกฤษหรือภาษาอื่น ๆ ก็ตาม
          เปิดพื้นที่สาธารณะนี้ให้คนทั่วโลกได้ใช้งานแอพฯ ได้อย่างง่ายดายมากยิ่งขึ้น
        </p>
        <h2>ทำไมต้องเป็นแอพฯ Telegram ด้วย?</h2>
        <p>
          การใช้งานแอพพลิเคชันสื่อสารออนไลน์เป็นสิ่งที่สำคัญมากขึ้นทุก ๆ วัน
          แต่มีหลายแอพพลิเคชั่นที่ใช้ข้อมูลส่วนบุคคลรวมไปถึงประวัติการใช้งานแอพฯ
          อย่างเช่น Facebook Messenger, Instagram DM, WhatsApp หรือ Line มาทำให้เราเป็นตัวประกัน
        </p>
        <p>
          หรือบางแอพฯ เช่นกันที่มีโฆษณาพร้อมกับฟีเจอร์ที่เราไม่ได้ใช้งานมาเปลืองพื้นที่จัดเก็บเครื่องของเราอีก
        </p>
        <p>
          ดังนั้นแอพพลิเคชัน Telegram จึงมาเป็นอีกหนึ่งตัวเลือกให้เพื่อน ๆ ในประเทศไทยได้ใช้งานกัน
          โดยแอพฯ นั้นได้รับความนิยมสูงพร้อมมีความสามารถในการสื่อสารและการแชทที่มีความปลอดภัย
        </p>
        <p>
          และวันนี้กลุ่มการแปลภาษา Telegram ยังเปิดให้เพื่อน ๆ ใช้งานภาษาไทยเพื่อความสะดวกในการใช้งานแบบฟรี ๆ อีกด้วย
        </p>
        <p>
          วันนี้จึงเป็นนิมิตหมายที่เพื่อน ๆ จะสามารถเข้ามามีส่วนร่วมในการพัฒนาแอพฯ ให้ดียิ่งขึ้นได้อีกด้วย
          เพียง{' '}
          <a href="https://bit.ly/3mjFu1d">
            เริ่มแปลประโยคภาษาภายในแอพฯ Telegram ให้กลายเป็นภาษาไทย
          </a>{' '}
          ผ่านในเว็บไซต์อย่างเป็นทางการของ Telegram (https://translations.telegram.org/)
        </p>
        <p>
          แม้ว่าตอนนี้คุณจะมีเพียง 10 นาทีหรือ 1 ชั่วโมง คุณเองก็สามารถช่วยพวกเราได้
          และการแปลของท่านก็อาจถูกนำไปใช้งานจริงบนทุกแพลตฟอร์มของ Telegram
          ให้กับทุกคนที่ใช้แพ็กภาษาไทยอีกด้วย
        </p>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
