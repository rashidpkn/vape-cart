import { Card, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function DeliverySettings({user}) {
    const {deliverySettings=[]} = user
  return (
    <Card>
            <Table>
                <TableHead>
                        <TableRow>
                            <TableCell>Days</TableCell>
                            <TableCell>Open Time</TableCell>
                            <TableCell>Close Time</TableCell>
                            <TableCell>Last Call</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                            {deliverySettings.map(row=>{
                                return(
                                    <TableRow>
                                        <TableCell>{row.day}</TableCell>
                                        <TableCell>{ fTime(row.open)}</TableCell>
                                        <TableCell>{ fTime(row.close)}</TableCell>
                                        <TableCell>{ fTime(row.lastCall)}</TableCell>
                                    </TableRow>
                                )
                            })}
                </TableBody>
            </Table>
    </Card>
  )
}


function fTime(input) {
    if(!input) return
    
    let [hours, minutes] = input.split(':').map(Number);
    let period = hours >= 12 ? "PM" : "AM";
    let formattedHours = hours % 12 || 12;
    return formattedHours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + period;
}