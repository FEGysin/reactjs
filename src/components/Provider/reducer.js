function reducer(myStore, action) {
  const { type, payload } = action;
  switch (type) {
    case "Add-Item": {
      let tickets = myStore.tickets;

      if (tickets.length === 0) {
        const ticket = {
          products: [],
          total: 0,
          purchased: false,
        };
        tickets.push(ticket);
      }

      const lastTicket = tickets.length - 1;
      const currentTicket = tickets[lastTicket];
      if (currentTicket.purchased) {
        const ticket = {
          products: [],
          total: 0,
          purchased: false,
        };
        tickets.push(ticket);
      }
      tickets[tickets.length - 1].products.push(payload);
      tickets[tickets.length - 1].total += payload.price * payload.amount;
      console.log(tickets);
      return { tickets };
    }

    case "Del-Item": {
      const tickets = myStore.tickets;
      const lastTicket = tickets.length - 1;
      const currentTicket = tickets[lastTicket];
      currentTicket.products = currentTicket.products.filter(
        (product) => product.id !== payload.id
      );
      if (currentTicket.length > 0) {
        currentTicket.total = currentTicket.products.reduce(
          (total, product) => total + product.price * product.amount
        );
      } else {
        currentTicket.total = 0;
        currentTicket.purchased = true;
      }
      tickets[lastTicket] = currentTicket;
      return { tickets };
    }

    case "Create-Ticket": {
      const tickets = myStore.tickets;
      const lastTicket = tickets.length - 1;
      let currentTicket = tickets[lastTicket];
      console.log(payload);
      currentTicket.buyer = payload;
      currentTicket.purchased = true;
      console.log(currentTicket);
      tickets[lastTicket] = currentTicket;
      return { tickets };
    }
    default: {
      return myStore;
    }
  }
}

export default reducer;
