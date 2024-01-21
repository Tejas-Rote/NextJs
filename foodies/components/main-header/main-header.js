import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLInk from "./nav-link";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLInk href="/meals">Browse Meals</NavLInk>
            </li>
            <li>
              <NavLInk href="/community">Foodies Community</NavLInk>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
