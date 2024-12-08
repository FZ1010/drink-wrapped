export async function userName(): Promise<string | null> {
  try {
    const response = await fetch("/api/auth/user");
    const data = await response.json();

    if (response.ok && data.name) {
      return data.name;
    } else {
      console.error("Error fetching user name:", data.error);

      return null;
    }
  } catch (error) {
    console.error("Error fetching user name:", error);

    return null;
  }
}
