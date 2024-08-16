import React, { useState } from 'react';
import '../styles/Ticket/Ticket.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from "react-icons/io";
import { truncateText } from '../utils/truncate';

const Ticket = ({ ticket }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleCloseModal = (e) => {
    e.stopPropagation()
    setSelectedId(null)
  }

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <motion.div
        className="Ticket__Summary"
        layoutId={ticket.id}
        onClick={() => setSelectedId(ticket.id)}
      >
        <motion.h5 className='Ticket__Title'>{ticket.title}</motion.h5>
        <motion.p className='Ticket__Description'>{truncateText(ticket.description)}</motion.p>
        <motion.h6 className='Ticket__Due'>Due {ticket.dueDate}</motion.h6>
      </motion.div>

      <AnimatePresence>
        {selectedId === ticket.id && (
          <motion.div
            className="Ticket__Detail"
            layoutId={selectedId}
            onClick={handleCloseModal}
          >
            <div className='Ticket__Details__Wrapper' onClick={handleModalClick}>
              <motion.span className='Ticket__Header'>
                <motion.h5 className='Ticket__Title'>{ticket.title}</motion.h5>
                <IoMdClose onClick={() => setSelectedId(null)} />
              </motion.span>
              <motion.p className='Ticket__Description__Label'>Description</motion.p>
              <motion.p className='Ticket__Description'>{ticket.description}</motion.p>

              <motion.p className='Ticket__Status__Label'>Status</motion.p>
              <motion.p className='Ticket__Status'>{ticket.status}</motion.p>


              <motion.p className='Ticket__Assigned_Label'>Assigned to</motion.p>
              <motion.h6 className='Ticket__Assigned'>{ticket.assignee}</motion.h6>
              <motion.p className='Ticket__Priority__Label'>Priority</motion.p>
              <motion.h6 className='Ticket__Priority'>{ticket.priority}</motion.h6>
              <motion.p className='Ticket__Due__Label'>Due Date</motion.p>
              <motion.h6 className='Ticket__Due'>{ticket.dueDate}</motion.h6>
              <motion.p className='Ticket__Labels__Label'>Labels</motion.p>

              {ticket.labels.map(label => (
                <motion.p key={label} className="Ticket__Label">
                  {label}
                </motion.p>
              ))}
              {ticket.comments.length > 0 && <motion.h5 className='Ticket__Comments'>Comments</motion.h5>}
              {ticket.comments.map((comment, index) => (
                <motion.p key={index}>
                  <strong>{comment.user}:</strong> {comment.comment}
                </motion.p>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Ticket;
