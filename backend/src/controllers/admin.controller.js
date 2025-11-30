import userUtils from "../utils/user.utils.js";


async function register(req, res) {
try {
  const { role, email, password } = req.body;
  
} catch (err) {
  console.error('', err);
}
}

async function login(req, res) {
  
}

async function getAllUsers(req, res) {

}

async function getUserById(req, res) { 

}

async function deleteUser(req, res) { 

}


async function getAllShipments(req, res) { 

}


async function getShipmentById(req, res) {

}


async function deleteShipment(req, res) { 

}

async function getAllTransactions(req, res) { 

}

async function getTransactionById(req, res) {

}

async function deleteTransaction(req, res) { 

}

async function getAllServices(req, res) {

}

async function getServiceById(req, res) { 

}

async function deleteService(req, res) { 

}

async function getAllBookings(req, res) {
  

}

async function getBookingById(req, res) {

}

async function deleteBooking(req, res) { 

}

async function getStats(req, res) {

}

export default {
  register,
  login,
  getAllUsers,
  getUserById,
  deleteUser,
  getAllShipments,
  getShipmentById,
  deleteShipment,
  getAllTransactions,
  getTransactionById,
  deleteTransaction,
  getAllServices,
  getServiceById,
  deleteService,
  getAllBookings,
  getBookingById,
  deleteBooking,
  getStats
}