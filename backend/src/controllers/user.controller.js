async function quoteRequestToExporter(req, res) {}
async function quoteRequestToLogistics(req, res) {}
async function exporterQuoteResponse(req, res) {}
async function logisticsQuoteRespoonse(req, res) {}
async function getAllQuotes(req, res) {}
async function brokerValidateDocs(req, res) {}
async function brokerSubmitDocs(req, res) {}
async function bankPaymentRelease(req, res) {}
async function getCustomsEvents(req, res) {}
async function customsUpdateEventStatus(req, res) {}

export default {
  quoteRequestToExporter,
  quoteRequestToLogistics,
  exporterQuoteResponse,
  logisticsQuoteRespoonse,
  getAllQuotes,
  brokerValidateDocs,
  brokerSubmitDocs,
  bankPaymentRelease,
  getCustomsEvents,
  customsUpdateEventStatus,
};
