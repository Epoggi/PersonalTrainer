import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';

export default function Traininglistwith() {

    const [trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
    }
    const deleteTraining = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, { method: 'DELETE' })
                .then(res => fetchData())
                .catch(err => console.error(err))

            console.log()
        }
    }
  
    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Customer',
            accessor: 'customer.firstname'
        },
        {
            sortable: false,
            filterable: false,
            width: 70,
            accessor: 'links[0].href'
            , Cell: row => <Button size='small' color='secondary' onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
        
    ]
 
    return (
        <div>
<ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}
