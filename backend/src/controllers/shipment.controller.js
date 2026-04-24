import serviceUtils from "../utils/service.utils";
import shipmentUtils from "../utils/shipment.utils";
import userUtils from "../utils/user.utils";

async function createShipment(req, res) {
  const allowedRole = ["EXPORTER", "BROKER"];
  const {
    importerId,
    exporterId,
    brokerId,
    serviceId,
    carrier,
    origin,
    destination,
    documents,
  } = req.body;
  const operationId = req.params.operationId;
  if (
    !importerId ||
    !exporterId ||
    !carrier ||
    !origin ||
    !destination ||
    !documents ||
    !operationId
  ) {
    return res.status(400).json({
      message: "Incomplete information",
    });
  }
  const importer = await userUtils.findUserById(importerId);
  if (!importer) {
    return res.status(400).json({
      message: "Importer by this id does not exist",
    });
  }
  const exporter = await userUtils.findUserById(exporterId);
  if (!exporter) {
    return res.status(400).json({
      message: "Exporter by this id does not exist",
    });
  }
  if (brokerId) {
    const broker = await userUtils.findUserById(brokerId);
    if (!broker) {
      return res.status(400).json({
        message: "Broker by this id does not exist",
      });
    }
  }
  if (serviceId) {
    const service = await serviceUtils.getServiceById(serviceId);
    if (!service) {
      return res.status(400).json({
        message: "Service by this id does not exist",
      });
    }
  }
  const shipment = await shipmentUtils.createShipment(
    importerId,
    exporterId,
    brokerId,
    serviceId,
    carrier,
    origin,
    destination,
    documents,
  );
  return res.status(200).json({
    message: "Shipment created succesfully",
    shipment: shipment,
  });
}
async function getAllUserShipment(req, res) {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(400).json({
      message: "userId is required",
    });
  }
  const user = await userUtils.findUserById(userId);
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  const shipments = () => {
    if ( user.role === "IMPORTER" ) {
    const shipments = await shipmentUtils.getImporterShipments(userId);
    return shipments;
  } else if (user.role === "EXPORTER") {
    const shipments = await shipmentUtils.getExporterShipments(userId);
    return shipments;
  } else if (user.role === "BROKER") {
    const shipments = await shipmentUtils.getBrokerShipments(userId);
    return shipments;
    }
  }
  if ( !shipments ) {
    return res.status( 404 ).json( {
      message: "No shipment for this user found"
    })
  }
  return res.status( 200 ).json( {
    message: "Shipments fetched successfully",
    shipment: shipments
  })
}
async function getAllShipmentInOperation( req, res ) {
  const operationId = req.params.operationId
  if ( !operationId ) {
    return res.status( 400 ).json( {
      message: "Operation id is required"
    })
  }
  const shipment = await shipmentUtils.getAllShipmentInOperation( operationId )
  if ( !shipment ) {
    return res.status( 404 ).json( {
      message: "No shipment for this operation found"
    })
  }
}
async function getShipment(req, res) {}
async function updateShipment(req, res) {}
async function updateShipmentStatus(req, res) {}
async function createShipmentInsurance(req, res) {}
async function fileShipmentInsuranceClaim(req, res) {}
async function addTrackingEvent(req, res) {}
async function getAllTrackingEvent(req, res) {}

export default {
  createShipment,
  getAllUserShipment,
  getAllShipmentInOperation,
  getShipment,
  updateShipment,
  updateShipmentStatus,
  createShipmentInsurance,
  fileShipmentInsuranceClaim,
  addTrackingEvent,
  getAllTrackingEvent,
};
