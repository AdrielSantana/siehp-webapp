import * as React from "react"

import { TableRootProps, TableBodyProps, TableCaptionProps, TableCellProps, TableFooterProps, TableHeadProps, TableHeaderProps, TableRowProps } from "./types"

const CustomTableRoot = ({children, ref, className, ...props}: TableRootProps) => {
    return (
        <div className="relative w-full overflow-auto">
        <table
          ref={ref}
          className={`w-full caption-bottom text-sm ${className ?? ""}`}
          {...props}
        >{children}</table>
      </div>
    );

}

const CustomTableHeader = ({children, className, ref, ...props}: TableHeaderProps)=> {
    return (
<thead ref={ref} className={`[&_tr]:border-b ${className ??""}`} {...props}>
    {children}
</thead>
    )
}

const CustomTableBody = ({children, className, ref, ...props}: TableBodyProps)=>{
    return (<tbody
        ref={ref}
        className={`[&_tr:last-child]:border-0 ${className ??""}`}
        {...props}
      >
        {children}
      </tbody>)
}

const CustomTableFooter = ({children, className, ref, ...props}: TableFooterProps)=>{
    return (  <tfoot
        ref={ref}
        className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${className ??""}`}
        {...props}
      >
        {children}
      </tfoot>)
}

const CustomTableRow = ({children, className, ref, ...props}: TableRowProps)=>{
    return(
        <tr
        ref={ref}
        className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className ??""}`}
        {...props}
      >
        {children}
      </tr>
    )
}

const CustomTableHead = ({children, ref, className, ...props}: TableHeadProps)=>{
    return(
<th
    ref={ref}
    className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${className ??""}`}
    {...props}
  >
    {children}
  </th>
    )
}

const CustomTableCell = ({children, className, ref, ...props}: TableCellProps) =>{
    return(
<td
    ref={ref}
    className={`p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${className ??""}`}
    {...props}
  >{children}
  </td>
    )
}

const CustomTableCaption = ({children, className, ref, ...props}: TableCaptionProps)=>{
    return(
<caption
    ref={ref}
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
