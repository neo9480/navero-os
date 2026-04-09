import storageService from "../services/storage.service.js";
import { v4 as uuidv4 } from "uuid";
import documentUtils from "../utils/document.utils.js";

async function uploadDocs(req, res) {
  try {
    // find params
    const { docType } = req.body; // add shipmentId as well in the future
    const userId = req.user.id;
    if (!req.file) {
      res.status(400).json({
        message: "File is empty or is currently being processed ",
      });
    }
    const file = req.file.buffer.toString("base64");
    const fileName = `${uuidv4()}_${req.file.originalname}`;
    if (!docType || !userId || !file || !fileName) {
      return res.status(400).json({
        message: "Please enter the required fields",
      });
    }
    const uploadResult = await storageService.uploadFile(file, fileName);
    if (!uploadResult) {
      return res.status(400).json({
        message: "Upload to cloud failed",
      });
    }
    const fileId = uploadResult.fileId;
    const filepath = uploadResult.filePath
    const fileUrl = uploadResult.url;
    await documentUtils.createDocument(fileId, docType, fileUrl, filepath, userId);
    return res.status(200).json({
      message: "Successfully uploaded the document",
      upload: uploadResult,
    });
    // send notification for uploading the docs
  } catch (err) {
    console.error("Failed to upload document:", err);
    return res.status(400).json({
      message: "Failed to upload document:",
    });
  }
}

// to build
async function requestDocs(req, res) {
  // need notifications controllers set for this one
  try {
  } catch (err) {
    console.error("Failed to request document:", err);
    return res.status(400).json({
      message: "Failed to request document:",
    });
  }
}

async function getDocs(req, res) {
  try {
    const result = await documentUtils.findDocsById(req.params.id);
    if (!result) {
      return res.status(404).json({
        message: "Document not found",
        document: null,
      });
    }
    return res.status(200).json({
      message: "Successfully fetched the document",
      document: result,
    });
  } catch (err) {
    console.error("Failed to fetch the document:", err);
    return res.status(400).json({
      message: "Failed to fetch the document:",
    });
  }
}

async function getAllDocs(req, res) {
  try {
    const result = await documentUtils.findDocsByUserId(req.params.userId);
    // result: [{},{},{}......,{}]
    if (!result) {
      return res.status(404).json({
        message: "Document not found",
        document: null,
      });
    }
    return res.status(200).json({
      message: "Successfully fetched the document",
      document: result,
    });
  } catch (err) {
    console.error("Failed to fetch the documents:", err);
    return res.status(400).json({
      message: "Failed to fetch the documents:",
    });
  }
}

// to build
async function updateDocs(req, res) {
  try {
  } catch (err) {
    console.error("Failed to update the document:", err);
    return res.status(400).json({
      message: "Failed to update the document:",
    });
  }
}

async function approveOrRejectDocs(req, res) {
  try {
    const fileId = req.params.id;
    const decision = req.body.decision;
    if (!fileId) {
      return res.status(400).json({
        message: "Missing document id",
      });
    }
    const validDoc = await documentUtils.findDocsById(fileId);
    if (!validDoc) {
      return res.status(404).json({
        message: "Document not found",
      });
    }
    console.log(req.body);
    if (decision !== "approve" && decision !== "reject") {
      return res.status(400).json({
        message: "Not a valid decision",
      });
    }
    const status = decision === "approve" ? "APPROVED" : "REJECTED";
    const updatedDoc = await documentUtils.updateDoc(
      { id: fileId },
      { approval: status },
    );
    if ( !updatedDoc ) {
      return res.status( 400 ).json( {
        message: "Failed to pass a decision on the document"
      })
    }
    console.log(req.user);
    return res.status(200).json({
      message: "Document rejected",
      document: updatedDoc,
    });
  } catch (err) {
    console.error("Failed to pass approval decision for the document:", err);
    return res.status(400).json({
      message: "Failed to pass approval decision for the document:",
    });
  }
}

async function downloadDocs(req, res) {
  try {
    const fileId = req.params.id
    if (!fileId) {
      return res.status( 400 ).json( {
        message: "Provide a file Id"
      })
    }
    const file = await documentUtils.findDocsById( fileId )
    if ( !file ) {
      return res.status( 404 ).json( {
        message: "File not found"
      })
    }
    const downloadUrl = await storageService.signedUrl( file.filePath )
    if ( !downloadUrl ) {
      return res.status( 400 ).json( {
        message: "Cannot provide a download url"
      })
    }
    return res.status( 200 ).json( {
      message: "Successfully created download URL",
      downloadUrl: downloadUrl,
      file: file
    })
  } catch (err) {
    console.error("Failed to download the document:", err);
    return res.status(400).json({
      message: "Failed to download the document:",
    });
  }
}

// to build
async function replaceDocs(req, res) {
  try {
  } catch (err) {
    console.error("Failed to replace the document:", err);
    return res.status(400).json({
      message: "Failed to replace the document:",
    });
  }
}

// to build
async function deleteDocs(req, res) {
  try {
  } catch (err) {
    console.error("Failed to delete the document:", err);
    return res.status(400).json({
      message: "Failed to delete the document:",
    });
  }
}

// to build
async function applyLc(req, res) {
  try {
  } catch (err) {
    console.error("Failed to apply LC:", err);
    return res.status(400).json({
      message: "Failed to apply LC:",
    });
  }
}

// to build
async function getAllLc(req, res) {
  try {
  } catch (err) {
    console.error("Failed to get the LCs:", err);
    return res.status(400).json({
      message: "Failed to get the LCs:",
    });
  }
}

// to build
async function issueLc(req, res) {
  try {
  } catch (err) {
    console.error("Failed to iusse LC:", err);
    return res.status(400).json({
      message: "Failed to iusse LC:",
    });
  }
}

// to build
async function adviceLc(req, res) {
  try {
  } catch (err) {
    console.error("Failed to advice LC:", err);
    return res.status(400).json({
      message: "Failed to advice LC:",
    });
  }
}

// to build
async function verifyDocs(req, res) {
  try {
  } catch (err) {
    console.error("Failed to verify the document:", err);
    return res.status(400).json({
      message: "Failed to verify the document:",
    });
  }
}

export default {
  uploadDocs,
  requestDocs,
  getDocs,
  getAllDocs,
  updateDocs,
  approveOrRejectDocs,
  downloadDocs,
  replaceDocs,
  deleteDocs,
  applyLc,
  getAllLc,
  issueLc,
  adviceLc,
  verifyDocs,
};
