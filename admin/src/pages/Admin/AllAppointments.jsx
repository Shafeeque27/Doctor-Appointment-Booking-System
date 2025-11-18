import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const AllAppointments = () => {
    const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
    const { calculateAge, slotDateFormat, currencySymbol } = useContext(AppContext);

    useEffect(() => {
        if (aToken) {
            getAllAppointments();
        }
    }, [aToken]);
    return (
        <div className="w-full max-w-6xl m-5">
            <p className="mb-3 text-lg font-medium">All Appointments</p>

            <div className="bg-white rounded text-sm min-h-[60vh] max-h-[80vh] overflow-y-scroll">
                <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-zinc-400">
                    <p>#</p>
                    <p>Patient</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Doctor</p>
                    <p>Fees</p>
                    <p>Action</p>
                </div>

                {appointments.map((item, idx) => (
                    <div
                        className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b border-zinc-300 hover:bg-gray-50 "
                        key={idx}>
                        <p className="max-sm:hidden">{idx + 1}</p>
                        <div className="flex items-center gap-2">
                            <img className="w-8 rounded-full" src={item.userData.image} alt="" />
                            <p className="text-sm">{item.userData.name}</p>
                        </div>
                        <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
                        <p>
                            {slotDateFormat(item.slotDate)}, {item.slotTime}
                        </p>
                        <div className="flex items-center gap-2">
                            <img className="w-8 rounded-full bg-gray-200" src={item.docData.image} alt="" />
                            <p className="text-sm">{item.docData.name}</p>
                        </div>
                        <p>
                            {currencySymbol}
                            {item.amount}
                        </p>
                        {item.cancelled ? (
                            <p className="text-red-400 text-xs font-medium">Cancelled</p>
                        ) : item.isComplete ? (
                            <p className="text-green-500 text-xs font-medium">Completed</p>
                        ) : (
                            <img
                                onClick={() => cancelAppointment(item._id)}
                                className="w-10 cursor-pointer"
                                src={assets.cancel_icon}
                                alt=""
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllAppointments;
