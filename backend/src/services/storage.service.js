import ImageKit from "@imagekit/nodejs";
import config from "../config/config.js";

const imagekit = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
} );

async function uploadFile(file, fileName) {
  return await imagekit.files.upload( {
    file:file,
    fileName: fileName,
    useUniqueFileName: false
  })
}

export default {
  uploadFile,
}