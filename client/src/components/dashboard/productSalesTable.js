import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faEdit, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ProductSalesTable = ({ data, onDelete }) => {
  const handleEdit = (id) => {
    console.log('Edit', id);
    //  la logique de modification ici
  };

  const handleView = (id) => {
    console.log('View', id);
    //  la logique d'affichage ici
  };

  const handleDelete = (id) => {
    console.log('Delete', id);
    onDelete(id);
  };

  const renderIcon = (action, itemId) => {
    switch (action) {
      case 'edit':
        return <FontAwesomeIcon className="my-icon mr-3" icon={faEdit} onClick={() => handleEdit(itemId)} />;
      case 'view':
        return <FontAwesomeIcon className="my-icon" icon={faEye} onClick={() => handleView(itemId)} />;
      case 'delete':
        return <FontAwesomeIcon className="my-icon" icon={faTrashAlt} onClick={() => handleDelete(itemId)} />;
      default:
        return null;
    }  
    
  };              //////logique pour pagination du tableux//

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  return (
    <div className="container mt-5 salesTab">
      <h3>Latest product sales</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Post</th>
            <th>Author</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.product}</td>
              <td>
                <span className="rounded-circle text-white p-2 mr-2" style={{backgroundColor:'#D1D5DB'}}>
                  {item.author.initials}
                </span>
                {item.author.name}
              </td>
              <td>
                <FontAwesomeIcon className="my-icon" icon={faTag} />
              </td>
              <td>
                {item.actions.map((action, index) => (
                  <span key={index}>
                    {renderIcon(action, item.id)}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls d-flex justify-content-end">
        <button className="btn btn-light mr-2" onClick={goToPreviousPage} disabled={currentPage === 1}> `{'<'}` </button>
        <span className="align-self-center"> {currentPage} - {totalPages}</span>
        <button className="btn btn-light ml-2" onClick={goToNextPage} disabled={currentPage === totalPages}> `{'>'}` </button>
      </div>
      </div>
  );
};

export default ProductSalesTable;
