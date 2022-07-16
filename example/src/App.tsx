import { faker } from '@faker-js/faker'
import { Angrid } from 'react-angrid'

const columns = [
    {
        field: 'userId',
        headerName: 'User Id',
        description: 'user id that is unique',
        width: 50,
    },
    {
        field: 'fullName',
        headerName: 'Fullname',
        description: 'full name of user',
        width: 100,
        sortable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        description: 'age of user',
        width: 50,
    },
    {
        field: 'delete',
        headerName: 'delete(component cell)',
        description: 'delete user',
        width: 50,
    },
]

const createUser = () => {
    return {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    }
}

const createUsers = (numUsers = 10) => {
    return Array.from({ length: numUsers }, createUser)
}

function App() {
    return (
        <div className='App'>
            <Angrid
                showRowNumber
                columns={columns}
                rows={createUsers()}
                totalCount={100}
                onPageChange={(page, size) => console.log(page, size)}
                pageSize={10}
                showCurrentPage
                showNumberOfPage
                showTotalRecord
            />
        </div>
    )
}

export default App
