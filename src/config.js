export const url = "http://10.20.8.158:5002";

export async function FetchData(method, data, api) {
  const requestOptions = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url + api, requestOptions);

    const json = await response.json();

    if (json.message) throw new Error(json.message);

    return json;
  } catch (err) {
    return err.message;
  }
}

export async function FetchDataGet(id, api, name) {
  const response = await fetch(url + api + `?${name}=${id}`);

  const json = await response.json();

  return json;
}

export const isDataValid = (user) => {
  return Object.values(user).every((field) => {
    return field;
  });
};
