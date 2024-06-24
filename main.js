
const recipeWithMeat = `
Рецепт борщу з м'ясом:
1. Зваріть 500 г свинини або яловичини у 2 літрах води до готовності, знімаючи піну.
2. Додайте 2-3 нарізаних картоплини в бульйон і варіть до готовності.
3. Обсмажте на сковороді 1 нарізану цибулину, 1 натерту моркву та 1 натертий буряк.
4. Додайте 2 столові ложки томатної пасти або 3-4 нарізані помідори до овочів, обсмажте ще кілька хвилин.
5. Додайте обсмажені овочі до бульйону з картоплею.
6. Наріжте 200 г капусти та додайте до супу, варіть ще 10-15 хвилин.
7. Додайте лавровий лист, сіль, перець та інші спеції за смаком.
8. Подавайте борщ зі сметаною та свіжою зеленню.
`;

const recipeWithoutMeat = `
Вегетаріанський рецепт борщу:
1. У 2 літрах води зваріть 2-3 нарізаних картоплини до готовності.
2. Обсмажте на сковороді 1 нарізану цибулину, 1 натерту моркву та 1 натертий буряк.
3. Додайте 2 столові ложки томатної пасти або 3-4 нарізані помідори до овочів, обсмажте ще кілька хвилин.
4. Додайте обсмажені овочі до каструлі з картоплею.
5. Наріжте 200 г капусти та додайте до супу, варіть ще 10-15 хвилин.
6. Додайте лавровий лист, сіль, перець та інші спеції за смаком.
7. Подавайте борщ зі сметаною та свіжою зеленню.
`;

// Предикат
const addMeat = true; 

// Умова
if (addMeat) {
    console.log(recipeWithMeat);
} else{
    console.log(recipeWithoutMeat);
}
