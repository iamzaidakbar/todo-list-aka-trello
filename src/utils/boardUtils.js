export function addColumn(board, columnTitle) {
    const newColumnId = `column-${board.columns.length + 1}`;
    const newColumn = {
      id: newColumnId,
      title: columnTitle,
      tickets: [],
    };
  
    return {
      ...board,
      columns: [...board.columns, newColumn],
    };
  }
  
  export function addTicket(board, columnId, ticketDetails) {
    const newTicket = {
      id: `ticket-${Date.now()}`,
      ...ticketDetails,
    };
  
    const updatedColumns = board.columns.map(column => {
      if (column.id === columnId) {
        return {
          ...column,
          tickets: [...column.tickets, newTicket],
        };
      }
      return column;
    });
  
    return {
      ...board,
      columns: updatedColumns,
    };
  }
  