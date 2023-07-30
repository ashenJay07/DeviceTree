'use client'
import NavBar from "@/components/navBar";
import DeviceRegistration from "@/components/DeviceRegistration";
import DeviceList from '@/components/DeviceList';

export default function Home() {
  return (
    <>
      <NavBar />
      <DeviceRegistration />
      <DeviceList/>
    </>
  );
}
