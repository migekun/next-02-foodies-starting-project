import sql from 'better-sqlite3';
import slugify  from "slugify";
import xss from "xss";
const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  //throw new Error('Something went wrong');
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare('select * from meals where slug = ?').get(slug);
}

export function saveMeal(meal){
  meal.slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions);

}