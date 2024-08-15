import React, { useState } from 'react';
import '../styles/Ticket/Ticket.scss';
import { motion, AnimatePresence } from 'framer-motion';

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
        <motion.p className='Ticket__Description'>{ticket.description}</motion.p>
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
              <motion.h5 className='Ticket__Title'>{ticket.title}</motion.h5>
              <motion.p className='Ticket__Description'>{ticket.description}</motion.p>
              <motion.h6 className=''>Assigned to: {ticket.assignee}</motion.h6>
              <motion.h6>Priority: {ticket.priority}</motion.h6>
              <motion.h6>Due: {ticket.dueDate}</motion.h6>
              {ticket.labels.map(label => (
                <motion.span key={label} className="label">
                  {label}
                </motion.span>
              ))}
              <motion.h5>Comments:</motion.h5>
              {ticket.comments.map((comment, index) => (
                <motion.p key={index}>
                  <strong>{comment.user}:</strong> {comment.comment}
                </motion.p>
              ))}
              <motion.button onClick={() => setSelectedId(null)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Ticket;
