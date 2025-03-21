import { Suspense } from 'react';
import classes from "./page.module.css"
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export const metadata = {
  title: 'All Meals',
  description: 'Delicious meals, free for all.'
}
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
        <p>Choose your favourite recipe and cook it yourself. It is easy</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share your favourite recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Feching meals...</p>}>
          <Meals/>
        </Suspense>
      </main>
    </>
  )
}