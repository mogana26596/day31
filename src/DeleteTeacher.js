import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteTeacher = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://637b824710a6f23f7faadd54.mockapi.io/teachers/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/delete-teacher"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default DeleteTeacher;