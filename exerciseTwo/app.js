// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsScore = [96, 108, 89];
const koalasScore = [88, 91, 110];

const dolphinsBonusOne = [97, 112, 101];
const koalasBonusOne = [109, 95, 123];

const dolphinsBonusTwo = [97, 112, 101]; // 310
const koalasBonusTwo = [109, 95, 106]; // 310

const dolphinsCheating = [200, 200, 200];
const koalasLosers = [20, 20, 20];

const averageScore = (score) => {
    let totalScore = 0;
    for(let i = 0; i < score.length; i++) {
        totalScore += score[i]
    };

    const calculation = totalScore / score.length

    return calculation
};

const teamChampion = (dolphins, koalas) => {
    const dolphinsAvgScore = averageScore(dolphins);
    const koalasAvgScore = averageScore(koalas);

    if(dolphinsAvgScore >= 100 && dolphinsAvgScore > koalasAvgScore) {
        return "Team Dolphins have won!!!"
    } else if (koalasAvgScore >= 100 && koalasAvgScore > dolphinsAvgScore) {
        return "Team Koalas triumphed over the Dolphins!!"
    } else if (dolphinsAvgScore >= 100 && koalasAvgScore >= 100 && dolphinsAvgScore === koalasAvgScore) {
        return "Unbelievable! It's a draw!"
    } else {
        return "Sadly, nobody got the trophy."
    }
}

console.log(`First match: ${teamChampion(dolphinsScore, koalasScore)}`);
console.log(`Second match: ${teamChampion(dolphinsBonusOne, koalasBonusOne)}`);
console.log(`Third match: ${teamChampion(dolphinsBonusTwo, koalasBonusTwo)}`);
console.log(`Fourth match: ${teamChampion(dolphinsCheating, koalasLosers)}`);