const { getRandomIntRange } =  require("../../libs");

var dailyItemsByChance = [   ]

const updateDailyItems = () => {
    dailyItemsByChance = [
        { item: global.itemMap["Poké Ball"], amount: {min: 2, max: 15 }, chance: 100},
        { item: global.itemMap["Great Ball"], amount: {min: 2, max: 2 }, chance: 40},
        { item: global.itemMap["Ultra Ball"], amount: {min: 1, max: 1 }, chance: 5}
    ]
}

const getDailyItem = () => {
    const itemAmount = getRandomIntRange(1, dailyItemsByChance.length);
    var items = [];
    console.log(dailyItemsByChance);
    for (let index = 0; index <= itemAmount; index++) {
       for (let j = 0; j < dailyItemsByChance.length; j++) {
            const element = dailyItemsByChance[j];
            const rng = getRandomIntRange(1, 100);
            console.log(rng)
            if(element.chance <= rng) {
                items.push({ item: element.item, amount: getRandomIntRange(element.amount.min, element.amount.max)});
                break;
            }
       }
        
    }

    return items;
}

module.exports = { getDailyItem, updateDailyItems }