// src/api.js

const BASE_URL = 'http://localhost:8000';

// Function to fetch columns for a specific entity
export const fetchEntityColumns = async (entity) => {
    const response = await fetch(`${BASE_URL}/${entity}/columns`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${entity} columns`);
    }
    return response.json();
  };
  
// Fetch records based on a particular column's value
export const searchRecords = async (entity, column, value) => {
    const response = await fetch(`${BASE_URL}/search?entity=${entity}&column=${column}&value=${value}`);
    if (!response.ok) {
      throw new Error('Failed to search records');
    }
    return response.json();
  };
 
// Sort by a particular column and order
export const sortRecords = async (entity, column, order) => {
  const response = await fetch(`${BASE_URL}/sort?entity=${entity}&column=${column}&order=${order}`);
  if (!response.ok) {
    throw new Error('Failed to sort records');
  }
  return response.json();
};

// Select all records in the table
export const selectAllRecords = async (entity) => {
  const response = await fetch(`${BASE_URL}/all?entity=${entity}`);
  if (!response.ok) {
    throw new Error('Failed to fetch all records');
  }
  return response.json();
};

//////////////////////////////////// STUDENT ENDPOINTS //////////////////////////////////
// Insert a new student record
export const insertStudent = async (student) => {
  const response = await fetch(`${BASE_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  if (!response.ok) {
    throw new Error('Failed to insert student');
  }
  return response.json();
};

// Delete a record based on index
export const deleteStudents = async (studentIds) => {
    const response = await fetch(`${BASE_URL}/students`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentIds),
    });
    if (!response.ok) {
      throw new Error('Failed to delete students');
    }
    return response.json();
  };
  
// Update a record
export const updateStudent = async (studentId, student) => {
  const response = await fetch(`${BASE_URL}/students/${studentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  if (!response.ok) {
    throw new Error('Failed to update student');
  }
  return response.json();
};


//////////////////////////////////// MENTOR ENDPOINTS //////////////////////////////////
// Insert a new student record
export const insertMentor = async (mentor) => {
    const response = await fetch(`${BASE_URL}/mentors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mentor),
    });
    if (!response.ok) {
      throw new Error('Failed to insert mentor');
    }
    return response.json();
  };
  
  export const updateMentor = async (mentorId, mentor) => {
    const response = await fetch(`${BASE_URL}/mentors/${mentorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mentor),
    });
    if (!response.ok) {
      throw new Error('Failed to update mentor');
    }
    return response.json();
  };

  // Delete a record based on index
export const deleteMentors = async (mentorIds) => {
    const response = await fetch(`${BASE_URL}/mentors`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mentorIds),
    });
    if (!response.ok) {
      throw new Error('Failed to delete mentors');
    }
    return response.json();
  };

  //////////////////////////////////// PROJECT ENDPOINTS //////////////////////////////////
// Insert a new student record
export const insertProject = async (project) => {
    const response = await fetch(`${BASE_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) {
      throw new Error('Failed to insert project');
    }
    return response.json();
  };
  
  export const updateProject = async (projectId, project) => {
    const response = await fetch(`${BASE_URL}/projects/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) {
      throw new Error('Failed to update project');
    }
    return response.json();
  };

  // Delete a record based on index
export const deleteProjects = async (projectIds) => {
    const response = await fetch(`${BASE_URL}/projects`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectIds),
    });
    if (!response.ok) {
      throw new Error('Failed to delete projects');
    }
    return response.json();
  };