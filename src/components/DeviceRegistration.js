// src/DeviceRegistration.js
import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, push, set } from "firebase/database";
import app from "../../firebase/firebaseConfig";
import './DeviceRegistration.css';

const DeviceRegistration = () => {
  const [deviceName, setDeviceName] = useState("");
  const [deviceImage, setDeviceImage] = useState(null);
  const [deviceDescription, setDeviceDescription] = useState("");
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setDeviceImage(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload the image to Firebase Storage
      const storageRef = ref(getStorage(app), deviceImage.name);
      await uploadBytes(storageRef, deviceImage);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);

      // Save device data to Firebase Realtime Database
      const devicesRef = dbRef(getDatabase(app), "devices");
      const newDeviceRef = push(devicesRef);
      set(newDeviceRef, {
        name: deviceName,
        imageUrl,
        description: deviceDescription,
      });

      // Clear the form after successful submission
      setDeviceName("");
      setDeviceImage(null);
      setDeviceDescription("");

      // Show alert message
      alert('Registration successful!');
    } catch (error) {
      console.error("Error saving device data:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Device Name"
        value={deviceName}
        onChange={(e) => setDeviceName(e.target.value)}
      />
      <input type="file" onChange={handleImageChange} />
      <textarea
        placeholder="Device Description"
        value={deviceDescription}
        onChange={(e) => setDeviceDescription(e.target.value)}
      />
      <button type="submit">Register Device</button>
    </form>
  );
};

export default DeviceRegistration;
