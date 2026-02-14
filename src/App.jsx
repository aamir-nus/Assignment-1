// App.jsx
// IT5007 Assignment-1: TicketMaster
//
// Starter Skeleton (Entry-Level)
//
// IMPORTANT:
// - This template is LLM generated and may have mistakes.
// - It is the students responsiblity to fix mistakes in  template, if any.
// - Students must fill in state, CRUD operations, and UI behavior.
// - Search for "TODO" markers.


/* =========================================
   MAIN APP COMPONENT
========================================= */
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>TicketMaster Reservation System</h1>

        {/* TODO (Q2): Add Navigation Bar Component */}
        <NavBar />

        {/* TODO (Q2): Show ONE component at a time based on navigation */}

        {/* TODO (Q3): Display Attendee Table */}
        {/* <DisplayAttendees /> */}

        {/* TODO (Q4): Add Attendee Form */}
        {/* <AddAttendee /> */}

        {/* TODO (Q5): Delete Attendee Form */}
        {/* <DeleteAttendee /> */}

        {/* TODO (Q6): Seat Map Visualization */}
        {/* <SeatMap /> */}
      </div>
    );
  }
}

/* =========================================
   NAVIGATION BAR COMPONENT (Q2)
========================================= */
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <h2>Navigation</h2>

        {/* TODO: Add buttons for switching views */}
        {/* Example:
            Home | Display Attendees | Add Attendee | Delete Attendee | Seat Map
        */}
      </div>
    );
  }
}

/* =========================================
   DISPLAY ATTENDEES COMPONENT (Q3)
========================================= */
class DisplayAttendees extends React.Component {
  render() {
    return (
      <div>
        <h2>Attendee List</h2>

        {/* TODO: Fetch attendee data from App.jsx variable/state */}

        {/* TODO: Display attendees in a table format */}

        {/* Table Columns should include:
            Seat Number | Name | Phone | Ticket Category
        */}
      </div>
    );
  }
}

/* =========================================
   ADD ATTENDEE COMPONENT (Q4)
========================================= */
class AddAttendee extends React.Component {
  render() {
    return (
      <div>
        <h2>Add Attendee Reservation</h2>

        {/* TODO: Create a form with fields:
            Name, Phone, Ticket Category (Gold/Silver)
        */}

        {/* TODO: On Submit → Add attendee into reservation list */}

        {/* TODO: Allocate seat number (1–10) */}
      </div>
    );
  }
}

/* =========================================
   DELETE ATTENDEE COMPONENT (Q5)
========================================= */
class DeleteAttendee extends React.Component {
  render() {
    return (
      <div>
        <h2>Cancel Reservation</h2>

        {/* TODO: Create a form to delete an attendee */}

        {/* Options:
            - Delete by Seat Number
            - Delete by Name/Phone
        */}

        {/* TODO: On Submit → Remove attendee from reservation list */}
      </div>
    );
  }
}

/* =========================================
   SEAT MAP VISUALIZATION (Q6)
========================================= */
class SeatMap extends React.Component {
  render() {
    return (
      <div>
        <h2>Seat Map</h2>

        {/* TODO: Display 10 seats visually */}

        {/* Rules:
            - Empty seats → Green
            - Reserved Gold seats → Gold
            - Reserved Silver seats → Silver
            - Seats must show seat number (1–10)
        */}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("contents")
);
