import storageService from "../services/storage.service.js";
import { v4 as uuidv4 } from "uuid";

async function uploadDocs(req, res) {
  const file = req.file.buffer.toString( "base64" )
  const fileName = `${uuidv4()}_${req.file.originalName}`
  const uploadResult = await storageService.uploadFile( file, fileName )
  res.status( 200 ).json( {
    upload: uploadResult
  });
}
async function requestDocs(req, res) {}
async function getDocs(req, res) {}
async function getAllDocs(req, res) {}
async function updateDocs(req, res) {}
async function approveDocs(req, res) {}
async function rejectDocs(req, res) {}
async function downloadDocs(req, res) {}
async function replaceDocs(req, res) {}
async function deleteDocs(req, res) {}
async function applyLc(req, res) {}
async function getAllLc(req, res) {}
async function issueLc(req, res) {}
async function adviceLc(req, res) {}
async function verifyDocs(req, res) {}

export default {
  uploadDocs,
  requestDocs,
  getDocs,
  getAllDocs,
  updateDocs,
  approveDocs,
  rejectDocs,
  downloadDocs,
  replaceDocs,
  deleteDocs,
  applyLc,
  getAllLc,
  issueLc,
  adviceLc,
  verifyDocs,
};
