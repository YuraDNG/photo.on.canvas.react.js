
export enum api {
  getUsers = "https://localhost:5001/api/Account/GetUsers",
  deleteUser = "https://localhost:5001/api/Account/DeleteUser",
  registration = "https://localhost:5001/api/Account/Register",
  confirmEmail = "https://localhost:5001/api/Account/ConfirmEmail",
  login = "https://localhost:5001/api/Account/Login",
  logout = "https://localhost:5001/api/Account/Logout",

  getCanvas = "https://localhost:5001/api/Canvas/GetCanvas",
  createCanvas = "https://localhost:5001/api/Canvas/CreateCanvas",
  deleteCanvas = "https://localhost:5001/api/Canvas/DeleteCanvas",

  getOrders = "https://localhost:5001/api/Order/GetOrders",
  makeOrder = "https://localhost:5001/api/Order/MakeOrder",
  deleteOrder = "https://localhost:5001/api/Order/DeleteOrder",
  
  createRole = "https://localhost:5001/api/Roles/CreateRole",
  deleteRole = "https://localhost:5001/api/Roles/DeleteRole",
  getRoles = "https://localhost:5001/api/Roles/GetRoles",
  getUserRoles = "https://localhost:5001/api/Roles/GetUserRoles",
  editUserRoles = "https://localhost:5001/api/Roles/EditUserRoles",

  getEmailConfig = "https://localhost:5001/api/Configuration/GetEmailConfiguration",
  SetEmailConfig = "https://localhost:5001/api/Configuration/SetEmailConfiguration",
}