'use client'
import React,{useState} from 'react';
import { FaSearch } from "react-icons/fa";
import SideNavbar from '../components/Sidebar';
import Layout from '../components/layout';
const dataRecords = [
{
    Instruments: 'Thermometer',
    NotificationType: 'High',
    Frequency: '6',
    Location: 'West Pokot',
},
{
  Instruments: 'Thermometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'Thermometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'Thermometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'Thermometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'Hydrometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'Thermometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'Hydrometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'Thermometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'Thermometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'Kisumu',
},
{
  Instruments: 'Thermometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'RainGauge',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
{
  Instruments: 'Thermometer',
  NotificationType: 'High',
  Frequency: '6',
  Location: 'West Pokot',
},
];
const Table = () => {
  return (
    <Layout>
    <div className="m-2  " >
      <div className="flex space-x-60 px-60 w-full mt-5 ml-20px ">
      <h1 className="text-2xl font-semibold text-orange-400 px-20 ">Notifications</h1>
      <div className="flex space-x-4 mb-8">
        <div className="relative ml-auto mr-20">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-500 rounded-full p-2 text-black pl-10 pr-6 w-full focus:outline-none"
          />
          <FaSearch className="w-6 h-6 text-gray-900 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      </div>
      <table className="w-full  " >
        <thead>
          <tr className="border-b border-solid border-gray-300" >
            <th className="py-2 px-2 text-left text-20 font-semibold">Instrument</th>
            <th className="py-2  text-left text-20 font-semibold">Notification Type</th>
            <th className="py-2  text-left text-20 font-semibold">Frequency</th>
            <th className="py-2 text-left text-20 font-semibold">Location</th>
          </tr>
        </thead>
        <tbody>
          {dataRecords.map((record, index) => (
            <tr key={index} className="border-b border-solid border-gray-300" >
              <td className="py-5 ">{record.Instruments}</td>
              <td className="py-5">{record.NotificationType}</td>
              <td className="py-5 ">{record.Frequency}</td>
              <td className="py-5 ">{record.Location}</td>
            </tr >
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <div className="flex justify-between">
        </div>
      </div>
    </div>
    </Layout>
  );
};
export default Table;
