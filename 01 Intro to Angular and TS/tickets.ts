class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function manageTickets(ticketDescriptions: string[], sortCriteria: 'destination' | 'price' | 'status'): Ticket[] {
    const tickets: Ticket[] = ticketDescriptions.map(desc => {
        const [destination, price, status] = desc.split('|');
        return new Ticket(destination, Number(price), status);
    });

    return tickets.sort((a, b) => {
        if (sortCriteria === 'price') {
            return a.price - b.price;
        } else {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        }
    });
}

// Example usage:
// const result = manageTickets([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
// ], 'destination');
// console.log(result);

const result = manageTickets([
'Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'
],
'status');

console.log(result);

