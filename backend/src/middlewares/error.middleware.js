async function errorHandler(err, req, res, next) {
  console.error( err );
  res.status( err.status || 500 ).json( {
    message: err.message || "internal server error"
  } );
  next();
};

export default {
  errorHandler
};
