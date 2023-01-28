import Head from 'next/head'
import { Inter } from '@next/font/google'
import { motion, useScroll } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
            <div className="justify-items-center space-y-20">
                <div  className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div  className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div  className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div  className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div  className="bg-sky-400/90 m-auto w-[1300px] h-96 rounded-3xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
          </section>
      </main>
    </>
  )
}
