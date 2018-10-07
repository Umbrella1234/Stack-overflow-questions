import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import { Question } from "./components/Question";
import InfiniteScroll from "react-infinite-scroll-component";
import { QuestionModal } from "./components/QuestionModal";
import { Loader } from "./components/Loader";
import { getQuestions } from "./api";

class App extends Component {
  state = {
    questions: [],
    pageNum: 1,
    openedQuestionId: null,
    hasMore: true
  };

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    const { pageNum, questions } = this.state;
    getQuestions(pageNum)
      .then(({ data: { items: fetchedQuestions, has_more } }) => {
        this.setState({
          questions: [...questions, ...fetchedQuestions],
          pageNum: pageNum + 1,
          hasMore: has_more
        });
      })
      .catch(() => alert("error loading data!"));
  };

  openQuestion = questionId => {
    this.setState({ openedQuestionId: questionId });
  };

  closeQuestion = () => {
    this.setState({ openedQuestionId: null });
  };

  render() {
    const { questions, hasMore, openedQuestionId } = this.state;
    const openQuestion = questions.find(
      question => question.question_id === openedQuestionId
    );

    return (
      <Container>
        {questions.length ? (
          <Row>
            <Col xs={12}>
              <InfiniteScroll
                dataLength={questions.length}
                next={this.getQuestions}
                hasMore={hasMore}
                loader={<Loader />}
              >
                <Table hover bordered>
                  <thead>
                    <tr>
                      <th>Author</th>
                      <th>Title</th>
                      <th>Creation date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map(question => (
                      <Question
                        key={question.question_id}
                        openQuestion={this.openQuestion}
                        question={question}
                      />
                    ))}
                  </tbody>
                </Table>
              </InfiniteScroll>
            </Col>
          </Row>
        ) : (
          <Loader isCentered />
        )}
        <QuestionModal
          title={openQuestion.title}
          body={openQuestion.body}
          link={openQuestion.link}
          isOpen={!!openedQuestionId}
          onClose={this.closeQuestion}
        />
      </Container>
    );
  }
}

export default App;
