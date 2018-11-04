
export default function calculateAverageDamage (values) {

    return hitChance(values.attackModifier, values.armorClass, values.attackRolls);


}


function attackHits(attackModifier, ac, advantage) {
    let attack = {};

    attack['hit']  = false;
    attack['crit'] = false;

    for (let r=1; r <= advantage; r++) {

        let attackRoll = Math.round(Math.random()*20);

        if (!attack['hit']) {
            attack['hit'] = attackRoll != 1 && attackRoll + attackModifier >= ac;
        }

        if (!attack['crit']) {
            attack['crit'] = attackRoll == 20;
        }
    }

    return attack;
}

function hitChance (attackModifier, ac, advantage) {
    const throwAmmount = 1000000;
    let hits = 0;

    for (let i=0; i < throwAmmount; i++) {
        let attack = attackHits(attackModifier, ac, advantage);
        if (attack['hit']) {
            hits += 1;
        }
    }

    return hits/throwAmmount*100;
}

function calculateCritChance(rolls)
{
    const throwAmmount = 1000000;
    let successes = 0;

    for (let i=0; i < throwAmmount; i++) {

        for (let j=1; j <= rolls; j++) {
            let thrown = Math.round(Math.random()*20);

            if (thrown == 20) {
                successes += 1;
                break;
            }
        }
    }
    return (successes/throwAmmount)*100;
}