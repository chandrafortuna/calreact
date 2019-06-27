var Appointments = createReactClass({
    getInitialState: function() {
        return {
            appointments: this.props.appointments,
            title: 'Met sob',
            appt_time: 'Tomorrow at 9pm'
        }
    },

    handleUserInput: function(obj) {
        this.setState(obj);
    },

    render: function() {
        return (
            <div>
                <AppointmentForm 
                    input_title={this.state.title} 
                    input_appt_time={this.state.appt_time}
                    onUserInput={this.handleUserInput}/>
                <AppointmentList appointments={this.state.appointments} />
            </div>
        )
    }
});