import {
  Alert,
  Autocomplete,
  Dialog,
  Snackbar,
  SnackbarCloseReason,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoTrashOutline, IoWarningOutline } from "react-icons/io5";

type passengersOption = {
  id: number;
  name: string;
  flight: string;
  seat: string;
};

const flightOptions = [
  "تهران → استانبول",
  "مشهد → دبی",
  "شیراز → دوحه",
  "اصفهان → باکو",
];

const Passengers: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedPassenger, setSelectedPassenger] =
    useState<passengersOption | null>(null);
  const [passengers, setPassengers] = useState<passengersOption[]>([
    { id: 1, name: "محمد رضایی", flight: "تهران → استانبول", seat: "12A" },
    { id: 2, name: "زهرا کریمی", flight: "مشهد → دبی", seat: "7B" },
    { id: 3, name: "علی محمودی", flight: "شیراز → دوحه", seat: "15C" },
  ]);

  const handleDelete = (id: number) => {
    setPassengers(passengers.filter((p) => p.id !== id));
    setIsOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  const handleOpenEditModal = (passenger: passengersOption) => {
    setSelectedPassenger(passenger);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedPassenger(null);
  };

  const handleUpdatePassenger = () => {
    if (selectedPassenger) {
      setPassengers((prev) =>
        prev.map((p) => (p.id === selectedPassenger.id ? selectedPassenger : p))
      );
      handleCloseEditModal();
    }
  };

  return (
    <div className="p-6 flex flex-col gap-12">
      <div className="bg-white bg-opacity-70 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">لیست مسافران</h2>
        <table className="w-full border-collapse text-right" dir="rtl">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">نام</th>
              <th className="p-3">پرواز</th>
              <th className="p-3">صندلی</th>
              <th className="p-3">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {passengers.length > 0 ? (
              passengers.map((passenger) => (
                <tr key={passenger.id} className="border-t">
                  <td className="p-3">{passenger.name}</td>
                  <td className="p-3">{passenger.flight}</td>
                  <td className="p-3">{passenger.seat}</td>
                  <td className="p-3 flex items-center gap-4">
                    <Tooltip title="ویرایش" placement="right">
                      <button
                        className="text-blue-500"
                        onClick={() => handleOpenEditModal(passenger)}
                      >
                        <CiEdit className="w-5 h-5" />
                      </button>
                    </Tooltip>
                    <Tooltip title="حذف" placement="left">
                      <button
                        className="text-red-500"
                        onClick={() => handleDelete(passenger.id)}
                      >
                        <IoTrashOutline className="w-5 h-5" />
                      </button>
                    </Tooltip>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-800">
                  <IoWarningOutline
                    size={25}
                    className="inline-block text-red-500"
                  />{" "}
                  درحال حاضر هیچ مسافری ثبت نشده است!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        <button className="py-2 px-4 rounded-xl text-white bg-green-500 shadow-sm border hover:bg-green-600 transform hover:scale-95 transition-all">
          ذخیره
        </button>
      </div>
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success" variant="standard" sx={{ width: "100%" }}>
          گزینه مورد نظر حذف شد!
        </Alert>
      </Snackbar>

      <Dialog open={isEditModalOpen} onClose={handleCloseEditModal}>
        <div className="bg-white bg-opacity-80 p-4 rounded-xl">
          {selectedPassenger && (
            <form className="grid grid-cols-1 gap-8">
              <TextField
                label="نام"
                value={selectedPassenger.name}
                onChange={(e) =>
                  setSelectedPassenger({
                    ...selectedPassenger,
                    name: e.target.value,
                  })
                }
              />

              <Autocomplete
                options={flightOptions}
                value={selectedPassenger.flight}
                onChange={(event, newValue) =>
                  setSelectedPassenger({
                    ...selectedPassenger,
                    flight: newValue || "",
                  })
                }
                renderInput={(params) => (
                  <TextField {...params} label="انتخاب پرواز" />
                )}
                sx={{
                  width: 300,
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              />

              <TextField
                label="صندلی"
                value={selectedPassenger.seat}
                onChange={(e) =>
                  setSelectedPassenger({
                    ...selectedPassenger,
                    seat: e.target.value,
                  })
                }
              />
            </form>
          )}

          <div className="flex justify-end mt-6 gap-4">
            <button
              className="bg-green-500 text-white px-4 py-2 border shadow-md rounded-xl hover:bg-green-600 hover:scale-95 transition-all"
              onClick={handleUpdatePassenger}
            >
              ذخیره
            </button>
            <button
              className="bg-slate-200 text-gray-800 border shadow-md rounded-xl py-2 px-4 hover:bg-slate-300 hover:scale-95 transition-all"
              onClick={handleCloseEditModal}
            >
              بستن
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Passengers;
