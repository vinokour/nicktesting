import React from "react";
import type { AppProps } from "next/app";
import Aos from "aos";
import { useEffect, useState } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import NextNProgress from "nextjs-progressbar";
import { Navbar, Footer } from "../components";
import Router from "next/router";

import "../styles/globals.css";
import "aos/dist/aos.css";
import Head from "next/head";

function IsaacJuracichNextStarter({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  const [exitBefore, setExitBefore] = useState(false);

  const smoothScroll = () => {
    const html = document.querySelector("html");
    if (html) {
      html.style.scrollBehavior = "smooth";
    }
  };

  const removeSmoothScroll = () => {
    const html = document.querySelector("html");
    if (html) {
      setTimeout(() => {
        html.style.scrollBehavior = "unset";
      }, 0);
    }
  };

  Router.events.on("hashChangeStart", smoothScroll);
  Router.events.on("hashChangeComplete", removeSmoothScroll);

  return (
    <>
      <Head>
        <title>Isaac Juracich</title>
        <meta
          name="description"
          content="Isaac Juracich's personal website. I'm a software engineer and web developer."
        />
        <meta name="keywords" />
        <meta name="author" content="Isaac Juracich" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/x-icon" href="/logo.jpg"></link>
      </Head>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={!exitBefore}>
          <m.div
            key={router.route}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
                scale: 0.8,
              },
              animate: {
                opacity: 1,
                scale: 1,
              },
              exit: {
                opacity: 0,
                scale: 0.8,
              },
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <NextNProgress
              options={{ easing: "ease", speed: 250, showSpinner: false }}
              color="#f8f8f8"
              startPosition={0.3}
              stopDelayMs={500}
              height={2}
              showOnShallow={true}
              transformCSS={(css) => {
                const newCss = `#nprogress {
                    pointer-events: none;
                  }
                  #nprogress .bar {
                    background-image: linear-gradient(to right, #38bdf8, #3b82f6);
                    position: fixed;
                    z-index: 9999;
                    top: 2px;
                    left: 0;
                    width: 100%;
                    height: 3px;
                  }
                  #nprogress .peg {
                    display: block;
                    position: absolute;
                    right: 0px;
                    width: 100px;
                    height: 100%;
                    box-shadow: 0 0 10px #f8f8f8, 0 0 5px #f8f8f8;
                    opacity: 1;
                    -webkit-transform: rotate(3deg) translate(0px, -4px);
                    -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
                  }
                  #nprogress .spinner {
                    display: block;
                    position: fixed;
                    z-index: 1031;
                    top: 15px;
                    right: 15px;
                  }
                  #nprogress .spinner-icon {
                    width: 18px;
                    height: 18px;
                    box-sizing: border-box;
                    border: solid 2px transparent;
                    border-top-color: #f8f8f8;
                    border-left-color: #f8f8f8;
                    border-radius: 50%;
                    -webkit-animation: nprogresss-spinner 400ms linear infinite;
                    animation: nprogress-spinner 400ms linear infinite;
                  }
                  .nprogress-custom-parent {
                    overflow: hidden;
                    position: relative;
                  }
                  .nprogress-custom-parent #nprogress .spinner,
                  .nprogress-custom-parent #nprogress .bar {
                    position: absolute;
                  }
                  @-webkit-keyframes nprogress-spinner {
                    0% {
                      -webkit-transform: rotate(0deg);
                    }
                    100% {
                      -webkit-transform: rotate(360deg);
                    }
                  }
                  @keyframes nprogress-spinner {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }`;

                return <style>{newCss}</style>;
              }}
            />
            <Navbar {...pageProps} />
            <Component {...pageProps} />
            <Footer {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default IsaacJuracichNextStarter;
