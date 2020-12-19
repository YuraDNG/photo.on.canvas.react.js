
export enum api {
  getUsers = "http://localhost:5000/api/Account/GetUsers",
  deleteUser = "http://localhost:5000/api/Account/DeleteUser",
  registration = "http://localhost:5000/api/Account/Register",
  confirmEmail = "http://localhost:5000/api/Account/ConfirmEmail",
  login = "http://localhost:5000/api/Account/Login",
  logout = "http://localhost:5000/api/Account/Logout",

  galleryAddImage = "http://localhost:5000/api/Gallery/AddImage",
  galleryGetImages = "http://localhost:5000/api/Gallery/GetImages",
  galleryDeleteImage = "http://localhost:5000/api/Gallery/DeleteImage",

  getCanvas = "http://localhost:5000/api/Canvas/GetCanvas",
  createCanvas = "http://localhost:5000/api/Canvas/CreateCanvas",
  deleteCanvas = "http://localhost:5000/api/Canvas/DeleteCanvas",

  getOrders = "http://localhost:5000/api/Order/GetOrders",
  makeOrder = "http://localhost:5000/api/Order/MakeOrder",
  deleteOrder = "http://localhost:5000/api/Order/DeleteOrder",
  
  createRole = "http://localhost:5000/api/Roles/CreateRole",
  deleteRole = "http://localhost:5000/api/Roles/DeleteRole",
  getRoles = "http://localhost:5000/api/Roles/GetRoles",
  getUserRoles = "http://localhost:5000/api/Roles/GetUserRoles",
  editUserRoles = "http://localhost:5000/api/Roles/EditUserRoles",

  getInstaStories = "http://localhost:5000/api/Instagram/GetStories",

  getEmailConfig = "http://localhost:5000/api/Configuration/GetEmailConfiguration",
  setEmailConfig = "http://localhost:5000/api/Configuration/SetEmailConfiguration",

  getInstaConfig = "http://localhost:5000/api/Configuration/GetInstagramConfiguration",
  setInstaConfig = "http://localhost:5000/api/Configuration/SetInstagramConfiguration",
}

// https://photo-on-canvas.azurewebsites.net