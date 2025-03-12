'use client'

import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import classes from '@/components/main-header/main-header.module.css'
import MainHeaderBackground from "@/components/main-header/main-header-background";
import {usePathname} from "next/navigation";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {
  const pathname = usePathname();
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
          <li>
            <NavLink href="/meals" >Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
           </li>
        </ul>
      </nav>
    </header>
  </>)
}