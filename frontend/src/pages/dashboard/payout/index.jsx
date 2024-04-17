import React, { useCallback, useEffect, useState } from 'react'

import Card from '@mui/material/Card'
import TableBody from '@mui/material/TableBody'
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs'
import Scrollbar from 'src/components/scrollbar'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import {TableRow,TableCell} from '@mui/material'

import { TableHeadCustom, TableNoData, useTable } from 'src/components/table'
import api from 'src/utils/api'
import { fDate } from 'src/utils/format-time'
import { fCurrency } from 'src/utils/format-number'
import Label from 'src/components/label'
import Avatar from '@mui/material/Avatar'
import Collapse from '@mui/material/Collapse';
import TextField  from '@mui/material/TextField';
import { Icon } from '@iconify/react'
import PayoutTableRow from './Table-Row'
import { useAuthContext } from 'src/auth/hooks'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination';


export default function Payout() {
  const [uploadDoc, setUploadDoc] = useState(false)
    const [payout, setPayout] = useState([])
    const TABLE_HEAD = [
        { id: 'User', label: 'User'},
        { id: 'createdAt', label: 'Date'},
        { id: 'method', label: 'Method'},
        { id: 'currency', label: 'Currency'},
        { id: 'amount', label: 'Amount'},
        { id: 'account/walletaddress', label: 'Account / Wallet Address' },
        { id: 'status', label: 'Status'},
        { id: 'Action', label: 'Action'},
    ]

    const {user} = useAuthContext()
    const  fetchPayout =  useCallback(
      async () => {
        try {
            const {data} = await api.get('/payout',{
              params:{
                fName:user.displayName
              }
            })
setPayout(data.sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt)))
            
        } catch (error) {
            
        }
      },
      [],
    )
    
    useEffect(() => {
      fetchPayout()
    }, [])
    


  return (
    <Box px={5}>
        <CustomBreadcrumbs  heading={'Payout'} links={[{}]}/>
        <Card>
        <Scrollbar>
              <Table >
                <TableHeadCustom
                  headLabel={TABLE_HEAD}
                />

                <TableBody>
                    {payout.map(item=>(
                    <PayoutTableRow  item={item} fetchPayout={fetchPayout} key={item.id}/>
                    ))}

<TableNoData notFound={!payout.length} />

                </TableBody>
              </Table>
              <Box justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'} py={2}>
            <Pagination count={payout.length && 1} />
          </Box>
            </Scrollbar>
        </Card>
    </Box>
  )
}
