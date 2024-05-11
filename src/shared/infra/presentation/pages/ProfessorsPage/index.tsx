"use client";

import { AdminPagesHeader } from "../../components/AdminPagesHeader";
import { CustomTable } from "../../components/CustomTable";
import { AddPeopleIcon } from "../../components/Icons";

const ProfessorPage = ({ }) => {
    return (
        <>
            <AdminPagesHeader.Root>
                <AdminPagesHeader.Title>
                    Professores
                </AdminPagesHeader.Title>
                <AdminPagesHeader.Body>
                    <AdminPagesHeader.ButtonContent>
                        <AdminPagesHeader.ButtonIcon>
                            <AddPeopleIcon className={`[&>path]:fill-gray-900-tk`} />
                        </AdminPagesHeader.ButtonIcon>
                        <AdminPagesHeader.Button>
                            Adicionar Professor
                        </AdminPagesHeader.Button>
                    </AdminPagesHeader.ButtonContent>
                    <AdminPagesHeader.Filter />
                </AdminPagesHeader.Body>
            </AdminPagesHeader.Root>

            <CustomTable.Root className="overflow-x-auto">
                <CustomTable.Header >
                    <CustomTable.Row >
                        <CustomTable.Head className="min-w-[175px] ml-[30px]">
                            Matrícula
                        </CustomTable.Head>
                        <CustomTable.Head className="min-w-[250px] max-w-[250px] ml-[30px]">
                            Nome do Professor
                        </CustomTable.Head>
                        <CustomTable.Head className="min-w-[250px] max-w-[250px] ml-[30px]">
                            Departamento
                        </CustomTable.Head>
                        <CustomTable.Head className="w-[180px] ml-[30px]" >
                            Estado do Professor
                        </CustomTable.Head>
                    </CustomTable.Row>
                </CustomTable.Header>
                <CustomTable.Body >
                    <CustomTable.Row >
                        <CustomTable.Cell className="min-w-[175px] ml-[30px] mr-[50px]">
                            202100012345
                        </CustomTable.Cell>
                        <CustomTable.Cell className="min-w-[250px] max-w-[250px] mr-[45px]">
                            ANA CAROLINA GUIMARAES FALEIROS
                        </CustomTable.Cell>
                        <CustomTable.Cell className="min-w-[250px] max-w-[250px] mr-[45px]">
                            Morfologia
                        </CustomTable.Cell>
                        <CustomTable.CellStatus status="ACTIVE" className="max-w-[100px] mr-[125px]"> 
                            Ativo
                        </CustomTable.CellStatus>
                        <CustomTable.CellButton>
                            Ver Turmas
                        </CustomTable.CellButton>
                        <CustomTable.CellMenu />
                    </CustomTable.Row>

                    <CustomTable.Row >
                        <CustomTable.Cell className="min-w-[175px] ml-[30px] mr-[50px]">
                            202100012345
                        </CustomTable.Cell>
                        <CustomTable.Cell className="min-w-[250px] max-w-[250px] mr-[45px]">
                            ANA CAROLINA GUIMARAES FALEIROS
                        </CustomTable.Cell>
                        <CustomTable.Cell className="min-w-[250px] max-w-[250px] mr-[45px]">
                            Morfologia
                        </CustomTable.Cell>
                        <CustomTable.CellStatus status="ACTIVE" className="max-w-[100px] mr-[125px]"> 
                            Ativo
                        </CustomTable.CellStatus>
                        <CustomTable.CellButton>
                            Ver Turmas
                        </CustomTable.CellButton>
                        <CustomTable.CellMenu />
                    </CustomTable.Row>
                </CustomTable.Body>
            </CustomTable.Root>
        </>
    );
};

export default ProfessorPage;
