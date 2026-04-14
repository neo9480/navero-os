import ImageKit from "@imagekit/nodejs";
import config from "../config/config.js";

const imagekit = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

async function uploadFile(file, fileName) {
  return await imagekit.files.upload({
    file: file,
    fileName: fileName,
    useUniqueFileName: false,
  });
}

async function signedUrl(filePath) {
  return imagekit.helper.buildSrc({
    urlEndpoint: config.IMAGEKIT_URL_ENDPOINT,
    src: filePath,
    signed: true,
    expiresIn: 3600,
    queryParameters: {
      "ik-attachment": "true",
    },
  });
  // Result: URL with signature parameters (?ik-t=timestamp&ik-s=signature&ik-attachment=true)
}

export default {
  uploadFile,
  signedUrl,
};
