import { faker } from '@faker-js/faker'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Angrid } from 'react-angrid'

export default {
    title: 'Angrid',
    component: Angrid,
    argTypes: {
        theme: {
            control: {
                type: 'inline-radio',
                options: ['light', 'dark'],
                default: 'light',
            },
        },
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Angrid>

const columns = [
    {
        field: 'userId',
        headerName: 'User Id',
        description: 'user id that is unique',
        width: 30,
        sortable: true,
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
        sortable: true,
    },
    {
        field: 'delete',
        headerName: 'delete(component cell)',
        description: 'delete user',
        width: 50,
    },
]

const data = [
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
]

const Template: ComponentStory<typeof Angrid> = (arguments_) => {
    return (
        <div dir={arguments_.rtl ? 'rtl' : 'ltr'}>
            <Angrid {...arguments_} />
        </div>
    )
}

export const Default = Template.bind({})

Default.args = {
    rows: data,
    columns,
    rtl: false,
    minHeight: 300,
    columnNumberTitle: 'number',
    totalCount: 10,
    loading: false,
    pageSize: 5,
    showTotalRecord: true,
    showRowNumber: true,
    showNumberOfPage: true,
    showPageRange: true,
    showPageSelect: true,
    showPageNumber: true,
    showPageArrow: true,
    showCurrentPage: true,
    textCurrent: 'Current Page',
    textTotal: 'all pages',
    textNumber: 'Page Count',
    textEmpty: 'No Data',
    bordered: false,
    onPageChange: (page: number) => console.log(page),
}
