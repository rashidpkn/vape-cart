import { Box, Button, Card, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// sections
import { ChatView } from 'src/sections/chat/view';
import api from 'src/utils/api';

// ----------------------------------------------------------------------

export default function ChatPage() {
  const [support, setSupport] = useState([])


  const getSupport = () => {
    api.get('/support').then(res => {
      setSupport(res.data)
    })
  }

  useEffect(() => {
    getSupport()
  }, [])



  return (
    <>
      <Helmet>
        <title> Dashboard: Chat</title>
      </Helmet>

      <Box>
        <Typography
          variant="h4"
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          Support
        </Typography>

        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Status</TableCell>

                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {support.map(e => (
                <TableRow>
                  <TableCell>{e.id}</TableCell>
                  <TableCell>{e.username}</TableCell>
                  <TableCell>{e.email}</TableCell>
                  <TableCell>{e.type}</TableCell>
                  <TableCell>{e.subject}</TableCell>
                  <TableCell>{e.message}</TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>{e.status}</TableCell>

                  <TableCell>
                    <Button variant='contained' color='success' onClick={() => {
                      api.patch(`/support/${e.id}`, { status: 'completed' }).then(() => {

                        getSupport()
                      })
                    }}>Completed</Button>
                    <Button variant='contained' color='warning' sx={{ ml: 3 }}
                      onClick={() => {
                        api.patch(`/support/${e.id}`, { status: 'processing' }).then(() => {

                          getSupport()
                        })
                      }}
                    >Processing</Button>
                    <Button variant='contained' color='error' sx={{ ml: 3 }}
                      onClick={() => {
                        api.delete(`/support/${e.id}`).then(() => {

                          getSupport()
                        })
                      }}
                    >Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Box>


      {/* <ChatView /> */}
    </>
  );
}
