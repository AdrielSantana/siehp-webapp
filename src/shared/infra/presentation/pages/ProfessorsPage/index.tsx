"use client";

import { CustomTable } from "../../components/CustomTable";

const ProfessorPage = ({}) => {
  return (
    <div>
        <CustomTable.Root ref={`tabela`}>
            <CustomTable.Header ref={`Cabeçalho`}>
                <CustomTable.Row ref={`linha`}>
                    <CustomTable.Head ref={`Colunas`}> 
                        sim
                    </CustomTable.Head>
                </CustomTable.Row>
            </CustomTable.Header>
            <CustomTable.Body ref={`Corpo`}>
                <CustomTable.Row ref={`Linhas`}>
                    <CustomTable.Cell ref={`Coluna`}>
                        coluna
                    </CustomTable.Cell>
                </CustomTable.Row>
            </CustomTable.Body>
        </CustomTable.Root>
    </div>
  );
};

export default ProfessorPage;
