const { getRandomIntRange } =  require("../../libs");

const dailyItemsByChance = [
    { item: global.itemMap["Poké Ball"], amount: {min: 2, max: 15 }, chance: 100},
    { item: global.itemMap["Great Ball"], amount: {min: 2, max: 2 }, chance: 40},
    { item: global.itemMap["Ultra Ball"], amount: {min: 1, max: 1 }, chance: 5},
]

module.exports = getDailyItem = () => {
    const itemAmount = getRandomIntRange(1, dailyItemsByChance.length);
    const items = [];
    for (let index = 0; index <= itemAmount; index++) {
       for (let index = 0; index < dailyItemsByChance.length; index++) {
            const element = array[index];
            if(element.chance <= getRandomIntRange(0, 100)) {
                items.push({ item: element.item, amount: getRandomIntRange(amount.min, amount.max)});
                break;
            }
       }
        
    }

    return items;
}