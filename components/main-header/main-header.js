import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import classes from '@/components/main-header/main-header.module.css'
import MainHeaderBackground from "@/components/main-header/main-header-background";

export default function mainHeader() {
  return (<>
    <MainHeaderBackground/>
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logo}
               priority
               alt="A plate with food in it" />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li><Link href="/meals">Browse Meals</Link></li>
          <li><Link href="/community">Community</Link></li>
        </ul>
      </nav>
    </header>
  </>)
}