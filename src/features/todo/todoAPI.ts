// A mock function to mimic making an async request for data
export async function fetchToDo(id?: number) {
  let url = `https://jsonplaceholder.typicode.com/todos`;
  if (typeof id !== "undefined") {
    url += `/${id}`;
  }
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(`API response is not ok ${response.status}`);
  } catch (e) {
    throw new Error(`Fetch failed ${e.message}`);
  }
}
