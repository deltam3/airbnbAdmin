import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">계정을 업데이트</Heading>

      <Row>
        <Heading as="h3">유저 정보를 수정하세요</Heading>
        <p>유저 데이터 폼을 업데이트하세요.</p>
      </Row>

      <Row>
        <Heading as="h3">비밀번호를 변경하세요.</Heading>
        <p>유저 비밀번호 폼을 업데이트하세요.</p>
      </Row>
    </>
  );
}

export default Account;
