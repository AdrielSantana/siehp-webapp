import React from "react";
import { AdminPagesHeaderRootProps, AdminPagesHeaderTitleProps, AdminPagesHeaderButtonProps, AdminPagesHeaderFilterProps, AdminPagesHeaderButtonIconProps, AdminPagesHeaderButtonContentProps, AdminPagesHeaderBodyProps } from "./types";
import { SearchIcon } from "../Icons";

const AdminPagesHeaderRoot = ({
  children,
  className,
  ...props
}: AdminPagesHeaderRootProps) => {
  return (
    <div
      className={`w-100% h-2.5 flex flex-wrap  mt-[4.25rem] mb-1.5 items-center content-center mx-4 ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AdminPagesHeaderTitle = ({
  children,
  className,
  ...props
}: AdminPagesHeaderTitleProps) => {
  return (
    <h1
      className={`text-gray-900-tk text-[1.5rem] font-semi-bold left-0 ${className ?? ""}`}
      {...props}
    >
      {children}
    </h1>
  );
};

const AdminPagesHeaderBody=({children, className, ...props}:AdminPagesHeaderBodyProps)=>{
  return (<div className={`flex flex-grow justify-end items-center ${className?? ""}`} {...props}>
    {children}
  </div>);
}

const AdminPagesHeaderButtonContent = ({children, className, ...props}: AdminPagesHeaderButtonContentProps)=>{
  return (
    <div className={`flex flex-wrap ${className??""}`} {...props}>
      {children}
    </div>
  )
}

const AdminPagesHeaderButton = ({children, className, ...props}: AdminPagesHeaderButtonProps)=>{
  return (
    <button className={`mr-4 ${className ?? ""}`} {...props}>{children}</button>
  );
}

const AdminPagesHeaderButtonIcon = ({children, className, ...props}: AdminPagesHeaderButtonIconProps)=>{
  return (<div className={`w-1 h-[1.125rem] mr-1  ${className ?? ""}`} {...props}>
    {children}
  </div>)
}

const AdminPagesHeaderFilter = ({className, ...props}: AdminPagesHeaderFilterProps)=>{
  return(
    <div>
      <input
        type="text"
        placeholder="Pesquisar..."
    {...props}
    className={`rounded-[4rem] h-2.5 w-[15rem] bg-gray-700-tk px-1 py-[0.7rem] appearance-none border-none text-gray-100-tk text-1 placeholder-gray-100-tk placeholder-1  ${className ?? ""}`}
  >
  

  </input>
  <SearchIcon className="[&>path]:fill-gray-300-tk" width={24} height={24} viewBox="0 0 30 24" />
    </div>

)
}

export const AdminPagesHeader = {
  Root: AdminPagesHeaderRoot,
  Title: AdminPagesHeaderTitle,
  Body: AdminPagesHeaderBody,
  Button: AdminPagesHeaderButton,
  ButtonIcon: AdminPagesHeaderButtonIcon,
  Filter: AdminPagesHeaderFilter,
  ButtonContent: AdminPagesHeaderButtonContent
};
