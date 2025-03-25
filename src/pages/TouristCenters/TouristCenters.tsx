import {
  // Alert,
  Autocomplete,
  Dialog,
  // Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";

type TouristCenter = {
  id: number;
  name: string;
  category: "هتل" | "تور" | "جاذبه گردشگری";
  location: string;
};

const categories = ["هتل", "تور", "جاذبه گردشگری"];

const TouristCenters: React.FC = () => {
  const [centers, setCenters] = useState<TouristCenter[]>([
    { id: 1, name: "هتل اسپیناس پالاس", category: "هتل", location: "تهران" },
    { id: 2, name: "تور کیش ۴ روزه", category: "تور", location: "کیش" },
    { id: 3, name: "تخت جمشید", category: "جاذبه گردشگری", location: "شیراز" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState<TouristCenter | null>(
    null
  );

  const handleDelete = (id: number) => {
    setCenters(centers.filter((center) => center.id !== id));
  };

  const handleOpenModal = (center: TouristCenter | null = null) => {
    setSelectedCenter(center);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCenter(null);
  };

  return (
    <div className="p-6 flex flex-col gap-12">
      <div className="bg-white bg-opacity-70 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">
          لیست مراکز گردشگری
        </h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 hover:scale-95 transition-all border shadow-md"
          onClick={() => handleOpenModal()}
        >
          + ثبت مرکز جدید
        </button>
        <table className="w-full border-collapse text-right mt-6" dir="rtl">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">نام</th>
              <th className="p-3">دسته‌بندی</th>
              <th className="p-3">موقعیت</th>
              <th className="p-3">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {centers.map((center) => (
              <tr key={center.id} className="border-t">
                <td className="p-3">{center.name}</td>
                <td className="p-3">{center.category}</td>
                <td className="p-3">{center.location}</td>
                <td className="p-3 flex items-center gap-4">
                  <Tooltip title="ویرایش" placement="right">
                    <button
                      className="text-blue-500"
                      onClick={() => handleOpenModal(center)}
                    >
                      <CiEdit className="w-5 h-5" />
                    </button>
                  </Tooltip>
                  <Tooltip title="حذف" placement="left">
                    <button
                      className="text-red-500"
                      onClick={() => handleDelete(center.id)}
                    >
                      <IoTrashOutline className="w-5 h-5" />
                    </button>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* فرم ثبت / ویرایش مرکز */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <div className="bg-white bg-opacity-80 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">
            {selectedCenter ? "ویرایش مرکز" : "ثبت مرکز جدید"}
          </h2>
          <form className="grid grid-cols-1 gap-8">
            <TextField
              label="نام مرکز"
              value={selectedCenter?.name || ""}
              onChange={(e) =>
                setSelectedCenter((prev) => ({
                  ...(prev || {
                    id: Date.now(),
                    category: "هتل",
                    location: "",
                  }),
                  name: e.target.value,
                }))
              }
              className="h-11 px-2 focus:border-sky-500 transition-all bg-white border-2 outline-none rounded-xl"
            />
            <Autocomplete
              options={categories}
              value={selectedCenter?.category || "هتل"}
              onChange={(_event, newValue) =>
                setSelectedCenter((prev) => ({
                  ...(prev || { id: Date.now(), name: "", location: "" }),
                  category:
                    (newValue as "هتل" | "تور" | "جاذبه گردشگری") || "هتل",
                }))
              }
              renderInput={(params) => (
                <TextField {...params} label="دسته‌بندی" />
              )}
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            />
            <TextField
              label="موقعیت"
              value={selectedCenter?.location || ""}
              onChange={(e) =>
                setSelectedCenter((prev) => ({
                  ...(prev || { id: Date.now(), name: "", category: "هتل" }),
                  location: e.target.value,
                }))
              }
              className="h-11 px-2 focus:border-sky-500 transition-all bg-white border-2 outline-none rounded-xl"
            />
          </form>
          <div className="flex justify-end mt-6 gap-4">
            <button
              className="bg-green-500 text-white px-4 py-2 border shadow-md rounded-xl hover:bg-green-600 hover:scale-95 transition-all"
              onClick={() => {
                if (selectedCenter) {
                  setCenters((prev) =>
                    prev.some((c) => c.id === selectedCenter.id)
                      ? prev.map((c) =>
                          c.id === selectedCenter.id ? selectedCenter : c
                        )
                      : [...prev, selectedCenter]
                  );
                  handleCloseModal();
                }
              }}
            >
              ذخیره
            </button>
            <button
              className="bg-slate-200 text-gray-800 border shadow-md rounded-xl py-2 px-4 hover:bg-slate-300 hover:scale-95 transition-all"
              onClick={handleCloseModal}
            >
              بستن
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TouristCenters;
