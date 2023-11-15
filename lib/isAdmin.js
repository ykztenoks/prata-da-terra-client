import api from "./api";
export async function isAdmin() {
  try {
    const token = localStorage.getItem("authToken");

    const user = await api.get("/user/profile");
    console.log(user);
    if (user.data.role !== "ADMIN") {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
}
