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
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'home', // simle home, display, add, delete, seatmap
      attendees: [] // arr to store reservation data
    };
  }

  // Handler to switch between views
  handleViewChange = (view) => {
    this.setState({ currentView: view });
  }

  render() {
    return (
      <div>
        <h1>TicketMaster Reservation System</h1>

        {/* navbar cmoponent */}
        <NavBar currentView={this.state.currentView} onViewChange={this.handleViewChange} />

        {/* render components based on navigation */}
        {this.state.currentView === 'home' && <div><p>Welcome to TicketMaster Reservation System</p></div>}
        {this.state.currentView === 'display' && <DisplayAttendees attendees={this.state.attendees} />}
        {this.state.currentView === 'add' && <AddAttendee />}
        {this.state.currentView === 'delete' && <DeleteAttendee />}
        {this.state.currentView === 'seatmap' && <SeatMap attendees={this.state.attendees} />}
      </div>
    );
  }
}

/* =========================================
   NAVIGATION BAR COMPONENT (Q2)
========================================= */
class NavBar extends React.Component {
  render() {
    const { currentView, onViewChange } = this.props;

    // button style helper
    const buttonStyle = {
      margin: '5px',
      padding: '10px 15px',
      cursor: 'pointer',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      borderRadius: '4px'
    };

    // active button style
    const activeStyle = {
      ...buttonStyle,
      backgroundColor: '#007bff',
      color: 'white',
      borderColor: '#0056b3'
    };

    return (
      <div style={{ marginBottom: '20px',
                  padding: '10px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '5px' }}>
        <h2 style={{ marginTop: '0' }}>Navigation</h2>
        <button
          style={currentView === 'home' ? activeStyle : buttonStyle}
          onClick={() => onViewChange('home')}
        >
          Home
        </button>
        <button
          style={currentView === 'display' ? activeStyle : buttonStyle}
          onClick={() => onViewChange('display')}
        >
          Display Attendees
        </button>
        <button
          style={currentView === 'add' ? activeStyle : buttonStyle}
          onClick={() => onViewChange('add')}
        >
          Add Attendee
        </button>
        <button
          style={currentView === 'delete' ? activeStyle : buttonStyle}
          onClick={() => onViewChange('delete')}
        >
          Delete Attendee
        </button>
        <button
          style={currentView === 'seatmap' ? activeStyle : buttonStyle}
          onClick={() => onViewChange('seatmap')}
        >
          Seat Map
        </button>
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
