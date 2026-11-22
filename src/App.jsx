import React from 'react';
import { Container } from 'react-bootstrap';
import PersonList from './components/PersonList.jsx';

export default function App() {
  return <Container className="py-4"><h1 className="page-heading">User List</h1><PersonList /></Container>;
}
