import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Editcustomer(props) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone:''
    });

    const handleClickOpen = () => {
        setCustomer({ firstname: props.customer.firstname, lastname: props.customer.lastname, streetaddress: props.customer.streetaddress, postcode: props.customer.postcode, city: props.customer.city, email: props.customer.email, phone: props.customer.phone});
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleInputChange = (event) => {
        setCustomer({ ...customer, [event.target.name]: event.target.value })
    }
    const updateCustomer = () => {
        props.updateCustomer(customer, props.content.links[1].href);
        handleClose();
    }

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                Edit
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="firstname"
                        value={customer.firstname}
                        label="Firstname"
                        fullWidth
                    />
                    <TextField
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="lastname"
                        value={customer.lastname}
                        label="Lastname"
                        fullWidth
                    />                 <TextField
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="streetaddress"
                        value={customer.streetaddress}
                        label="Streetaddress"
                        fullWidth
                    />                 <TextField
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="postcode"
                        value={customer.postcode}
                        label="Postcode"
                        fullWidth
                    />                 <TextField
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="city"
                        value={customer.city}
                        label="City"
                        fullWidth
                    />                 <TextField
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="email"
                        value={customer.email}
                        label="Email"
                        fullWidth
                    />
                     <TextField
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="phone"
                        value={customer.phone}
                        label="Phone"
                        fullWidth
                    />  
                </DialogContent>
                <DialogActions>
                    <Button style={{ margin: 10 }} onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={updateCustomer} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}