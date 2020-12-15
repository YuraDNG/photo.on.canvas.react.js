
export enum api {
  getUsers = "https://photo-on-canvas.azurewebsites.net/api/Account/GetUsers",
  deleteUser = "https://photo-on-canvas.azurewebsites.net/api/Account/DeleteUser",
  registration = "https://photo-on-canvas.azurewebsites.net/api/Account/Register",
  confirmEmail = "https://photo-on-canvas.azurewebsites.net/api/Account/ConfirmEmail",
  login = "https://photo-on-canvas.azurewebsites.net/api/Account/Login",
  logout = "https://photo-on-canvas.azurewebsites.net/api/Account/Logout",

  galleryAddImage = "https://photo-on-canvas.azurewebsites.net/api/Gallery/AddImage",
  galleryGetImages = "https://photo-on-canvas.azurewebsites.net/api/Gallery/GetImages",
  galleryDeleteImage = "https://photo-on-canvas.azurewebsites.net/api/Gallery/DeleteImage",

  getCanvas = "https://photo-on-canvas.azurewebsites.net/api/Canvas/GetCanvas",
  createCanvas = "https://photo-on-canvas.azurewebsites.net/api/Canvas/CreateCanvas",
  deleteCanvas = "https://photo-on-canvas.azurewebsites.net/api/Canvas/DeleteCanvas",

  getOrders = "https://photo-on-canvas.azurewebsites.net/api/Order/GetOrders",
  makeOrder = "https://photo-on-canvas.azurewebsites.net/api/Order/MakeOrder",
  deleteOrder = "https://photo-on-canvas.azurewebsites.net/api/Order/DeleteOrder",
  
  createRole = "https://photo-on-canvas.azurewebsites.net/api/Roles/CreateRole",
  deleteRole = "https://photo-on-canvas.azurewebsites.net/api/Roles/DeleteRole",
  getRoles = "https://photo-on-canvas.azurewebsites.net/api/Roles/GetRoles",
  getUserRoles = "https://photo-on-canvas.azurewebsites.net/api/Roles/GetUserRoles",
  editUserRoles = "https://photo-on-canvas.azurewebsites.net/api/Roles/EditUserRoles",

  getInstaStories = "https://photo-on-canvas.azurewebsites.net/api/Instagram/GetStories",

  getEmailConfig = "https://photo-on-canvas.azurewebsites.net/api/Configuration/GetEmailConfiguration",
  setEmailConfig = "https://photo-on-canvas.azurewebsites.net/api/Configuration/SetEmailConfiguration",

  getInstaConfig = "https://photo-on-canvas.azurewebsites.net/api/Configuration/GetInstagramConfiguration",
  setInstaConfig = "https://photo-on-canvas.azurewebsites.net/api/Configuration/SetInstagramConfiguration",
}

// https://photo-on-canvas.azurewebsites.net