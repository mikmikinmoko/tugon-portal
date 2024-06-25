import Navigation from "../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import EditProfileForm from "./ProfileForm/EditProfileForm";

const ProfileInformation = () => {
  return (
    <>
      <Navigation />
      <div className="sm:px-6 md:px-24 lg:px-32 py-6 ">
        <div className="border-8 border-transparent shadow-2xl ">
          <EditProfileForm />
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
