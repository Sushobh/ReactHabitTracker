import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import EmployeeListTable from './EmployeeListTable'
import { Breadcrumb } from 'app/components'

const Employee = () => {

    return (
        <Fragment>
            <div className="m-sm-30">
            <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Pages', path: '/' },
                            { name: 'Employee' },
                        ]}
                    />
                </div>
            <div className="m-sm-30 mt-6">
                <Grid container spacing={3}>

                        {/* Top Selling Products */}
                        <EmployeeListTable />

                    </Grid>
                    </div>
                    </div>
        </Fragment>
    )
}

export default Employee
