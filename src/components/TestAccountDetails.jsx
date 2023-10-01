import { styled } from "styled-components";

const StyledTestAccountDetails = styled.div`
  background: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1.6rem;
  border-radius: 10px;
  outline: 1px solid var(--color-grey-200);

  & p {
    font-size: 15px;
    font-weight: 500;
  }

  & span {
    color: var(--color-brand-500);
    font-weight: 500;
    font-size: 16px;
  }
`;

function TestAccountDetails() {
  return (
    <StyledTestAccountDetails>
      <h4>Test Account:</h4>
      <div>
        <p>
          Email: <span>test.account@email.com</span>
        </p>
        <p>
          Password: <span>test1234</span>
        </p>
      </div>
    </StyledTestAccountDetails>
  );
}

export default TestAccountDetails;
