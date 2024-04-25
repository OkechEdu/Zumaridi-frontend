import {
  ZuUserProfile,
  ZuLockPassword,
  ZuBills,
  ZuFiles,
  ZuSecurity,
  ZuMoreCircle
} from "components/icons";
import {
  ChangePasswordForm,
  ProfileForm,
  BillingForm,
  FilesForm,
  SecurityForm,
  OthersForm
} from "components/modules/forms/settingsForms";
import { useState } from "react";

export const settingsTab = [
  {
    Icon: <ZuUserProfile />,
    name: "Profile",
    component: <ProfileForm />
  },
  {
    Icon: <ZuLockPassword />,
    name: "Password",
    component: <ChangePasswordForm />
  },
  {
    Icon: <ZuBills />,
    name: "Billing",
    component: <BillingForm />
  },
  {
    Icon: <ZuFiles />,
    name: "Files",
    component: <FilesForm />
  },
  {
    Icon: <ZuSecurity />,
    name: "Security",
    component: <SecurityForm />
  },
  {
    Icon: <ZuMoreCircle />,
    name: "Others",
    component: <OthersForm />
  }
];

const SettingsTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex">
        {settingsTab.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 p-4 text-left ${
              activeTab === index ? "text-green-500 border-b-2 border-green-500" : "text-gray-200"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <div className="flex items-center text-gray-200">
              {tab.Icon}
              <span className="ml-2 text-gray-200">{tab.name}</span>
            </div>
          </button>
        ))}
      </div>
      <hr className="w-full h-px bg-gray-100 shadow" />
      <div className="p-4">{settingsTab[activeTab].component}</div>
    </div>
  );
};

export default SettingsTab;
