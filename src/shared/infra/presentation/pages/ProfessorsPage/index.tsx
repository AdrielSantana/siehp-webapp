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
                    <CustomTable.Head > 
                        Matrícula
                    </CustomTable.Head>
                    <CustomTable.Head > 
                        Nome do Professor
                    </CustomTable.Head>
                    <CustomTable.Head > 
                        Departamento
                    </CustomTable.Head>
                    <CustomTable.Head > 
                        Estado do Professor
                    </CustomTable.Head>
                </CustomTable.Row>
            </CustomTable.Header>
            <CustomTable.Body >
                <CustomTable.Row >
                    <CustomTable.Cell >
                        202100012345
                    </CustomTable.Cell>
                    <CustomTable.Cell >
                        Professor 1
                    </CustomTable.Cell>
                    <CustomTable.Cell >
                        Morfologia
                    </CustomTable.Cell>
                    <CustomTable.Cell >
                        Ativo
                    </CustomTable.Cell>
                </CustomTable.Row>
            </CustomTable.Body>
        </CustomTable.Root>
    </>
  );
};

export default ProfessorPage;
