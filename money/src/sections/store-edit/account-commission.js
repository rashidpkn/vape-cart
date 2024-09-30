import { Button, Card, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { DB } from 'src/auth/context/firebase/auth-provider';
import api from 'src/utils/api';

export default function AccountCommission({ user }) {

    const [commission, setCommission] = useState({
        tier1: 25,
        tier2: 23,
        tier3: 20,
        target1: 50000,
        target2: 100000,
        target3: 150000,
        agreement: ''
    });
    console.log(user);
    useEffect(() => {
        if (user.commission) {
            setCommission(user.commission)
        }
    }, [user])


    const onSubmit = async () => {
        try {
            const userRef = doc(DB, 'users', user.uid);
            await updateDoc(userRef, { commission });
            alert("Commission will be updated soon")
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Card>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>

                        <TableCell>Percetage %</TableCell>
                        <TableCell>Target</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Base Commission</TableCell>
                        <TableCell>30%</TableCell>
                        <TableCell>N/A</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Teir 1 Rebate</TableCell>
                        <TableCell>
                            <TextField label='Tier 1 rebate' value={commission.tier1} onChange={e => setCommission(_ => ({ ..._, tier1: +e.target.value }))} type='number' />
                        </TableCell>
                        <TableCell>
                            <TextField label='Target 1' value={commission.target1} onChange={e => setCommission(_ => ({ ..._, target1: +e.target.value }))} type='number' />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Teir 2 Rebate</TableCell>
                        <TableCell>
                            <TextField label='Tier 2 rebate' value={commission.tier2} onChange={e => setCommission(_ => ({ ..._, tier2: +e.target.value }))} type='number' />
                        </TableCell>
                        <TableCell>
                            <TextField label='Target 2' value={commission.target2} onChange={e => setCommission(_ => ({ ..._, target2: +e.target.value }))} type='number' />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Teir 3 Rebate</TableCell>
                        <TableCell>
                            <TextField label='Tier 3 rebate' value={commission.tier3} onChange={e => setCommission(_ => ({ ..._, tier3: +e.target.value }))} type='number' />
                        </TableCell>
                        <TableCell>
                            <TextField label='Target 3' value={commission.target3} onChange={e => setCommission(_ => ({ ..._, target3: +e.target.value }))} type='number' />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            Upload Commission agreement
                        </TableCell>
                        <TableCell colSpan={2}>
                            <TextField type='file' fullWidth onChange={async (e) => {
                                try {
                                    const form = new FormData()
                                    form.append('images', e.target.files[0])
                                    const { data } = await api.post('upload', form)
                                    setCommission(_ => ({ ..._, agreement: data[0] }))
                                } catch (error) {

                                }
                            }} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell colSpan={2}></TableCell>
                        <TableCell colSpan={1}>
                            <Button variant='contained' color='success' onClick={onSubmit}>Update</Button>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </Card>
    );
}
