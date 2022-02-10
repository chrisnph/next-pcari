export const getAllMovies = async ({ orderBy }) => {
  const data = await fetch(`${process.env.API_URL}/movies`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: {
      order_by: JSON.stringify(orderBy),
    },
  }).then((response) => response.json());

  return orderBy === "newest"
    ? data.sort((a, b) => (new Date(a.release) > new Date(b.release) ? -1 : 1))
    : data;
};

export const searchSchedules = async (body) => {
  return await fetch(`${process.env.API_URL}/schedules/search`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  }).then((response) => response.json());
};
