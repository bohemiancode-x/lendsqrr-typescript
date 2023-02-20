import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import UserCard from '../components/userCard';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';
import FilterModal from '../components/modals/FilterModal';
import { Oval } from 'react-loader-spinner';
import dayjs from 'dayjs';
import UserCta from '../components/modals/UserCta';

interface Column {
    id: 'orgName' | 'userName' | 'email' | 'phoneNumber' | 'createdAt' | 'status';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'orgName', label: 'ORGANIZATION', minWidth: 100 },
    { id: 'userName', label: 'USERNAME', minWidth: 100 },
    { id: 'email', label: 'EMAIL'},
    {id: 'phoneNumber', label: 'PHONE NUMBER'},
    { id: 'createdAt', label: 'DATE JOINED'},
    { id: 'status', label: 'STATUS'} 
  ];

interface Data {
    organization: string;
    username: string;
    email: string;
    phoneNumber: number;
    dateJoined: string;
    status: string
}

function createData(
    organization: string,
    username: string,
    email: string,
    phoneNumber: number,
    dateJoined: string,
    status: string
): Data {
    return {organization, username, email, phoneNumber, dateJoined, status};
};


const rows = [
    createData('Lendsqr', 'Debby Ogana', 'debby2@lendsqr.com', 8160780928, 'Apr 30, 2020 10:00AM', 'Active')
]

type DataType = {
    id: number;
    createdAt: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
}

const statuses: string[] = ['Active', 'Inactive', 'Pending', 'Blacklisted'];

const Users: React.FC = () => {
    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

    const url: string = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

    const fetchData = async () => {
        setIsPending(true)
        const response = await fetch(url);
        const users = await response.json()
        setData(users)
        setIsPending(false);
    }

    useEffect(() => {
        fetchData();
    }, []);


    const filterModal = () => {
        setShowFilterModal(!showFilterModal);
    }

    console.log(data);
    

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

  return (
    <Layout>
        <div className='w-full px-5 lg:px-16 mt-10'>
            <h2 className='text-[#213f7d] text-xl font-bold my-5'>Users</h2>
            <div className='flex flex-col md:grid gap-3 md:grid-cols-2 lg:flex lg:flex-row justify-between'>
                <UserCard icon='/icon-users.svg' text='USERS' count={2453} />
                <UserCard icon='/icon-active.svg' text='ACTIVE USERS' count={2453} />
                <UserCard icon='/icon-loans.svg' text='USERS WITH LOANS' count={12453} />
                <UserCard icon='/icon-savings.svg' text='USERS WITH SAVINGS' count={102453} />
            </div>

            {isPending && 
                <div className='flex justify-center items-center w-full h-[50vh]'>
                    <Oval
                            height={80}
                            width={80}
                            color="#5457fd"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#5457fd"
                            strokeWidth={2}
                            strokeWidthSecondary={2}

                            />
                        </div>
                        }

            {!isPending && <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '20px', color: "#545F7D", position: 'relative' }}>
                <TableContainer sx={{ maxHeight: 1000 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: 150, color: '#545F7D' }}
                            >
                            {column.label}
                            <FilterListIcon onClick={filterModal} sx={{cursor: 'pointer', paddingLeft: '2px'}} fontSize='small' />
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <TableRow role="checkbox" tabIndex={-1} key={row['phoneNumber']}>
                                {columns.map((column) => {
                                const value = row[column.id];
                                const status = statuses[Math.floor(Math.random() * statuses.length)];

                                return (                                
                                    <TableCell sx={{color: '#545F7D'}} key={column.id} align={column.align}>
                                        <span className={column.id === 'status' ? `${status}` : ''}>
                                            {column.id === 'createdAt'
                                                ? dayjs(value).format('MMM D, YYYY h:mm A')
                                                : column.id === 'status' ? status : value}
                                        </span>
                                    </TableCell>
                                );
                                })}
                                <TableCell>
                               
                                <PopupState variant="popover" popupId="demo-popup-popover">
                                    {(popupState) => (
                                        <div>
                                            <MoreVertOutlinedIcon {...bindTrigger(popupState)} sx={{cursor: 'pointer', color: '#545F7D'}} fontSize='small' />
                                        <Popover
                                            {...bindPopover(popupState)}
                                            anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                            }}
                                        >
                                            <UserCta />
                                        </Popover>
                                        </div>
                                    )}
                                    </PopupState>
                                </TableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                {showFilterModal && <FilterModal />}
                </Paper>
            }
        </div>
    </Layout>
  )
}

export default Users