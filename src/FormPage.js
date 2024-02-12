import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

function FormPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [practiceNPI, setPracticeNPI] = useState('');
  const [practiceCity, setPracticeCity] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [practiceName, setPracticeName] = useState('');
  const [practiceZipCode, setPracticeZipCode] = useState('');
  const [stateLicenseNumber, setStateLicenseNumber] = useState('');
  const [medicalSchool, setMedicalSchool] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [residency, setResidency] = useState('');
  const [fellowship, setFellowship] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields and submit data to backend API
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="FormPage">
            <header className="FormPage-header">
              <h1>App Z Health</h1>
              <p>HEALTHCARE MEETS FINTECH</p>
              <p>Welcome to App Z Health</p>
              <p>
                In order to continue, we need you to verify and complete the below information.
                Not all fields are required. Additional fields help narrow your search results.
              </p>
            </header>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              {/* ... other form fields for personal information */}
              <div>
                {/* ... other form fields for additional information */}
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default FormPage;
