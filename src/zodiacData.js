// zodiacData.js

export const zodiacSigns = [
  { name: "Aries", startDate: { month: 3, day: 21 }, endDate: { month: 4, day: 19 }, element: "", image: " ", description: "" },
  { name: "Tauro", startDate: { month: 4, day: 20 }, endDate: { month: 5, day: 20 }, element: "", image: "", description: "" },
  { name: "Géminis", startDate: { month: 5, day: 21 }, endDate: { month: 6, day: 20 }, element: "", image: "", description: "" },
  { name: "Cáncer", startDate: { month: 6, day: 21 }, endDate: { month: 7, day: 22 }, element: "", image: "", description: "" },
  { name: "Leo", startDate: { month: 7, day: 23 }, endDate: { month: 8, day: 22 }, element: "", image: "", description: "" },
  { name: "Virgo", startDate: { month: 8, day: 23 }, endDate: { month: 9, day: 22 }, element: "", image: "", description: "" },
  { name: "Libra", startDate: { month: 9, day: 23 }, endDate: { month: 10, day: 22 }, element: "", image: "", description: "" },
  { name: "Escorpio", startDate: { month: 10, day: 23 }, endDate: { month: 11, day: 21 }, element: "", image: "", description: "" },
  { name: "Sagitario", startDate: { month: 11, day: 22 }, endDate: { month: 12, day: 21 }, element: "", image: "", description: "" },
  { name: "Capricornio", startDate: { month: 12, day: 22 }, endDate: { month: 1, day: 19 }, element: "", image: "", description: "" },
  { name: "Acuario", startDate: { month: 1, day: 20 }, endDate: { month: 2, day: 18 }, element: "", image: "", description: "" },
  { name: "Piscis", startDate: { month: 2, day: 19 }, endDate: { month: 3, day: 20 }, element: "", image: "", description: "" }
];

export const getZodiacSign = (birthDate) => {
  if (!birthDate) return null;
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  for (const sign of zodiacSigns) {
    const { startDate, endDate } = sign;

    if (startDate.month > endDate.month) {
      if (
        (month === startDate.month && day >= startDate.day) ||
        (month === endDate.month && day <= endDate.day) ||
        (month > startDate.month || month < endDate.month)
      ) return sign;
    } else {
      if (
        (month === startDate.month && day >= startDate.day) ||
        (month === endDate.month && day <= endDate.day) ||
        (month > startDate.month && month < endDate.month)
      ) return sign;
    }
  }

  return null;
};

export const parseDate = (dateString) => {
  if (!dateString) return null;
  const parts = dateString.split('/');
  if (parts.length !== 3) return null;

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;

  return new Date(year, month - 1, day);
};
