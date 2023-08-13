'use client'

import DeviceView from '@/components/deviceView';
import NavBar from '@/components/navBar';
import ShareView from '@/components/shareView';
import DeviceRegistration from "@/components/DeviceRegistration";
import DeviceList from '@/components/DeviceList';


export default function Home() {
  return (
    <>
      <NavBar />
      <DeviceView />
      <DeviceRegistration />
      <DeviceList/>
    </>
  );
}
