export default async function isUserLoggedIn(): Promise<boolean> {
  if (
    sessionStorage.getItem("username") &&
    sessionStorage.getItem("email") &&
    sessionStorage.getItem("notes")
  )
    return true;

  const token: string | null | undefined = localStorage.getItem("token");

  const response = await fetch("http://localhost:8080/auth/tokenAuth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  const isLoggedIn: boolean = Number(String(result.status)[0]) === 2;

  if (isLoggedIn) {
    const account = result.account;
    const notes = result.notes;

    sessionStorage.setItem("username", account.username);
    sessionStorage.setItem("email", account.email);
    sessionStorage.setItem("notes", JSON.stringify(notes));
  }

  return isLoggedIn;
}
