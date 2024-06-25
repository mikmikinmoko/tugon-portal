export const ageCalc = (userAge) => {
  const today = new Date();
  const birthDate = new Date(userAge);
  const age = today.getFullYear() - birthDate.getFullYear();
  return age;
};
