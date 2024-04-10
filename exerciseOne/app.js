const bibi = {
    mass: 88,
    height: 1.69
};

const bobi = {
    mass: 92,
    height: 1.95
};


const bodyMassIndex = (personMass, personHeight) => {
    const mass = personMass / personHeight ** 2;

    console.log(mass.toFixed(2))
    return mass;
}

const bibiInfo = bodyMassIndex(bibi.mass, bibi.height);
const bobiInfo = bodyMassIndex(bobi.mass, bobi.height);

const markHigherBMI = () => {
    let BMI = true;
    if(bibiInfo > bobiInfo) {
        BMI = true;
        console.log(`Bibi's BMI is higher than Bobi's!`)
    } else {
        BMI = false;
        console.log(`Bobi's BMI is higher than Bibi's!`)
    };
}

markHigherBMI();