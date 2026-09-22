import operationsUtils from "../utils/operations.utils.js";

async function initiateOperation(req, res) {
  try {
    const { importerId, exporterId } = req.body;
    if (!importerId || !exporterId) {
      return res.status(400).json({
        message: "Insufficient information",
      });
    }
    await operationsUtils.createOperation({
      importerId: importerId,
      exporterId: exporterId,
    });
    return res.status(200).json({
      message: "Successfully initiated an operation",
    });
  } catch (err) {
    console.error("Failed to initiate an operation", err);
    return res.status(400).json({
      message: "Failed to initiate an operation",
    });
  }
}

async function getUserOperation(req, res) {
  try {
  
  } catch (err) {
    console.error('Failed to fetch operation for this user', err);
    return res.status(400).json({
      message: 'Failed to fetch operation for this user',
    })
  }
}

async function updateOperation(req, res) {
  try {
    const { brokerId, bankId, serviceId, LogisticsId, ShipmentId, status, shipmentId } = req.body
    const operationId = req.params.operationId
    if ( !operationId ) {
      return res.status( 400 ).json( {
        message: "Invalid operationId"
      })
    }
    const operation = await operationsUtils.findOperationById( operationId )
    if ( !operation ) {
      return res.status( 404 ).json( {
        message: "Operation not found"
      })
    }
    const updatedOperation = await operationsUtils.updateOperation(operationId, {
      brokerId: brokerId,
      bankId: bankId,
      serviceId: serviceId,
      LogisticsId: LogisticsId,
      ShipmentId: ShipmentId,
      status: status,
      shipmentId: shipmentId,
    } );
    return res.status( 200 ).json( {
      message: "Successfully updated the operation",
      updatedOperation: updatedOperation
    })
    
  } catch (err) {
    console.error('Failed to update the operation', err);
    return res.status(400).json({
      message: 'Failed to update the operation',
    })
  }
}

export default { initiateOperation, getUserOperation, updateOperation };
