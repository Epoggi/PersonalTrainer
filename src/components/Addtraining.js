import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Addtraining(props) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date:'', activity:'', duration:'', customer:[]
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleInputChange = (event) => {
        setTraining({...training,[event.target.name]: event.target.value})
    }
    const addTraining = () => {
        props.savetraining(training);
        handleClose();
    }

    return (
        <div style={{display:"flex"}}>
            <Button style={{margin:10,justifyContent:'left'}} variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Training
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Training</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="date"
                        value={training.date}
                        label="Date"
                        fullWidth
                    />
                    <TextField
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        label="Activity"
                        fullWidth
                    />                 <TextField
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        label="Duration"
                        fullWidth
                    />                 <TextField
                        onChange={e => handleInputChange(e)}
                        margin="dense"
                        name="customer"
                        value={training.customer}
                        label="Customer"
                        fullWidth
                    /> 
                </DialogContent>
                <DialogActions>
                    <Button style={{ margin: 10 }} onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={addTraining} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}