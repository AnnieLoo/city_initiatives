import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OneInitiative from './OneInitiative';
import Auth from './Auth';
import Initiatives from './Initiatives';
import NavBar from './NavBar';
import Reg from './Reg';
import NewInitiativeForm from './NewInitiativeForm';
import UserPage from './UserPage';
import AuthorInitiatives from './AuthorInitiatives';
import UserPage2 from './UserPage2';

export default function App({
  user, federalDists, regions, municipals, initiative, allInitiatives, authorInitiatives, levels,
}) {
  return (
    <div className="container">
      <div className="row">
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<Initiatives allInitiatives={allInitiatives} user={user} authorInitiatives={authorInitiatives} levels={levels} />} />
          <Route path="/reg" element={<Reg federalDists={federalDists} regions={regions} municipals={municipals} />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/initiative" element={<OneInitiative />} />
          <Route path="/account" element={<UserPage user={user} />} />
          <Route path="/initiatives/:id" element={<OneInitiative initiative={initiative} allInitiatives={allInitiatives} />} />
          <Route path="/initiatives/:authorId/author" element={<AuthorInitiatives authorInitiatives={authorInitiatives} />} />
          <Route path="/newInitiative" element={<NewInitiativeForm levels={levels} user={user} />} />
        </Routes>
      </div>
    </div>
  );
}
