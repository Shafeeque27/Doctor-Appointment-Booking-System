import React, { useContext, useEffect, useState } from 'react';
import { docSpeciality } from '../../data';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
    const { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const [showFilter, setShowFilter] = useState(false);

    const navigate = useNavigate();

    const { doctors } = useContext(AppContext);

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter((doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()));
        } else {
            setFilterDoc(doctors);
        }
    };

    useEffect(() => {
        applyFilter();
    }, [speciality, doctors]);

    return (
        <div>
            <p className="text-gray-600">Browse through the doctors specialist. </p>
            <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
                <button
                    className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
                        showFilter ? 'bg-primary text-white' : ''
                    }`}
                    onClick={() => setShowFilter((prev) => !prev)}>
                    Filters
                </button>
                <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
                    {docSpeciality.map((sp, idx) => (
                        <p
                            onClick={() => {
                                speciality === sp.name ? navigate('/doctors') : navigate(`/doctors/${sp.name}`);
                                setShowFilter(false);
                            }}
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                                speciality === sp.name ? 'bg-blue-100 text-primary font-medium' : 'hover:bg-gray-100'
                            }`}
                            key={idx}>
                            {sp.name}
                        </p>
                    ))}
                </div>
                <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6">
                    {filterDoc.map((doctor, idx) => (
                        <div
                            onClick={() => navigate(`/appointment/${doctor._id}`)}
                            className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                            key={idx}>
                            <img className="bg-blue-50" src={doctor.image} alt="doctor-img" />
                            <div className="p-4">
                                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                    <p>Available</p>
                                </div>
                                <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
                                <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
