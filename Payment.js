import React from 'react';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      name: 'Payment',
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    });
  }

  payNow = () => {
    if (isNaN(this.state.inputValue)) {
      alert('Enter numeric value');
      return;
    }
    let finalRazorPayValue = this.state.inputValue * 100;

    var options = {
      key: 'rzp_test_fzDsuv5ZtWhfV6',
      amount: finalRazorPayValue, // Example: 2000 paise = INR 20
      name: 'Ashok',
      description: 'GoExamPro Exam Name',
      image: 'img/logo.png', // COMPANY LOGO
      handler: function (response) {
        console.log('Returning now');
        alert(
          'Payment Id ' +
            response.razorpay_payment_id +
            ' : Payment successfull'
        );
        console.log(response);
        console.log('Return response completed');
        // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
      },
      prefill: {
        name: 'User Name', // pass customer name
        email: 'user@email.com', // customer email
        contact: '+919123456780', //customer phone no.
      },
      notes: {
        address: 'address', //customer address
      },
      theme: {
        color: '#15b8f3', // screen color
      },
    };
    console.log(options);
    var propay = new Razorpay(options);
    propay.open();
  };

  render() {
    return (
      <div>
        <h1> GoExamPro - Payment Demo</h1>
        <h3> Enter amount in INR in text box and click pay now</h3>
        <input
          value={this.state.inputValue}
          onChange={(evt) => this.updateInputValue(evt)}
        />
        <br />
        <br />
        <button onClick={this.payNow}>
          {' '}
          Pay INR {this.state.inputValue} Now
        </button>
      </div>
    );
  }
}

export default Payment;
