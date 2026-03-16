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

  // Handler to add new attendee
  handleAddAttendee = (attendee) => {
    this.setState((prevState) => ({
      attendees: [...prevState.attendees, attendee]
    }));
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
        {this.state.currentView === 'add' && <AddAttendee onAddAttendee={this.handleAddAttendee} attendees={this.state.attendees} />}
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
    const { attendees } = this.props; // set props from parent

    return (
      <div>
        <h2>Attendee List</h2>

        {attendees.length === 0 ? (
          <p style={{ color: '#666',
                    fontStyle: 'italic' }}>No reservations yet. Add an attendee to get started!</p>
        ) : (
          <table className="bordered-table" style={{ width: '100%', maxWidth: '800px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>Seat Number</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Phone</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Ticket Category</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map((attendee) => (
                <tr key={attendee.seatNumber}>
                  <td style={{ padding: '8px' }}>{attendee.seatNumber}</td>
                  <td style={{ padding: '8px' }}>{attendee.name}</td>
                  <td style={{ padding: '8px' }}>{attendee.phone}</td>
                  <td style={{ padding: '8px' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      backgroundColor: attendee.category === 'Gold' ? '#ffd700' : '#c0c0c0',
                      fontWeight: 'bold'
                    }}>
                      {attendee.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <p style={{ marginTop: '20px', color: '#666' }}>
          Total Reservations: {attendees.length} / 10
        </p>
      </div>
    );
  }
}

/* =========================================
   ADD ATTENDEE COMPONENT (Q4)
========================================= */
class AddAttendee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      category: 'Silver',
      error: '',
      success: ''
    };
  }

  // input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: '', success: '' });
  }

  // find first available seat from 1:10
  findAvailableSeat = () => {
    const occupiedSeats = this.props.attendees.map(a => a.seatNumber);
    for (let seat = 1; seat <= 10; seat++) {
      if (!occupiedSeats.includes(seat)) {
        return seat;
      }
    }
    return null; // all seats are occupied
  }

  // form submission
  handleSubmit = (event) => {
    event.preventDefault();

    const { name, phone, category } = this.state;

    // validate req fields
    if (!name.trim() || !phone.trim()) {
      this.setState({ error: 'Please fill in all fields.' });
      return;
    }

    // validate if all seats are full
    if (this.props.attendees.length >= 10) {
      this.setState({ error: 'All seats are occupied! Maximum capacity reached.' });
      return;
    }

    // allocate seat
    const seatNumber = this.findAvailableSeat();

    if (seatNumber === null) {
      this.setState({ error: 'No available seats!' });
      return;
    }

    // create new attendee
    const newAttendee = {
      seatNumber,
      name: name.trim(),
      phone: phone.trim(),
      category
    };

    // handler is parent handler, call it to add attendee to main state
    this.props.onAddAttendee(newAttendee);

    // reset form and display success message
    this.setState({
      name: '',
      phone: '',
      category: 'Silver',
      error: '',
      success: `Reservation added successfully! Seat ${seatNumber} assigned.`
    });
  }

  render() {
    const { name, phone, category, error, success } = this.state;
    const availableSeats = 10 - this.props.attendees.length;

    return (
      <div>
        <h2>Add Attendee Reservation</h2>

        {error && (
          <div style={{ color: '#dc3545',
                        backgroundColor: '#f8d7da',
                        padding: '10px',
                        borderRadius: '4px',
                        marginBottom: '15px' }}>
            {error}
          </div>
        )}

        {success && (
          <div style={{ color: '#155724',
                        backgroundColor: '#d4edda',
                        padding: '10px',
                        borderRadius: '4px',
                        marginBottom: '15px' }}>
            {success}
          </div>
        )}

        <form onSubmit={this.handleSubmit} style={{ maxWidth: '500px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Name: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              placeholder="Enter full name"
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Phone: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
              placeholder="Enter phone number"
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Ticket Category:
            </label>
            <select
              name="category"
              value={category}
              onChange={this.handleInputChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            >
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Add Reservation
          </button>
        </form>

        <p style={{ marginTop: '20px', color: '#666' }}>
          Available Seats: {availableSeats} / 10
        </p>
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
