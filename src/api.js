import { url } from "./config";
import { FetchData, FetchDataGet } from "./config";

export async function RegisterUser(user) {
  const result = await FetchData("PUT", user, "/api/v2/accounts/register");
  return result;
}

export async function LoginUser(user) {
  const result = await FetchData("POST", user, "/api/v2/accounts/login");
  return result;
}

export async function UpdateUser(user) {
  const result = await FetchData("PUT", user, "/api/v2/accounts/user/update");
  return result;
}

export async function AddDriver(driver) {
  const result = await FetchData("POST", driver, "/api/v2/accounts/add/driver");
  return result;
}

export async function AddTractor(tractor) {
  const result = await FetchData("POST", tractor, "/api/v2/tractors/create");
  return result;
}

export async function AddTrailer(trailer) {
  const result = await FetchData("POST", trailer, "/api/v2/trailers/create");

  return result;
}

export async function GetTractorList(id) {
  const result = await FetchDataGet(
    id,
    "/api/v2/tractors/all/tractors",
    "organizationId"
  );

  return result;
}

export async function GetTrailersList(id) {
  const result = await FetchDataGet(
    id,
    "/api/v2/trailers/all/trailers",
    "organizationId"
  );

  return result;
}

export async function GetDriversList(id) {
  const result = await FetchDataGet(
    id,
    "/api/v2/accounts/all/drivers",
    "organizationId"
  );
  return result;
}

export async function GetTractorDetails(id) {
  const result = await FetchDataGet(id, "/api/v2/tractors/asset/id", "assetId");

  return result;
}

export async function UpdateTractor(tractor) {
  const result = await FetchData("PUT", tractor, "/api/v2/tractors/update");
  console.log(result);

  return result;
}
