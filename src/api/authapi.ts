export async function fetchAndStoreUserUUID() {
  const response = await fetch("https://randomuser.me/api/?results=1&nat=us");
  if (!response.ok) {
    throw new Error("مشکل اینترنت");
  }
  const data = await response.json();
  const uuid = data?.results?.[0]?.login?.uuid;
  if (uuid) {
    localStorage.setItem("userUUID", uuid);
  }
  return uuid;
}
