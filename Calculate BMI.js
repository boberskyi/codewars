const bmi = (weight, height) => {
  let bmiCalc = weight / height ** 2;

  if (bmiCalc <= 18.5) return "Underweight";
  if (bmiCalc <= 25) return "Normal";
  if (bmiCalc <= 30) return "Overweight";

  return "Obese";
}