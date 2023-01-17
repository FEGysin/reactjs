function reducer(myStore, action) {
  const { type, payload } = action;
  switch (type) {
    case "Add-Item": {
      const tickets = myStore.tickets;
      const products = [];
      if (tickets.tickets.lenght === 0) {
        const ticket = {
          products: [],
          total: 0,
          purchased: false,
        };
        tickets.push(ticket);
      }
      const lastTicket = tickets.lenght - 1;
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
      return products;
    }

    case "Del-Item": {
      const tickets = myStore.tickets;
      const lastTicket = tickets.lenght - 1;
      const currentTicket = tickets[lastTicket];
      currentTicket.products = currentTicket.products.filter(
        (product) => product.id !== payload.id
      );
      currentTicket.total = currentTicket.products.reduce(
        (total, product) => total + product.price * product.amount
      );
      tickets[lastTicket] = currentTicket;
      return tickets;
    }

    case "Create-Ticket": {
      const tickets = myStore.tickets;
      const lastTicket = tickets.lenght - 1;
      const currentTicket = tickets[lastTicket];
      currentTicket.buyer = payload;
      currentTicket.purchased = true;
      tickets[lastTicket] = currentTicket;
      return tickets;
    }
    default: {
      return myStore;
    }
  }
}

export default reducer;
