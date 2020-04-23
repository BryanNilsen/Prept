const Calculations = {
  getAge(person) {
    const today = new Date();
    const birthDate = new Date(person.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  },
  getWaterPerPersonPerDay(person) {
    const age = this.getAge(person);
    let ageMultiplier = 30;
    if (30 <= age <= 55) {
      ageMultiplier = 35;
    } else if (age < 30) {
      ageMultiplier = 40;
    }
    return Math.ceil(((person.weight / 2.2) * ageMultiplier) / 28.3);
  },
  getCaloriesPerPersonPerDay(person) {
    let calories = 0;
    if (person.gender === "M") {
      calories =
        10 * (person.weight / 2.2046) +
        6.25 * (person.height * 2.54) -
        5 * (this.getAge(person) - 161);
    } else {
      calories =
        10 * (person.weight / 2.2046) +
        6.25 * (person.height * 2.54) -
        5 * (this.getAge(person) - 161);
    }
    return Math.ceil(calories);
  },
  getTotalCaloriesNeededPerHouseholdPerDay(membersArray) {
    const caloriesTotal = membersArray.reduce(
      (acc, cv) => this.getCaloriesPerPersonPerDay(cv) + acc,
      0
    );
    return caloriesTotal.toLocaleString();
  },
  getTotalWaterNeededPerHouseholdPerDay(membersArray) {
    const caloriesTotal = membersArray.reduce(
      (acc, cv) => this.getWaterPerPersonPerDay(cv) + acc,
      0
    );
    return caloriesTotal.toLocaleString();
  },
  convertOzToGallons(oz) {
    return (oz / 128).toFixed(2);
  },
  convertInToFeet(totalInches) {
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    return `${feet}'${inches}"`;
  },
};

export default Calculations;

// ? WATER CALCULATION: https://www.goodhousekeeping.com/health/diet-nutrition/a46956/how-much-water-should-i-drink/
// Take your weight (in pounds) and divide that by 2.2.
// Multiply that number depending on your age: If you're younger than 30, multiply by 40. If you're between 30-55, multiply by 35. If you're older than 55, multiply by 30.
// Divide that sum by 28.3.
// Your total is how many ounces of water you should drink each day.
// Take your weight (in pounds) and divide that by 2.2.
// Multiply that number depending on your age: If you're younger than 30, multiply by 40. If you're between 30-55, multiply by 35. If you're older than 55, multiply by 30.
// Divide that sum by 28.3.
// Your total is how many ounces of water you should drink each day. Divide that number by 8 to see your result in cups.

// ((person.weight / 2.2) * 40) / 28.3

// ? Mifflin-St Jeor Equation:
// For men:
// BMR = 10W + 6.25H - 5A + 5
// For women:
// BMR = 10W + 6.25H - 5A - 161
