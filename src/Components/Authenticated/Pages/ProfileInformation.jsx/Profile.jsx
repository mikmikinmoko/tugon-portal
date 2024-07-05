import { useGetProfile } from "../../../../store/controller/profile";
import { useCitizenAuthStore } from "../../../../store/storage/useAuth";
import Navigation from "../../../UnAuthenticated/LandingPage/Navigation/Navigation";

import ProfileCard from "./ProfileCard/ProfileCard";

const ProfileInformation = () => {
  const getProfile = useGetProfile();

  return (
    <>
      <Navigation />
      <div className="sm:px-6 md:px-16 lg:px-32 py-6 font-['Poppins'] text-[16px] ">
        <ProfileCard getProfile={getProfile} />
      </div>
    </>
  );
};

export default ProfileInformation;
