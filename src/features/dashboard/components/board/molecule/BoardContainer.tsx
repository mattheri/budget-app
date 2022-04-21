import { FC } from "react";
import { TableContainer, Tbody, Th, Thead, Tr, Table } from "@chakra-ui/react";
import Container from "../atom/Container";

const BoardContainer: FC = ({ children }) => {
  return (
    <Container>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Budgets</Th>
            </Tr>
          </Thead>
          <Tbody>{children}</Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BoardContainer;
