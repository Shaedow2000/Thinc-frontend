export default async function isUserLoggedIn(): Promise<boolean> {
  const token: string | null | undefined = localStorage.getItem("token");

  const response = await fetch("http://localhost:8080/auth/tokenAuth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  return Number(String(result.status)[0]) === 2;
}
