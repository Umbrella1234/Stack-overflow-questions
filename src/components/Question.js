import React from "react";
import styled from "styled-components";
import moment from "moment";
import { DATE_FORMAT } from "../constants";

const TableRow = styled.tr`
  &:hover {
    cursor: pointer;
  }
`;

export const Question = ({
  openQuestion,
  question: { owner, title, creation_date, question_id },
}) => {
  return (
    <TableRow onClick={() => openQuestion(question_id)}>
      <td>{owner.display_name}</td>
      <td>{title}</td>
      <td>{moment(creation_date * 1000).format(DATE_FORMAT)}</td>
    </TableRow>
  );
};
