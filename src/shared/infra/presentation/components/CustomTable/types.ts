import * as React from "react";

export interface TableRootProps extends React.HTMLAttributes<HTMLTableElement>{
    children: React.ReactNode
    ref: string
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement>{
    children:React.ReactNode
    ref: string
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement>{
    children:React.ReactNode
    ref: string
}

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement>{
    children:React.ReactNode
    ref: string
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement>{
    children:React.ReactNode
    ref: string
}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement>{
    children:React.ReactNode
    ref: string
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement>{
    children: React.ReactNode
    ref: string
}

export interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement>{
    children: React.ReactNode
    ref: string
}
