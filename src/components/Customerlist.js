import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';

export default function Customerlist() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))

    }
    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, { method: 'DELETE' })
                .then(res => fetchData())
                .catch(err => console.error(err))

            console.log()
        }
    }

    const columns = [
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            Header: 'Streetaddress',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        }, //Edit funktion kutsu
        {
            sortable: false,
            filterable: false,
            width: 70,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 70,
            accessor: 'links[0].href'
            , Cell: row => <Button size='small' color='secondary' onClick={() => deleteCustomer(row.value)}>Delete</Button>
        }
    ]
    // Tallennus
    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }
   // Editointi
    const updateCustomer = (customer, link) =>{
        fetch(link,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    return (
        <div>
            <Addcustomer saveCustomer={saveCustomer}/>
            <ReactTable filterable={true} data={customers} columns={columns} />
        </div>
    );
}