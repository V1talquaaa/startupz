import React from 'react'
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Hiring } from "../components/Hiring";
import { MobileHeader } from "../components/MobileHeader";
import { Rocket } from "../components/Rocket";
import { Solutions } from "../components/Solutions";
import { Values } from "../components/Values";
import { Works } from "../components/Works";
import { BackTop } from "../components/ui/BackTop";

export const Home = () => {
  return (
    <>
<BackTop />
<MobileHeader />
<Header />
<Hero />
<About />
<Solutions />
<Values />
<Works />
<Hiring />
<Rocket />
<Footer />
    </>
  )
}
