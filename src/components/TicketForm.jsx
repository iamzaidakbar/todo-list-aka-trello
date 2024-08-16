import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/Forms/TicketForm.scss";
import { addTicket } from '../store/slices/columnSlice';
import { closeModal } from '../store/slices/modalSlice';

const TicketForm = () => {
  const dispatch = useDispatch();
  const columnId = useSelector(state => state?.column_Id?.columnId)
  const columns = useSelector(state => state?.columns?.columns)
  const status = columns?.find(column => column.id === columnId);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [labels, setLabels] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: `ticket-${Date.now()}`,
      title,
      description,
      status: status.title,
      assignee,
      priority,
      dueDate,
      labels: labels.split(',').map(label => label.trim()),
      comments, // Comments could be added later or initialized as an empty array
    };

    dispatch(addTicket({ columnId, ticket: newTicket }));
    dispatch(closeModal())
  };

  return (
    <form className="Ticket__Form" onSubmit={handleSubmit}>
      <div className='Ticket__Form__Group'>
        <label htmlFor="ticket_title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="ticket_title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className='Ticket__Form__Group'>
        <label htmlFor="ticket_description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="ticket_description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className='Ticket__Form__Group'>
        <label htmlFor="ticket_status" className="form-label">Status</label>
        <input
          className="form-control"
          id="ticket_status"
          value={status.title}
          required
          disabled
        />
      </div>

      <div className='Ticket__Form__Group'>
        <label htmlFor="ticket_assignee" className="form-label">Assignee</label>
        <input
          type="text"
          className="form-control"
          id="ticket_assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
      </div>

      <div className='Ticket__Form__Group'>
        <label htmlFor="ticket_priority" className="form-label">Priority</label>
        <select
          className="form-control"
          id="ticket_priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className='Ticket__Form__Group'>
        <label htmlFor="ticket_dueDate" className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          id="ticket_dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className='Ticket__Form__Group'>
        <label htmlFor="ticket_labels" className="form-label">Labels</label>
        <input
          type="text"
          className="form-control"
          id="ticket_labels"
          value={labels}
          onChange={(e) => setLabels(e.target.value)}
          placeholder="Comma-separated labels"
        />
      </div>

      <div className="Ticket__Form__Action">
        <button className='Ticket__Form__Action__Button' type="submit">Create Ticket</button>
      </div>
    </form>
  );
};

export default TicketForm;
