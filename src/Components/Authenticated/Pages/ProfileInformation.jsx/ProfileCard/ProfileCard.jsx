import { Button, Card, Divider, Image, Modal, Form, Tag, message } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import EditProfileForm from "../ProfileForm/EditProfileForm";
import { user } from "../../../../../helpers/image";
// import refregion from "../../../../../Assets/Resources/json/refregion.json";
// import refprovince from "../../../../../Assets/Resources/json/refprovince.json";
// import refcitymun from "../../../../../Assets/Resources/json/refcitymun.json";
// import refbrgy from "../../../../../Assets/Resources/json/refbrgy.json";
import ChangePassword from "../ProfileForm/ChangePassword";
import { useUpdateProfile } from "../../../../../store/controller/profile";
import { useCitizenAuthStore } from "../../../../../store/storage/useAuth";

const ProfileCard = ({ getProfile }) => {
  const [editForm] = Form.useForm();

  const { data } = getProfile;

  // const files = data?.data?.files;
  const files = data?.data?.files;
  const profilePicture = files?.filter((file) => file.type === "PROFILE");
  console.log(profilePicture);

  const [open, setOpen] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const updateProfile = useUpdateProfile();

  const onFinish = (values) => {
    const { birthdate, age, ...rest } = values;
    console.log(rest);
    updateProfile.mutate(
      {
        ...rest,
        birthdate: dayjs(birthdate).format("YYYY-MM-DD"),
      },
      {
        onSuccess: (data) => {
          message.success(data.data.message);
          getProfile.refetch();
          setOpen(!open);
        },
        onError: (err) => {
          message.error(err.response.data.message);
        },
      }
    );
  };

  // const fullName = [getProfile.data?.data?.firstName]
  //   .concat(
  //     getProfile.data?.data?.middleName,
  //     getProfile.data?.data?.lastName,
  //     getProfile.data?.data?.suffix
  //   )
  //   .join(" ");

  console.log(import.meta.env.VITE_BASE_URL + "/" + profilePicture?.image);
  return (
    // <div className="md:border-8 md:border-transparent md:shadow-2xl lg:border-8 lg:border-transparent lg:shadow-xl w-full  flex flex-col items-center justify-center ">
    <div className="  w-full">
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="py-3">
          <div className="lg:border-r-2 lg:shadow-md  overflow-hidden h-full">
            <div className="relative border-2 w-full h-[19rem] rounded-full shadow-md overflow-hidden">
              <Image
                src={
                  import.meta.env.VITE_BASE_URL + "/" + data?.data?.files.image
                }
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="py-2 text-center flex flex-col">
              <span className="capitalize">{data?.data?.fullName}</span>
              <span className="text-stone-400 text-[14px]">
                {data?.data?.primaryEmail}
              </span>
              <div>
                <span className="text-stone-400 text-[14px] capitalize px-1">
                  Account ID:
                </span>
                <span className="text-[14px] capitalize">
                  {data?.data?.accountId}
                </span>
              </div>
              <div className="flex flex-col p-2 gap-2 ">
                <Button
                  className="w-full font-['Poppins']"
                  onClick={() => setOpen(!open)}
                >
                  Edit Profile
                </Button>
                <Button
                  className="w-full font-['Poppins']"
                  onClick={() => setChangePassword(!changePassword)}
                >
                  {changePassword
                    ? "Cancel Change Password"
                    : "  Change Password"}
                </Button>
                <Modal
                  open={open}
                  onCancel={() => setOpen(!open)}
                  width={800}
                  footer={null}
                >
                  <EditProfileForm
                    onFinish={onFinish}
                    form={editForm}
                    getProfile={getProfile}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-4 py-2">
          {changePassword ? (
            <Card>
              <div className="flex justify-end items-end">
                <Button
                  type="text"
                  onClick={() => setChangePassword(!changePassword)}
                >
                  &larr; Back
                </Button>
              </div>
              <Divider
                orientation="center"
                className="font-['Poppins']"
                style={{ color: "#234F8B", fontSize: "17px" }}
              >
                Change Password
              </Divider>
              <ChangePassword setChangePassword={setChangePassword} />
            </Card>
          ) : (
            <>
              <Card>
                <Divider
                  orientation="left"
                  className="font-['Poppins'] "
                  style={{ color: "#234F8B", fontSize: "17px" }}
                >
                  Personal Information
                </Divider>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 font-['Poppins'] gap-5 ">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">First Name</span>
                    <span className="text-[14px] capitalize">
                      {data?.data?.firstName}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Middle Name</span>
                    <span className="text-[14px] capitalize">
                      {data?.data?.middleName ? data?.data?.middleName : "-"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Last Name</span>
                    <span className="text-[14px] capitalize">
                      {data?.data?.lastName}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Suffix</span>
                    <span className="text-[14px] capitalize">
                      {data?.data?.suffix ? data?.data?.suffix : "-"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Birth Date</span>
                    <span className="text-[14px] capitalize">
                      {dayjs(data?.data?.birthdate).format("MMMM D, YYYY")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Sex</span>
                    <span className="text-[14px] capitalize">
                      {+data?.data?.sex === 0 ? "Male" : "Female"}
                    </span>
                  </div>
                </div>
              </Card>

              {/* <Card>
                <Divider
                  orientation="left"
                  className="font-['Poppins']"
                  style={{ color: "#234F8B", fontSize: "17px" }}
                >
                  Address Information
                </Divider>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-['Poppins'] gap-5 ">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Region</span>
                    <span className="text-[14px] capitalize">
                      {refregion
                        .filter((s) => s.regCode === getProfile.data?.data?.regionId)
                        .map((r) => r.regDesc)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Province</span>
                    <span className="text-[14px] capitalize">
                      {refprovince
                        .filter((s) => s.provCode === getProfile.data?.data?.provinceId)
                        .map((r) => r.provDesc)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">City</span>
                    <span className="text-[14px] capitalize">
                      {refcitymun
                        .filter((s) => s.citymunCode === getProfile.data?.data?.cityId)
                        .map((r) => r.citymunDesc)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Barangay</span>
                    <span className="text-[14px] capitalize">
                      {refbrgy
                        .filter((s) => s.brgyCode === getProfile.data?.data?.brgyId)
                        .map((r) => r.brgyDesc)}
                    </span>
                  </div>
                </div>
              </Card> */}
              <Card>
                <Divider
                  orientation="left"
                  className="font-['Poppins']"
                  style={{ color: "#234F8B", fontSize: "17px" }}
                >
                  Other Information
                </Divider>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-['Poppins'] gap-5 ">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Email</span>
                    <span className="text-[14px]">
                      {data?.data?.primaryEmail}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">Mobile Number</span>
                    <span className="text-[14px] capitalize">
                      {data?.data?.primaryMobile}
                    </span>
                  </div>
                </div>
              </Card>
              <Card>
                <Divider
                  orientation="left"
                  className="font-['Poppins']"
                  style={{ color: "#234F8B", fontSize: "17px" }}
                >
                  Departments
                </Divider>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-['Poppins'] gap-5 ">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">
                      Seionr Citizen Office Affair's
                    </span>
                    <div className="flex justify-start items-start">
                      <span>
                        <Tag color="#52c41a">APPROVED</Tag>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">
                      Urban Poor Affair's Office
                    </span>
                    <div className="flex justify-start items-start">
                      <span>
                        <Tag color="#52c41a">APPROVED</Tag>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999] text-[12px]">
                      Person with Disability Office Affiar's
                    </span>
                    <div className="flex justify-start items-start">
                      <span>
                        <Tag color="#f5222d">DECLINED</Tag>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#9a9999]">
                      Gender and Development
                    </span>

                    <div className="flex justify-start items-start">
                      <span>
                        <Tag color=" #fa541c">PENDING</Tag>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
