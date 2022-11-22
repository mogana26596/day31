import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteStudent = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://637b824710a6f23f7faadd54.mockapi.io/students/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/delete-student"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default DeleteStudent;