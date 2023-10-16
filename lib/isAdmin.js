import axios from "axios";
export async function isAdmin() {
  try {
    const token = localStorage.getItem("authToken");

    const user = await axios.get(
      "http://localhost:8080/user/profile",

      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(user);
    if (user.data.role !== "ADMIN") {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
}
