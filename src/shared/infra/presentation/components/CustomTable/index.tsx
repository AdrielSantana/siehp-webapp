import * as React from "react"

import { TableRootProps, TableBodyProps, TableCaptionProps, TableCellProps, TableFooterProps, TableHeadProps, TableHeaderProps, TableRowProps } from "./types"

const CustomTableRoot = ({children, className, ...props}: TableRootProps) => {
    return (
        <div className="relative w-full overflow-auto">
        <table
          className={`w-full caption-bottom text-sm ${className ?? ""}`}
          {...props}
        >{children}</table>
      </div>
    );

}

const CustomTableHeader = ({children, className, ...props}: TableHeaderProps)=> {
    return (
<thead className={`[&_tr]:border-b ${className ??""}`} {...props}>
    {children}
</thead>
    )
}

const CustomTableBody = ({children, className, ...props}: TableBodyProps)=>{
    return (<tbody

        className={`[&_tr:last-child]:border-0 ${className ??""}`}
        {...props}
      >
        {children}
      </tbody>)
}

const CustomTableFooter = ({children, className, ...props}: TableFooterProps)=>{
    return (  <tfoot
        className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${className ??""}`}
        {...props}
      >
        {children}
      </tfoot>)
}

const CustomTableRow = ({children, className, ...props}: TableRowProps)=>{
    return(
        <tr
        className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className ??""}`}
        {...props}
      >
        {children}
      </tr>
    )
}

const CustomTableHead = ({children, className, ...props}: TableHeadProps)=>{
    return(
<th
    className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${className ??""}`}
    {...props}
  >
    {children}
  </th>
    )
}

const CustomTableCell = ({children, className, ...props}: TableCellProps) =>{
    return(
<td
    className={`p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${className ??""}`}
    {...props}
  >{children}
  </td>
    )
}

const CustomTableCaption = ({children, className, ...props}: TableCaptionProps)=>{
 
    return(
<caption
    className={`mt-4 text-sm text-muted-foreground ${className ??""}`}
    {...props}
  >
    {children}
  </caption>
    )
}

export const CustomTable = {
  Root: CustomTableRoot,
  Header: CustomTableHeader,
  Head: CustomTableHead,
  Fotter: CustomTableFooter,
  Body: CustomTableBody,
  Row: CustomTableRow,
  Cell: CustomTableCell,
  Caption: CustomTableCaption,
}
