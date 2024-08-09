export const formatDate = (dateStr) => {
  const dateObj = new Date(dateStr);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("id-ID", options);

  return formattedDate;
};
