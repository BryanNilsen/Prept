const Calculations = {
  getWaterPerPersonPerDay(person) {
    return Math.ceil(person.weight * 2.1);
  },
  getAge(person) {
    var today = new Date();
    var birthDate = new Date(person.dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  },
};

export default Calculations;

// Take your weight (in pounds) and divide that by 2.2.
// Multiply that number depending on your age: If you're younger than 30, multiply by 40. If you're between 30-55, multiply by 35. If you're older than 55, multiply by 30.
// Divide that sum by 28.3.
// Your total is how many ounces of water you should drink each day. Divide that number by 8 to see your result in cups.

// ((person.weight / 2.2) * 40) / 28.3
