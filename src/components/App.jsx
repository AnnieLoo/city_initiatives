import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OneInitiative from './OneInitiative';
import Auth from './Auth';
import Initiatives from './Initiatives';
import NavBar from './NavBar';
import Reg from './Reg';
import NewInitiativeForm from './NewInitiativeForm';

export default function App({
  user, federalDists, regions, municipals,
}) {
  // console.log('federal huinya', federalDists);
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Initiatives />} />
        <Route path="/reg" element={<Reg federalDists={federalDists} regions={regions} municipals={municipals} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/initiative" element={<OneInitiative />} />
        <Route path="/newInitiative" element={<NewInitiativeForm />} />
      </Routes>
    </div>
  );
}
