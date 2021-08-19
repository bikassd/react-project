import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import users from './users.json'
import { COLUMN } from './column'
import './table.css'
import { Link } from 'react-router-dom'
import { Filter } from './filter'
export const Table = () => {

    const columns = useMemo(() => COLUMN, [])
    const data = useMemo(() => users, [])



    const tableInstance = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy, usePagination)
 
    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        prepareRow,
        gotoPage,
        pageCount,
        state,
        setGlobalFilter,
    } = tableInstance

    const { globalFilter, pageIndex } = state

    return (
        <>
        <div className="sort-filter">
        <div className="filter">
        <Filter filter={globalFilter}  setFilter={setGlobalFilter} />
        </div>
        <div className="paginate">
        <span>
            Page {''}
            <strong>
                {pageIndex + 1} of {pageOptions.length} {''}
            </strong>
        </span>
        <span>
            | Go to page: {''}
            <input type='number' defaultValue={pageIndex + 1 } onChange={ e =>{
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
            }} style={{width: '50px'}} />
        </span>
        <span className="buttons">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={() => gotoPage(pageCount - 1 )} disabled={!canNextPage}>{'>>'}</button>
        </span>
        </div>
        </div>
        <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map( column =>(
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' 🔽'
                                        : ' 🔼'
                                    : ''}
                                </span>
                                
                                </th>
                            ))
                        }
                        <th>Plans</th>
                        
                    </tr>

                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
            {
                page.map(row =>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map( (cell) => {
                                   return (
                                     
                                    <td{...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    
                               )})
                            }
                            <td className="plans-parent"><Link to={`/plans/${row.values.id}`} className="plans">SeePlans</Link></td>
                            
                            
                        </tr>
                    )
                    })
            }
                
            </tbody>
        </table>

        </>
    )
}



