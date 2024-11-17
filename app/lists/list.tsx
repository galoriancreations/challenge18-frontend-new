"use client"; // מציין שהקומפוננטה רצה בצד הלקוח
import { useState } from "react";

const startupData = [
  { name: "NUTEK OIDO", founded: 2019, model: "B2B", employees: "1-10", stage: "Pre-Seed", raised: "$1.78M", tags: ["patent-pending", "detection", "cancer"] },
  { name: "Terraflex Industries", founded: 1968, model: "B2B, B2C, B2G", employees: "11-50", stage: "Mature", raised: "Undisclosed", tags: ["water-utilities", "medical-devices"] },
  { name: "Zimperium", founded: 2010, model: "B2B, B2G", employees: "201-500", stage: "E", raised: "$72M", tags: ["endpoint-security", "mobile-applications"] },
  { name: "Stops.com", founded: 2016, model: "B2B2C", employees: "1-10", stage: "Pre-Seed", raised: "$1.5M", tags: ["3d-technology", "content-providers"] },
  { name: "VALFIX Medical", founded: 2016, model: "B2B", employees: "1-10", stage: "Seed", raised: "$8.76M", tags: ["cardiology", "medical-technologies"] },
];

const StartupList = () => {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // הגדרת המערך כשל מספרים

  const toggleSelectAll = () => {
    if (selectedAll) {
      setSelectedItems([]); // במצב של Unselect All
    } else {
      setSelectedItems(startupData.map((_, index) => index)); // בוחר את כל הפריטים
    }
    setSelectedAll(!selectedAll);
  };

  const toggleSelectItem = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Startups List</h2>
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={selectedAll}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Founded</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Business Model</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Employees</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Funding Stage</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Total Raised</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Tags</th>
            </tr>
          </thead>
          <tbody>
            {startupData.map((startup, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedItems.includes(index)}
                    onChange={() => toggleSelectItem(index)}
                  />
                </td>
                <td className="px-6 py-3 text-gray-800 font-semibold">
                  <a href="#" className="hover:text-gray-900">{startup.name}</a>
                </td>
                <td className="px-6 py-3 text-gray-800">{startup.founded}</td>
                <td className="px-6 py-3 text-gray-800">{startup.model}</td>
                <td className="px-6 py-3 text-gray-800">{startup.employees}</td>
                <td className="px-6 py-3 text-gray-800">{startup.stage}</td>
                <td className="px-6 py-3 text-gray-800">{startup.raised}</td>
                <td className="px-6 py-3 text-gray-800">
                  {startup.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StartupList;
