import classes from "@/app/meals/loading.module.css";
export default function MealsLoadingPage() {
  return (
    <p className={classes.loading}>
      Fetching meals...
    </p>
  )
}