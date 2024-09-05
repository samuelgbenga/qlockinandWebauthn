import React, { useState } from "react"; // Ensure useState is imported
import AddEmployeeModal from "../components/modals/AddEmployeeModal"; // Ensure the path is correct
import { useLoaderData } from "react-router-dom";
import FailToLoadPage from "./FailToLoadPage";
import { getDashboardSummary } from "../api/getDashboardSummary";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = useLoaderData();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-[1150px]">
        <div className="flex flex-col gap-[24px]">
          <div className="w-[1150px] h-[281px] flex items-start gap-[32px]">
            <div className="w-[950px] h-[281px] flex flex-col gap-[17px]">
              <div className="w-[950px] h-[132px] flex gap-[28px]">
                <div className="w-[258px] h-full bg-white rounded-[6px] p-[18px_23px_18px_24px] flex">
                  <div className="w-auto h-auto min-w-[156px] min-h-[96px] flex flex-col gap-3">
                    <div className="w-[73px] h-[46px] flex items-center">
                      <span className="font-inter text-[38px] font-semibold leading-[45.99px] text-left ext-[#252C58]">
                        452
                      </span>
                    </div>
                    <div className="w-auto h-auto min-w-[156px] min-h-[38px] flex flex-col gap-0">
                      <div className="w-[127px] h-[19px] text-left font-inter text-[16px] font-semibold leading-[19.36px] text-[#252C58]">
                        Total Employees
                      </div>
                      <div className="w-[168px] h-[15px] flex">
                        <div className="w-[14px] h-[14px] bg-[#97CE71] rounded-full flex mr-1">
                          <img
                            src="/src/assets/icons/+.svg"
                            alt="Icon"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="w-[160px] h-[14px] flex">
                          <span className="text-[13px] font-normal leading-[14.4px] text-[#252C58]">
                            2 new employees added!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[42px] h-[42px] bg-[#6A0DAD] bg-opacity-10 rounded-full flex items-center justify-center">
                    <img
                      src="src/assets/icons/Group.svg"
                      alt="Icon"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                </div>
                <div className="w-[258px] h-full bg-white rounded-[6px] p-[18px_23px_18px_24px] flex">
                  <div className="w-auto h-auto min-w-[156px] min-h-[96px] flex flex-col gap-3">
                    <div className="w-[73px] h-[46px] flex items-center">
                      <span className="font-inter text-[38px] font-semibold leading-[45.99px] text-left ext-[#252C58]">
                        360
                      </span>
                    </div>
                    <div className="w-auto h-auto min-w-[156px] min-h-[38px] flex flex-col gap-0">
                      <div className="w-[127px] h-[19px] text-left font-inter text-[16px] font-semibold leading-[19.36px] text-[#252C58]">
                        On Time
                      </div>
                      <div className="w-[178px] h-[15px] flex">
                        <div className="w-[15px] h-[12px] bg-[#97CE71] rounded-full flex mr-1">
                          <img
                            src="src/assets/icons/Vector (1).svg"
                            alt="Icon"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="w-[178px] h-[14px] flex">
                          <span className="text-[13px] font-normal leading-[14.4px] text-[#252C58]">
                            -10% Less than yesterday
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[42px] h-[42px] bg-[#6A0DAD] bg-opacity-10 rounded-full flex items-center justify-center">
                    <img
                      src="src/assets/icons/Group 8947.svg"
                      alt="Icon"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                </div>
                <div className="w-[258px] h-full bg-white rounded-[6px] p-[18px_23px_18px_24px] flex">
                  <div className="w-auto h-auto min-w-[156px] min-h-[96px] flex flex-col gap-3">
                    <div className="w-[73px] h-[46px] flex items-center">
                      <span className="font-inter text-[38px] font-semibold leading-[45.99px] text-left ext-[#252C58]">
                        30
                      </span>
                    </div>
                    <div className="w-auto h-auto min-w-[156px] min-h-[38px] flex flex-col gap-0">
                      <div className="w-[127px] h-[19px] text-left font-inter text-[16px] font-semibold leading-[19.36px] text-[#252C58]">
                        Absent
                      </div>
                      <div className="w-[178px] h-[15px] flex">
                        <div className="w-[15px] h-[12px] bg-[#CE7171] bg-opacity-10 rounded-full flex mr-1">
                          <img
                            src="src/assets/icons/Vector (2).svg"
                            alt="Icon"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="w-[160px] h-[14px] flex">
                          <span className="text-[13px] font-normal leading-[14.4px] text-[#252C58]">
                            2 new employees added!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[42px] h-[42px] bg-[#6A0DAD] bg-opacity-10 rounded-full flex items-center justify-center">
                    <img
                      src="src/assets/icons/Vector (3).svg"
                      alt="Icon"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[950px] h-[132px] flex gap-[28px]">
                <div className="w-[258px] h-full bg-white rounded-[6px] p-[18px_23px_18px_24px] flex">
                  <div className="w-auto h-auto min-w-[156px] min-h-[96px] flex flex-col gap-3">
                    <div className="w-[73px] h-[46px] flex items-center">
                      <span className="font-inter text-[38px] font-semibold leading-[45.99px] text-left ext-[#252C58]">
                        62
                      </span>
                    </div>
                    <div className="w-auto h-auto min-w-[156px] min-h-[38px] flex flex-col gap-0">
                      <div className="w-[127px] h-[19px] text-left font-inter text-[16px] font-semibold leading-[19.36px] text-[#252C58]">
                        Late Arrival
                      </div>
                      <div className="w-[198px] h-[15px] flex">
                        <div className="w-[15px] h-[12px] bg-[#CE7171] bg-opacity-10 rounded-full flex mr-1">
                          <img
                            src="src/assets/icons/Vector (2).svg"
                            alt="Icon"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="w-[198px] h-[14px] flex">
                          <span className="text-[13px] font-normal leading-[14.4px] text-[#252C58]">
                            +3% Increase than yesterday
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[42px] h-[42px] bg-[#6A0DAD] bg-opacity-10 rounded-full flex items-center justify-center">
                    <img
                      src="src/assets/icons/pajamas_time-out.svg"
                      alt="Icon"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                </div>
                <div className="w-[258px] h-full bg-white rounded-[6px] p-[18px_23px_18px_24px] flex">
                  <div className="w-auto h-auto min-w-[156px] min-h-[96px] flex flex-col gap-3">
                    <div className="w-[73px] h-[46px] flex items-center">
                      <span className="font-inter text-[38px] font-semibold leading-[45.99px] text-left ext-[#252C58]">
                        6
                      </span>
                    </div>
                    <div className="w-auto h-auto min-w-[156px] min-h-[38px] flex flex-col gap-0">
                      <div className="w-[138px] h-[19px] text-left font-inter text-[16px] font-semibold leading-[19.36px] text-[#252C58]">
                        Early Departures
                      </div>
                      <div className="w-[198px] h-[15px] flex">
                        <div className="w-[15px] h-[12px] bg-[#97CE71] rounded-full flex mr-1">
                          <img
                            src="src/assets/icons/Vector (1).svg"
                            alt="Icon"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="w-[190px] h-[14px] flex">
                          <span className="text-[13px] font-normal leading-[14.4px] text-[#252C58]">
                            -10% Less than yesterday
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[42px] h-[42px] bg-[#6A0DAD] bg-opacity-10 rounded-full flex items-center justify-center">
                    <img
                      src="src/assets/icons/material-symbols_bedtime-outline.svg"
                      alt="Icon"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                </div>
                <div className="w-[258px] h-full bg-white rounded-[6px] p-[18px_23px_18px_24px] flex">
                  <div className="w-auto h-auto min-w-[156px] min-h-[96px] flex flex-col gap-3">
                    <div className="w-[73px] h-[46px] flex items-center">
                      <span className="font-inter text-[38px] font-semibold leading-[45.99px] text-left ext-[#252C58]">
                        42
                      </span>
                    </div>
                    <div className="w-auto h-auto min-w-[156px] min-h-[38px] flex flex-col gap-0">
                      <div className="w-[127px] h-[19px] text-left font-inter text-[16px] font-semibold leading-[19.36px] text-[#252C58]">
                        Time-off
                      </div>
                      <div className="w-[198px] h-[15px] flex">
                        <div className="w-[15px] h-[12px] bg-[#CCDDFA] rounded-full flex mr-1">
                          <img
                            src="src/assets/icons/Vector (1).svg"
                            alt="Icon"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="w-[198px] h-[14px] flex">
                          <span className="text-[13px] font-normal leading-[14.4px] text-[#252C58]">
                            2% Increase than yesterday
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[42px] h-[42px] bg-[#6A0DAD] bg-opacity-10 rounded-full flex items-center justify-center">
                    <img
                      src="src/assets/icons/fluent-mdl2_date-time-12.svg"
                      alt="Icon"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-auto h-auto min-w-[173px] min-h-[40px] bg-[#6A0DAD] p-[10px] rounded-[8px] border border-[#6A0DAD] shadow-[0px_1px_2px_0px_#1018280D] flex items-center gap-[8px] cursor-pointer">
              <div className="w-[29px] h-[20px]">
                <img
                  src="src/assets/icons/Frame 38813503.svg"
                  alt="Icon"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[104px] h-[20px] flex items-center justify-center ">
                <span
                  onClick={handleOpenModal}
                  className="text-sm font-medium leading-[20px] text-white "
                >
                  Add Employees
                </span>
              </div>
            </div>
            {isModalOpen && <AddEmployeeModal onClose={handleCloseModal} />}
          </div>

          <div className="w-[356px] h-[380px]">
            <img
              src="src/assets/icons/Frame 38813487.svg"
              alt="Icon"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

async function loader({ request: { signal } }) {
  const resp = await getDashboardSummary({ signal });

  return resp;
}

export const dashboardPageUrl = {
  loader,
  errorElement: <FailToLoadPage message={"Employee List"} />,
  element: <DashboardPage />,
};
