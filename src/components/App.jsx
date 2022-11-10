import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OneInitiative from './OneInitiative';
import Auth from './Auth';
import Initiatives from './Initiatives';
import NavBar from './NavBar';
import Reg from './Reg';
import AuthorInitiatives from './AuthorInitiatives';

export default function App({
  user, federalDists, regions, municipals, initiative, allInitiatives, authorInitiatives
}) {
  return (
    <div className='row'>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Initiatives allInitiatives={allInitiatives} user={user} authorInitiatives={authorInitiatives}/>} />
        <Route path="/reg" element={<Reg federalDists={federalDists} regions={regions} municipals={municipals} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/initiatives/:id" element={<OneInitiative initiative={initiative} allInitiatives={allInitiatives} />} />
        <Route path="/initiatives/:authorId/author" element={<AuthorInitiatives authorInitiatives={authorInitiatives} />} />
      </Routes>
    </div>
  );
}
