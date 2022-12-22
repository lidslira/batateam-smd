import styled from 'styled-components';

export const ContainerDiv = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    font-family: 'Poppins', sans-serif;
}

/* body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
} */
  

.status {
    background-color: #f6f6f6;
    height: 42px;
}

.todo {
    
    position: relative;
    background-color: #fff;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
      rgba(15, 15, 15, 0.1) 0px 2px 4px;
    border-radius: 4px;
    padding: 5px;
    margin: 5px;
    font-size: 0.8em;
    cursor: grab;
  }
  
  .todo .close {
    position: absolute;
    right: 2px;
    top: -5px;
    font-size: 1.2em;
    color: #ccc;
    cursor: pointer;
  }
  
  .todo .close:hover {
    color: #343444;
  }
  
  
  #add_btn {
    padding: 0.5rem 1rem;
    background-color: #87B296;
    color: white;
    outline: none;
    border: none;
    font-size: 0.9rem;
    margin: 20px 0;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
  #add_btn:hover {
    background-color: #6d967b;
  }
  

  
  /* modal */
  
  .close-modal {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .modal {
    width: 450px;
    position: fixed;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.3s ease-in-out;
    border: 1px solid #ccc;
    border-radius: 10px;
    z-index: 2;
    background-color: #fff;
  }
  
  .modal.active {
    top: 30%;
  }
  
  .modal .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 0.5em 1em;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .modal .header .title{
    font-weight: 600;
  }
  
  .modal .body {
    padding: 0.75rem;
  }
  
  #overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  #overlay.active {
    display: block;
  }
  
  #todo_input,
  #todo_submit {
    padding: 0.5rem 1rem;
    width: 100%;
    margin: 15px 0;
  }
  
  #todo_submit {
    background-color: #87B296;
    color: #ffffff;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  #todo_submit:hover {
    background-color: #6d967b;
  }


  table {
    border-collapse: collapse;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    width: 100px;
    font-size: 0.9em;
  }

  /* /* .manha{
    background-color: rgb(222, 241, 242);
  } */

  /* .tarde{
    background-color: rgb(247, 239, 224);
  }

  .noite{
    background-color: rgb(229, 230, 241);
  }  */

  .horario{
    background-color: #D1D8D7;
  }
`;

export const Container = styled.div`
  display: flex;
  /* margin: 60px 0px 60px 300px; */
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  flex-direction: column;
  

  h1 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-weight: 700;
    font-size: 2.5rem;
    margin: 0px 20px 20px 60px;
    align-self: baseline;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 4px;
    font-weight: 300;
    align-self: baseline;
  }
`;