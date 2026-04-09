import React from "react";
import useAuthStore from "@/store/authStore";
import { DownloadIcon } from "lucide-react";

const Download = () => {
  const { downloadDoc } = useAuthStore();

  const handleDownload = async () => {
    try {
      const fileId = "69d7a36e5c7cd75eb8c7c158";

      // 1. Get signed URL from backend
      const fileUrl = await downloadDoc( fileId );
      const a = document.createElement( "a" )
      a.href = fileUrl
      a.download = "document.pdf"
      a.click()

    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <DownloadIcon onClick={handleDownload}/>
    </div>
  );
};

export default Download;
