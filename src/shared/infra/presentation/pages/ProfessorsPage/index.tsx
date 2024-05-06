"use client";

import { AdminPagesHeader } from "../../components/AdminPagesHeader";
import { CustomTable } from "../../components/CustomTable";
import { AddPeopleIcon } from "../../components/Icons";

const ProfessorPage = ({}) => {
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
            <AdminPagesHeader.Filter/>
            </AdminPagesHeader.Body>
        </AdminPagesHeader.Root>

        <CustomTable.Root >
            <CustomTable.Header >
                <CustomTable.Row >
                    <CustomTable.Head className="min-w-[9rem]"> 
                        Matrícula
                    </CustomTable.Head>
                    <CustomTable.Head className="min-w-[14rem]"> 
                        Nome do Professor
                    </CustomTable.Head>
                    <CustomTable.Head className="min-w-[14rem]"> 
                        Departamento
                    </CustomTable.Head>
                    <CustomTable.Head className="min-w-[15rem]" > 
                        Estado do Professor
                    </CustomTable.Head>
                </CustomTable.Row>
            </CustomTable.Header>
            <CustomTable.Body >
                <CustomTable.Row >
                    <CustomTable.Cell className="min-w-[9rem]">
                        202100012345
                    </CustomTable.Cell>
                    <CustomTable.Cell className="min-w-[14rem]">
                        Professor 1
                    </CustomTable.Cell>
                    <CustomTable.Cell className="min-w-[14rem]">
                        Morfologia
                    </CustomTable.Cell>
                    <CustomTable.CellStatus status="ACTIVE" className="min-w-[15rem]">
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
