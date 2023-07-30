// src/DeviceList.js
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import app from '../../firebase/firebaseConfig';

const DeviceList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const deviceRef = ref(db, 'devices');
    onValue(deviceRef, (snapshot) => {
      const data = snapshot.val();
      const deviceList = [];
      for(let id in data) {
        deviceList.push({ id, ...data[id] });
      }
      setDevices(deviceList);
    });
  }, []);

  return (
    <div>
      <h2>Registered Devices</h2>
      {devices.map((device) => (
        <div key={device.id}>
          <img src={device.imageUrl} alt={device.name} />
          <h3>{device.name}</h3>
          <p>{device.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DeviceList;
