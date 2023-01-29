import Head from 'next/head'
import { Inter } from '@next/font/google'
import {motion, useScroll, useTransform, useMotionValue, useInView} from "framer-motion";
import Navbar from "@/pages/navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);

    const variants = {
        visible: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50
        }
    };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Framer Motion Test with Next.JS 13" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900 h-full w-full">
          <section>
            <Navbar></Navbar>
            <div className="justify-items-center space-y-20">
                <motion.div
                    transition={{ duration: 2, ease: 'easeOut'}}
                    className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}  className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}  className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}  className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}  className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </motion.div>
            </div>
          </section>
      </main>
    </>
  )
}
