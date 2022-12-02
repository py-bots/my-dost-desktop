import * as React from 'react';

import { Typography, TableRow, Table, TableBody, TableCell, TableContainer, TableHead, Paper, ButtonGroup, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExtensionIcon from '@mui/icons-material/Extension';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function BasicTable({ data, handleDelete, handleEdit, handleCopy , handleSchedule }) {
    function createData(sno, name, description, timeStamp, id) {
        return { sno, name, description, timeStamp, id };
    }

    const rows = data.map((item, index) => {
        return createData(index + 1, item.name, item.description, item.timeStamp, item.id);
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="dashboard">
                <TableHead>
                    <TableRow sx={{
                        fontWeight: 'bold',
                        backgroundColor: '#06283D',
                        border: '0px solid #fff',
                        color: 'text.primary',

                    }}>
                        <TableCell align="center" sx={{
                            color: 'white',
                        }} >S.no</TableCell>
                        <TableCell align="center" sx={{
                            color: 'white',
                        }}>Title</TableCell>
                        <TableCell align="center" sx={{
                            color: 'white',
                        }}>Description</TableCell>
                        <TableCell align="center" sx={{
                            color: 'white',
                        }}>Time</TableCell>
                        <TableCell align="center" sx={{
                            color: 'white',
                        }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                backgroundColor: '#112031',
                            }}
                        >
                            <TableCell align="center"
                                sx={{
                                    width: '6%'
                                }}>
                                {row.sno}
                            </TableCell>

                            <TableCell align="center">
                                <Typography>
                                    {row.name}
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography>
                                    {row.description}
                                </Typography></TableCell>
                            <TableCell align="center" sx={{
                                width: '10%'
                            }}>
                                {row.timeStamp}
                            </TableCell>
                            <TableCell align="center" sx={{
                                padding: '10px',
                                width: '6%'
                            }}>
                                <ButtonGroup variant="outlined" aria-label="actions" size="small">

                                    <IconButton aria-label="edit" size="small" color="primary" onClick={() => {
                                        handleEdit(row.id)
                                    }}>
                                        <ExtensionIcon />
                                    </IconButton>

                                    <IconButton aria-label="delete" size="small" color='error' onClick={() => {
                                        handleDelete(row.id)
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="duplicate" size="small" onClick={() => {
                                        handleCopy(row.id)
                                    }}>
                                        <ContentCopyIcon />
                                    </IconButton>
                                    <IconButton aria-label="schedule" size="small" color = {row.isScheduled?"primary":"error"}  onClick={() => {
                                        handleSchedule(row.id)
                                    }}>
                                        <AccessTimeIcon />
                                    </IconButton>

                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
