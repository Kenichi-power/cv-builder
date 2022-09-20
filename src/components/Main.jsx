import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";

import { Header, Footer, Avatar, Title, Descr, Range } from ".";

const WrMainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`;

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? "center" : "start")};
  margin: 2rem 0;
`;

const Sidebar = styled.div`
  flex: 1rem;
  margin-right: 1rem;
`;

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`;

const Main = () => {
  const [skillsCounter, setSkillsCounter] = useState(1);
  const [worksCounter, setWorksCounter] = useState(1);

  const componentRef = useRef();
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="ui-wrMainer">
      <Header onClick={handlePrintClick} />
      <div className="ui-content-wrMainer">
        <WrMainer>
          <div className="ui-container" ref={componentRef}>
            <Row itemsCenter>
              <Sidebar>
                <Avatar />
              </Sidebar>
              <Content>
                <Title>Kenes Baimukanov</Title>
                <Descr>
                  Experienced Software & Machine Learning with a demonstrated
                  history.
                </Descr>
              </Content>
            </Row>

            <Row>
              <Sidebar>
                <Title size="3" isUppercase>
                  About me:
                </Title>
                <Descr>Software Engineer</Descr>
                <Descr isSecondary>Kazakhstan, Uralsk | kenny_died</Descr>

                <Descr isPrimary style={{ marginTop: "2rem" }}>
                  kenes@gmail.com
                </Descr>
                <Descr isPrimary>+7 747 812 5595</Descr>
              </Sidebar>

              <Content>
                <Title size="3" isUppercase>
                  Education:
                </Title>
                <Descr>Hangzhou Dianzi University - Software Engineering</Descr>

                <Title
                  size="3"
                  isUppercase
                  isShowButton
                  onClick={() => setWorksCounter(worksCounter + 1)}
                  style={{ marginTop: "3.6rem" }}
                >
                  Work experience:
                </Title>
                {new Array(worksCounter).fill(1).map((_, i) => (
                  <Descr key={i}> {i + 1}.Solutions Architect, Stripe.</Descr>
                ))}

                <Title
                  size="3"
                  isShowButton
                  onClick={() => setSkillsCounter(skillsCounter + 1)}
                  isUppercase
                  style={{ marginTop: "3rem" }}
                >
                  Skills:
                </Title>
                {new Array(skillsCounter).fill(1).map((_, i) => (
                  <Range key={i} />
                ))}
              </Content>
            </Row>
          </div>
        </WrMainer>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
