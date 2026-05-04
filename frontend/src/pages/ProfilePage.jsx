import AnimBtn from "@/components/commonComponents/AnimBtn";
import DashboardLayout from "@/components/dashboardComponents/DashboardLayout";
import Kpi from "@/components/dashboardComponents/Kpi";
import useAuthStore from "@/store/useAuthStore";
import React from "react";
import { useEffect } from "react";

// Profile, profile settings, creds, edit profile
function ProfilePage() {
  const { getUser, user, isAuthReady } = useAuthStore();

  useEffect( () => {
    if (isAuthReady)
    getUser();
  }, [ isAuthReady, getUser ] );
  
  if (!isAuthReady) return (
    <DashboardLayout className="flex justify-center items-center text-2xl text-platinum-500">
      Initializing...
    </DashboardLayout>
  );

  if (!user) return <DashboardLayout className="flex justify-center items-center text-2xl text-platinum-500">Loading...</DashboardLayout>;
  return (
    <DashboardLayout>
      {/* <div>
        <nav></nav>
      </div> */}
      <div className="bg-space_indigo-100 text-platinum-500 rounded-xl overflow-hidden border h-full">
        <div className=" h-[23vh]">
          <img
            src="https://i.pinimg.com/originals/a5/cd/66/a5cd66eb9db842af2f7edfaa6f93f805.gif"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="px-[7vw] flex flex-col items-center gap-2">
            <div className="flex gap-2">
              <div className=" h-[20vh] w-[20vh] border-4 border-space_indigo-100 rounded-full -mt-7">
                <img
                  src="https://github.com/shadcn.png"
                  alt=""
                  className="h-[19.7vh] w-[19.7vh] object-cover rounded-full border-2 "
                />
              </div>
              <div className="flex flex-col flex-wrap font-extralight">
                <p className="text-5xl">{user.companyName}</p>
                <p className="text-2xl capitalize">{user.role}</p>
                <p className="text-md text-platinum-500/70">{user.email}</p>
                <p className="text-md text-platinum-500/70">{user.address}</p>
              </div>
            </div>
            <div className="flex justify-end-safe items-center w-full gap-2">
              <AnimBtn
                bgColor={"bg-punch_red-500"}
                ctaText={"Contact Us"}
                hoverColor={"bg-punch_red-400"}
              />
              <AnimBtn
                bgColor={"bg-punch_red-500"}
                ctaText={"Follow"}
                hoverColor={"bg-punch_red-400"}
              />
            </div>
          </div>
          <div className="px-2 py-2.5 ">
            <Kpi />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ProfilePage;
