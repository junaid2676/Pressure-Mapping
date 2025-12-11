import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { StatsCards } from './components/StatsCards';
import { AppointmentChart } from './components/AppointmentChart';
import { PopularDoctors } from './components/PopularDoctors';
import { CalendarWidget } from './components/CalendarWidget';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f9f9f9]">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-[240px] min-h-screen">
        <div className="p-4 md:p-6 lg:p-8">
          {/* Top Bar */}
          <TopBar onMenuClick={() => setSidebarOpen(true)} />

          {/* Stats Cards */}
          <div className="mt-6 md:mt-8">
            <StatsCards />
          </div>

          {/* Appointment Statistics Chart */}
          <div className="mt-6 md:mt-8">
            <AppointmentChart />
          </div>

          {/* Popular Doctors and Calendar */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 xl:grid-cols-[1fr_356px] gap-6">
            <PopularDoctors />
            <CalendarWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
